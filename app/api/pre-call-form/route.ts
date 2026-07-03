// Receives a pre-call discovery submission and emails it to the Markit team.
// Mirrors the Cowboy Closers HQ notify pattern: Resend, fire-and-forget on the
// email itself, default onboarding@resend.dev sender so it works without DNS.
//
// Required env:
//   RESEND_API_KEY          - from resend.com (reuse the Cowboy Closers key)
// Optional env:
//   PRE_CALL_NOTIFY_EMAIL   - recipient(s), comma-separated. Default below.
//   PRE_CALL_NOTIFY_FROM    - sender. Default onboarding@resend.dev (no DNS needed).

import { Resend } from "resend";
import { ALL_FIELDS, type Field } from "../../pre-call-form/fields";
import { generateBrief, type CallBrief } from "./brief";

export const runtime = "nodejs";

const DEFAULT_TO = "ellisdeakinn@gmail.com";
const DEFAULT_FROM = "Markit Pre-Call <onboarding@resend.dev>";

type Payload = Record<string, string | string[] | undefined>;

function asText(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return (value ?? "").toString().trim();
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Server-side required validation so a bypassed client can't send junk.
  const missing = ALL_FIELDS.filter((f) => f.required && !asText(body[f.key])).map(
    (f) => f.label
  );
  if (missing.length > 0) {
    return Response.json(
      { ok: false, error: `Missing required answers: ${missing.length}` },
      { status: 422 }
    );
  }

  const businessName = asText(body.business_name) || "a prospect";
  const contactName = asText(body.contact_name) || "Someone";
  const contactEmail = asText(body.contact_email);

  const to = (process.env.PRE_CALL_NOTIFY_EMAIL ?? DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.PRE_CALL_NOTIFY_FROM ?? DEFAULT_FROM;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Don't lose the submission silently: log it so it's recoverable from logs.
    console.error("[pre-call] RESEND_API_KEY not set. Submission body:", JSON.stringify(body));
    return Response.json(
      { ok: false, error: "Email is not configured yet." },
      { status: 500 }
    );
  }

  // Generate the private call-prep brief. Never blocks the email: returns null
  // on any failure (missing key, model error) and we send the answers anyway.
  const brief = await generateBrief(body);

  const resend = new Resend(key);
  const subject = `Pre-call snapshot — ${businessName} (${contactName})`;
  const html = renderHtml(body, brief);
  const text = renderText(body, brief);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      ...(contactEmail ? { replyTo: contactEmail } : {}),
    });
    if (error) {
      console.error("[pre-call] resend error:", error);
      return Response.json({ ok: false, error: "Could not send." }, { status: 502 });
    }
  } catch (err) {
    console.error("[pre-call] send failed:", err);
    return Response.json({ ok: false, error: "Could not send." }, { status: 502 });
  }

  return Response.json({ ok: true });
}

function visibleFields(body: Payload): Array<{ field: Field; value: string }> {
  return ALL_FIELDS.map((field) => ({ field, value: asText(body[field.key]) })).filter(
    (row) => row.value
  );
}

function renderText(body: Payload, brief: CallBrief | null): string {
  const lines = visibleFields(body).map(
    ({ field, value }) => `${field.label.toUpperCase()}\n${value}`
  );
  const answers = lines.join("\n\n");
  if (!brief) return answers;

  const game = [
    "==== YOUR GAME PLAN (for you, not the prospect) ====",
    "",
    `THE READ\n${brief.read}`,
    `WHAT TO PITCH\n${brief.pitch}`,
    `TALKING POINTS\n${brief.talkingPoints.map((p) => `- ${p}`).join("\n")}`,
    `LIKELY OBJECTIONS\n${brief.objections
      .map((o) => `- ${o.objection}\n  > ${o.response}`)
      .join("\n")}`,
    `HOW TO OPEN\n${brief.opening}`,
    `THE CLOSE\n${brief.close}`,
    "",
    "==== THEIR ANSWERS ====",
    "",
  ].join("\n\n");
  return `${game}\n${answers}`;
}

function renderBriefHtml(brief: CallBrief | null): string {
  if (!brief) return "";

  const label = (t: string) =>
    `<div style="font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#40bbff;margin-top:18px">${escapeHtml(t)}</div>`;
  const para = (t: string) =>
    `<div style="margin-top:5px;font-size:14px;line-height:1.55;color:#e9edf0">${escapeHtml(t)}</div>`;

  const points = brief.talkingPoints
    .map(
      (p) =>
        `<li style="margin-top:6px;font-size:14px;line-height:1.5;color:#e9edf0">${escapeHtml(p)}</li>`
    )
    .join("");

  const objections = brief.objections
    .map(
      (o) => `
      <div style="margin-top:10px">
        <div style="font-size:14px;font-weight:600;color:#fff">${escapeHtml(o.objection)}</div>
        <div style="margin-top:2px;font-size:14px;line-height:1.5;color:#6eff3e">${escapeHtml(o.response)}</div>
      </div>`
    )
    .join("");

  return `
  <div style="margin-top:18px;background:#000;border-radius:12px;padding:26px 28px">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#6eff3e">Your game plan</div>
    <div style="font-size:12px;color:#9aa0a6;margin-top:3px">For you, not the prospect.</div>
    ${label("The read")}${para(brief.read)}
    ${label("What to pitch")}${para(brief.pitch)}
    ${label("Talking points")}<ul style="margin:6px 0 0;padding-left:18px">${points}</ul>
    ${label("Likely objections")}${objections}
    ${label("How to open")}${para(brief.opening)}
    ${label("The close")}${para(brief.close)}
  </div>`;
}

function renderHtml(body: Payload, brief: CallBrief | null): string {
  const block = ({ field, value }: { field: Field; value: string }) => `
    <div style="margin-top:18px">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#6b6b6b">${escapeHtml(field.label)}</div>
      <div style="margin-top:5px;font-size:14px;line-height:1.55;color:#000;white-space:pre-wrap">${escapeHtml(value)}</div>
    </div>`;

  const business = escapeHtml(asText(body.business_name) || "a prospect");
  const contact = escapeHtml(asText(body.contact_name) || "Someone");

  return `<!doctype html>
<html><body style="margin:0;background:#e5e8ea;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#000">
  <div style="max-width:600px;margin:32px auto;background:#fff;border:1px solid #e5e8ea;border-radius:12px;padding:32px">
    <div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#0074ff">Markit / Pre-Call Snapshot</div>
    <h1 style="margin:6px 0 0;font-size:22px;font-weight:700">${business}</h1>
    <div style="margin-top:2px;font-size:13px;color:#6b6b6b">Submitted by ${contact}</div>
    ${renderBriefHtml(brief)}
    <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#6b6b6b;margin-top:28px">Their answers</div>
    ${visibleFields(body).map(block).join("")}
    <div style="margin-top:28px;height:3px;background:linear-gradient(120deg,#6eff3e,#40bbff,#0074ff);border-radius:2px"></div>
  </div>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
