const ITEMS = [
  "Paid Ads",
  "Website Builds",
  "Video Production",
  "Lead Generation",
  "Copywriting",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="py-8 overflow-hidden">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 pr-12 whitespace-nowrap"
          >
            <span className="font-serif uppercase text-3xl md:text-5xl text-foreground/85 tracking-[-0.02em]">
              {item}
            </span>
            <span className="font-mono text-xs text-muted">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
