export default function Process() {
  return (
    <section id="process">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">Process / 03</p>
            <p className="font-serif uppercase text-3xl md:text-5xl mt-3 leading-tight tracking-[-0.02em]">
              How we work.
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-foreground px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-8">
            <p className="font-serif uppercase text-2xl md:text-3xl leading-[1.25] tracking-[-0.015em] text-foreground/90">
              No 90-day onboarding decks. No subcontractor relay. We audit,
              we build, we iterate, and you see the work happen weekly.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
              From the first audit to the 100th ad iteration, every lever is
              measured. We kill what doesn&apos;t convert, double what does,
              and ship every week. You get a marketing engine you own, not a
              deck of recommendations.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
              {[
                {
                  k: "01",
                  t: "Audit & Architect",
                  d: "Brand, funnel, and lead-flow diagnostic. We map the gap to the goal.",
                },
                {
                  k: "02",
                  t: "Build & Launch",
                  d: "Video, ads, content, and intake systems shipped in one sprint.",
                },
                {
                  k: "03",
                  t: "Iterate & Scale",
                  d: "Weekly creative, copy, and CRO. Compounding returns.",
                },
              ].map((step) => (
                <div key={step.k} className="bg-background p-6">
                  <span className="font-mono text-[11px] text-muted">
                    {step.k}
                  </span>
                  <p className="font-serif text-xl mt-3 tracking-[-0.015em]">
                    {step.t}
                  </p>
                  <p className="text-sm text-foreground/70 mt-2 leading-relaxed">
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
