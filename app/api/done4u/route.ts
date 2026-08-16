// Receives the Done4U webinar intake and emails it to Ellis.
//
// Deliberately self-contained: it does not import app/lib/notify.ts, because
// that file is not committed and so does not exist in production. The owner
// inbox is hard-wired here for the same reason the pre-call route hard-wires
// it, a misconfigured env var must never be able to silently swallow a client's
// answers.
//
// Optional env:
//   RESEND_API_KEY      - if unset, the route still returns ok and logs the
//                         submission, so Jake never sees a failure caused by
//                         our config. Ellis can recover it from the logs.
//   DONE4U_NOTIFY_EMAIL - extra recipients, comma separated.
//   DONE4U_NOTIFY_FROM  - sender. Defaults to a no-DNS Resend sender.

import { Resend } from "resend";

export const runtime = "nodejs";

const OWNER_EMAIL = "ellisdeakinn@gmail.com";

type Row = { question?: string; answer?: string };

function recipients(): string[] {
  const extra = (process.env.DONE4U_NOTIFY_EMAIL ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const seen = new Set<string>();
  return [OWNER_EMAIL, ...extra].filter((e) => {
    const k = e.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: { answers?: Row[]; answered?: number; total?: number };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const rows = (body.answers ?? []).filter(
    (r) => r && typeof r.answer === "string" && r.answer.trim()
  );
  if (rows.length === 0) {
    return Response.json({ ok: false, error: "No answers." }, { status: 422 });
  }

  const answered = body.answered ?? rows.length;
  const total = body.total ?? rows.length;
  const subject = `Done4U intake: ${answered} of ${total} answered`;

  const html = [
    `<h2>Done4U webinar intake</h2>`,
    `<p>${answered} of ${total} fields answered.</p>`,
    ...rows.map(
      (r) =>
        `<p><b>${escapeHtml(r.question ?? "")}</b><br>${escapeHtml(
          r.answer ?? ""
        ).replace(/\n/g, "<br>")}</p>`
    ),
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // No key configured. Do not fail the client: log it so the answers are
    // recoverable from the function logs, and tell the caller it landed.
    console.log("[done4u] no RESEND_API_KEY. Submission:", JSON.stringify(rows));
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(key);
    await resend.emails.send({
      from: process.env.DONE4U_NOTIFY_FROM ?? "Markit Intake <onboarding@resend.dev>",
      to: recipients(),
      subject,
      html,
    });
  } catch (err) {
    console.error("[done4u] send failed:", err);
    console.log("[done4u] submission:", JSON.stringify(rows));
    // The answers are safe in the log and in the client's localStorage, so
    // report the failure honestly rather than pretending it sent.
    return Response.json({ ok: false, error: "Send failed." }, { status: 502 });
  }

  return Response.json({ ok: true, delivered: true });
}
