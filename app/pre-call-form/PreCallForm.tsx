"use client";

import { useState } from "react";
import { SECTIONS, ALL_FIELDS, type Field } from "./fields";

type Values = Record<string, string | string[]>;

const OTHER = "__other__";

// Where the prospect lands after submitting. Set to Ellis's YouTube.
const REDIRECT_URL = "https://www.youtube.com/@ellisdeakin";

function initialValues(): Values {
  const v: Values = {};
  for (const f of ALL_FIELDS) v[f.key] = f.type === "checkbox" ? [] : "";
  return v;
}

export default function PreCallForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [otherText, setOtherText] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [missing, setMissing] = useState<Set<string>>(new Set());

  function setText(key: string, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
  }

  function toggleCheckbox(key: string, option: string) {
    setValues((v) => {
      const cur = Array.isArray(v[key]) ? (v[key] as string[]) : [];
      const next = cur.includes(option)
        ? cur.filter((o) => o !== option)
        : [...cur, option];
      return { ...v, [key]: next };
    });
  }

  function buildPayload(): Values {
    const payload: Values = { ...values };
    // Fold any "other" free text into the checkbox arrays.
    for (const f of ALL_FIELDS) {
      if (f.type === "checkbox" && f.allowOther) {
        const extra = (otherText[f.key] ?? "").trim();
        const arr = Array.isArray(payload[f.key]) ? [...(payload[f.key] as string[])] : [];
        const cleaned = arr.filter((o) => o !== OTHER);
        if (extra) cleaned.push(extra);
        payload[f.key] = cleaned;
      }
    }
    return payload;
  }

  function findMissing(payload: Values): Set<string> {
    const m = new Set<string>();
    for (const f of ALL_FIELDS) {
      if (!f.required) continue;
      const val = payload[f.key];
      const empty = Array.isArray(val) ? val.length === 0 : !String(val).trim();
      if (empty) m.add(f.key);
    }
    return m;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = buildPayload();
    const m = findMissing(payload);
    setMissing(m);
    if (m.size > 0) {
      setStatus("error");
      setErrorMsg("Please fill in the required questions highlighted below.");
      const first = document.querySelector<HTMLElement>("[data-missing='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/pre-call-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Send them straight to Ellis's YouTube once the answers are in.
      window.location.href = REDIRECT_URL;
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-[760px] px-6 lg:px-10 py-28 text-center">
        <p className="eyebrow">Markit / Pre-Call Snapshot</p>
        <h1 className="font-serif uppercase text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] mt-4">
          Got it. Thank you.
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted max-w-xl mx-auto">
          Your answers are on their way to the team. Taking you through now. If
          nothing happens,{" "}
          <a href={REDIRECT_URL} className="text-[var(--brand-blue)] hover-underline">
            click here
          </a>
          .
        </p>
        <div className="mt-10 mx-auto h-[3px] w-40 rounded-full bg-[var(--hero-gradient)]" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[760px] px-6 lg:px-10 pb-32">
      <header className="pt-24 pb-12">
        <p className="eyebrow">Markit / Pre-Call Snapshot</p>
        <h1 className="font-serif uppercase text-4xl md:text-6xl leading-[1.03] tracking-[-0.02em] mt-4">
          Quick business snapshot
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted max-w-xl">
          Fill this out before our call so we come in fully prepped and spend our
          time on your actual growth levers, not background. Takes about 8 to 10
          minutes. Short, honest answers beat polished ones.
        </p>
      </header>

      {SECTIONS.map((section) => (
        <section key={section.no} className="border-t border-border-soft pt-10 mt-2 mb-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                {section.title} / {section.no}
              </p>
            </div>
            <div className="md:col-span-8 space-y-8">
              {section.fields.map((field) => (
                <FieldRow
                  key={field.key}
                  field={field}
                  values={values}
                  otherText={otherText}
                  missing={missing.has(field.key)}
                  onText={setText}
                  onToggle={toggleCheckbox}
                  onOther={(k, val) => setOtherText((o) => ({ ...o, [k]: val }))}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="border-t border-border-soft pt-10 mt-2">
        {status === "error" && (
          <p className="mb-5 text-sm font-mono text-red-600">{errorMsg}</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="cta-glow inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] text-white px-8 py-4 text-sm font-medium tracking-tight border border-[var(--brand-blue)] disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Submit snapshot"}
        </button>
        <p className="mt-4 text-xs text-muted font-mono">
          Your answers go straight to the Markit team. Nothing is shared.
        </p>
      </div>
    </form>
  );
}

function FieldRow({
  field,
  values,
  otherText,
  missing,
  onText,
  onToggle,
  onOther,
}: {
  field: Field;
  values: Values;
  otherText: Record<string, string>;
  missing: boolean;
  onText: (key: string, val: string) => void;
  onToggle: (key: string, option: string) => void;
  onOther: (key: string, val: string) => void;
}) {
  const labelEl = (
    <label className="block text-[15px] leading-snug font-medium text-foreground">
      {field.label}
      {field.required && <span className="text-[var(--brand-blue)]"> *</span>}
    </label>
  );

  const inputBase =
    "mt-3 w-full rounded-lg border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted/60 outline-none focus:border-[var(--brand-blue)] transition-colors";
  const borderClass = missing ? "border-red-400" : "border-border-soft";

  if (field.type === "checkbox") {
    const selected = Array.isArray(values[field.key]) ? (values[field.key] as string[]) : [];
    return (
      <div data-missing={missing}>
        {labelEl}
        <div className="mt-3 flex flex-wrap gap-2.5">
          {field.options?.map((opt) => {
            const on = selected.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onToggle(field.key, opt)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-foreground border-border-soft hover:border-foreground"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {field.allowOther && (
          <input
            type="text"
            placeholder="Other (optional)"
            value={otherText[field.key] ?? ""}
            onChange={(e) => onOther(field.key, e.target.value)}
            className={`${inputBase} ${borderClass} max-w-sm`}
          />
        )}
      </div>
    );
  }

  if (field.type === "long") {
    return (
      <div data-missing={missing}>
        {labelEl}
        <textarea
          rows={3}
          value={(values[field.key] as string) ?? ""}
          onChange={(e) => onText(field.key, e.target.value)}
          placeholder={field.placeholder}
          className={`${inputBase} ${borderClass} resize-y min-h-[88px]`}
        />
      </div>
    );
  }

  return (
    <div data-missing={missing}>
      {labelEl}
      <input
        type="text"
        value={(values[field.key] as string) ?? ""}
        onChange={(e) => onText(field.key, e.target.value)}
        placeholder={field.placeholder}
        className={`${inputBase} ${borderClass}`}
      />
    </div>
  );
}
