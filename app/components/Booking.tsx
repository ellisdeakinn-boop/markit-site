"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry?primary_color=000000";

export default function Booking() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="book"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28 lg:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12 lg:mb-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
              Book a call / 05
            </p>
            <h2 className="font-serif uppercase text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em] mt-3">
              Tell us what you&apos;re trying to build.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-base md:text-lg leading-relaxed text-background/80 max-w-xl">
              Pick a time that works. We&apos;ll come prepared with notes on
              your current marketing, where the gaps are, and what we&apos;d
              do in the first 30 days.
            </p>
            <p className="text-sm text-background/60 mt-4">
              Calls run with Ellis or Shema. No SDRs, no qualifying questions
              from a stranger.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-background">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "740px" }}
          />
        </div>
      </div>
    </section>
  );
}
