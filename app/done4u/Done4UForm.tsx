"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";

// The question markup is injected once and then owned by the DOM, not React.
//
// This MUST be memoised. Without it, every status update re-rendered the parent,
// React rewrote the innerHTML, and every value the user had typed was wiped from
// the DOM. The debounced save then wrote that empty result straight over their
// saved answers. Memoising means the markup is written exactly once and the
// browser keeps the values, which is the whole point of the page.
const StaticQuestions = memo(function StaticQuestions({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
});

// Client behaviour for the Done4U intake form.
//
// The brief was "do not let him lose answers as he leaves the form", so
// persistence is deliberately layered:
//
//   1. Every keystroke debounce-saves to localStorage (~400ms).
//   2. blur, pagehide and visibilitychange flush IMMEDIATELY, no debounce.
//      pagehide/visibilitychange matter most: iOS Safari frequently kills a tab
//      without ever firing beforeunload, and Jake will be on a phone.
//   3. Answers restore on mount, so closing the tab and coming back is safe.
//
// localStorage is per-browser, so it is a safety net rather than a backup. The
// Send button is what actually gets the answers to Ellis.

const STORAGE_KEY = "markit-done4u-intake-v1";
const SAVE_DEBOUNCE_MS = 400;

type Answers = Record<string, string | boolean>;

function readStored(): Answers {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Answers) : {};
  } catch {
    return {};
  }
}

export default function Done4UForm({ html }: { html: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [status, setStatus] = useState("Your answers save automatically");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [total, setTotal] = useState(0);

  const fields = useCallback(
    () =>
      Array.from(
        rootRef.current?.querySelectorAll<
          HTMLInputElement | HTMLTextAreaElement
        >("[data-field]") ?? []
      ),
    []
  );

  const collect = useCallback((): Answers => {
    const out: Answers = {};
    for (const el of fields()) {
      if (!el.name) continue;
      if (el instanceof HTMLInputElement && el.type === "checkbox") {
        if (el.checked) out[el.name] = true;
      } else if (el.value.trim()) {
        out[el.name] = el.value;
      }
    }
    return out;
  }, [fields]);

  const countAnswered = useCallback(() => {
    const all = fields();
    const done = all.filter((el) =>
      el instanceof HTMLInputElement && el.type === "checkbox"
        ? el.checked
        : el.value.trim().length > 0
    ).length;
    setAnswered(done);
    setTotal(all.length);
  }, [fields]);

  const save = useCallback(() => {
    try {
      const next = collect();
      // Belt and braces: never let an empty collect overwrite real answers.
      // If the DOM is ever empty while storage holds work (a remount, a race,
      // a future refactor), keep what is on disk. Losing answers is the one
      // failure this page must not have.
      if (Object.keys(next).length === 0 && Object.keys(readStored()).length > 0) {
        setStatus("Your saved answers are safe");
        return;
      }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      const t = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setStatus(`Saved ${t}`);
    } catch {
      // Private mode, or storage full. Say so rather than pretending it saved.
      setStatus("Could not save to this browser. Use Send or Download.");
    }
    countAnswered();
  }, [collect, countAnswered]);

  const queueSave = useCallback(() => {
    setStatus("Saving...");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(save, SAVE_DEBOUNCE_MS);
  }, [save]);

  const flush = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    save();
  }, [save]);

  // Restore, then wire listeners.
  useEffect(() => {
    const stored = readStored();
    for (const el of fields()) {
      const v = stored[el.name];
      if (v === undefined) continue;
      if (el instanceof HTMLInputElement && el.type === "checkbox") {
        el.checked = Boolean(v);
      } else {
        el.value = String(v);
      }
    }
    if (Object.keys(stored).length > 0) setStatus("Your saved answers are back");
    countAnswered();

    const onInput = () => queueSave();
    const onBlur = () => flush();
    const onHide = () => flush();
    const onVis = () => {
      if (document.visibilityState === "hidden") flush();
    };

    const root = rootRef.current;
    root?.addEventListener("input", onInput);
    root?.addEventListener("change", onInput);
    root?.addEventListener("blur", onBlur, true);
    window.addEventListener("pagehide", onHide);
    window.addEventListener("beforeunload", onHide);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      root?.removeEventListener("input", onInput);
      root?.removeEventListener("change", onInput);
      root?.removeEventListener("blur", onBlur, true);
      window.removeEventListener("pagehide", onHide);
      window.removeEventListener("beforeunload", onHide);
      document.removeEventListener("visibilitychange", onVis);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [fields, queueSave, flush, countAnswered]);

  // Labels come from aria-label, set when the static markup was generated, so
  // Ellis receives readable questions instead of slugs.
  const labelled = useCallback(() => {
    const rows: { question: string; answer: string }[] = [];
    for (const el of fields()) {
      const q = el.getAttribute("aria-label") ?? el.name;
      if (el instanceof HTMLInputElement && el.type === "checkbox") {
        if (el.checked) rows.push({ question: q, answer: "Confirmed" });
      } else if (el.value.trim()) {
        rows.push({ question: q, answer: el.value.trim() });
      }
    }
    return rows;
  }, [fields]);

  async function send() {
    flush();
    const rows = labelled();
    if (rows.length === 0) {
      setStatus("Nothing to send yet. Fill something in first.");
      return;
    }
    setSending(true);
    setStatus("Sending to Markit...");
    try {
      const res = await fetch("/api/done4u", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: rows, answered: rows.length, total }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
      setStatus("Sent to Markit. Your answers are still saved here.");
    } catch {
      // Never imply it sent when it did not, and never clear the local copy.
      setStatus("Could not send. Your answers are still saved. Try Download.");
    } finally {
      setSending(false);
    }
  }

  function download() {
    flush();
    const text = labelled()
      .map((r) => `${r.question}\n${r.answer}\n`)
      .join("\n");
    const blob = new Blob([`Done4U webinar intake\n\n${text}`], {
      type: "text/plain",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "done4u-intake.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <>
      <div ref={rootRef}>
        <StaticQuestions html={html} />
      </div>

      <div className="d4u-actions">
        <div className="wrap">
          <p className="d4u-status" aria-live="polite">
            {status}
            {total > 0 && (
              <span className="d4u-count">
                {answered} of {total} answered
              </span>
            )}
          </p>
          <div className="d4u-btns">
            <button type="button" onClick={send} disabled={sending}>
              {sent ? "Send again" : sending ? "Sending..." : "Send to Markit"}
            </button>
            <button type="button" className="ghost" onClick={download}>
              Download a copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
