export default function Process() {
  return (
    <section id="process" className="bg-[var(--brand-blue)] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ background: "var(--brand-gradient)" }}
      />
      <div className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/70">Process / 03</p>
            <p className="font-serif uppercase text-3xl md:text-5xl mt-3 leading-tight tracking-[-0.02em]">
              How we work.
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/60 px-5 py-2.5 text-sm hover:bg-white hover:text-[var(--brand-blue)] transition-colors"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-8">
            <p className="font-serif uppercase text-2xl md:text-3xl leading-[1.25] tracking-[-0.015em] text-white">
              No 90-day onboarding decks. No subcontractor relay. We audit,
              we build, we iterate, and you see the work happen weekly.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/85 max-w-2xl">
              From the first audit to the 100th ad iteration, every lever is
              measured. We kill what doesn&apos;t convert, double what does,
              and ship every week. You get a marketing engine you own, not a
              deck of recommendations.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden">
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
                <div key={step.k} className="bg-[var(--brand-blue)] p-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-[var(--brand-lime)] text-[var(--brand-blue)] font-mono text-[12px] font-medium">
                    {step.k}
                  </span>
                  <p className="font-serif text-xl mt-4 tracking-[-0.015em] text-white">
                    {step.t}
                  </p>
                  <p className="text-sm text-white/80 mt-2 leading-relaxed">
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
