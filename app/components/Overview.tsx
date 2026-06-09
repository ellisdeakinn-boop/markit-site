export default function Overview() {
  return (
    <section>
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="text-foreground/40">Overview</span> / Who we are
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif uppercase text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Views are easy. Revenue is hard.{" "}
              <span className="text-muted">
                We&apos;re built to drive the second through the first.
              </span>
            </p>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl">
              A full-service marketing studio run by operators who&apos;ve
              done the work themselves. No outsourcing, no white-labels,
              every team member trained and managed in-house. Ads and
              websites are the specialty, video is the engine that fuels
              them.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full border border-foreground px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                See the work
                <span aria-hidden>→</span>
              </a>
              <span className="font-mono text-[11px] text-muted">
                ↳ /selected-clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
