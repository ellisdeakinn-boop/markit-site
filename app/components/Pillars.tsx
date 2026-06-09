const PILLARS = [
  {
    num: "0.1",
    label: "Mission",
    body: "Make local service businesses impossible to ignore in their market.",
  },
  {
    num: "0.2",
    label: "Vision",
    body: "Run the most operator-led marketing studio in the country.",
  },
  {
    num: "0.3",
    label: "Standard",
    body: "Every campaign tied to a number that shows up in the bank.",
  },
];

const META = [
  { k: "Built For", v: "Local service businesses ($500K+/yr)" },
  { k: "Lead Disciplines", v: "Video & Paid Ads" },
  { k: "Studio", v: "Arizona, PST" },
];

const GLOSSARY = [
  { sup: "1", code: "FBO", expand: "Full Brand Operating-system" },
  { sup: "2", code: "IHT", expand: "In-House Team, no contractors" },
  { sup: "3", code: "VLA", expand: "Video-Led Acquisition" },
];

export default function Pillars() {
  return (
    <section>
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="bg-background p-8 lg:p-10 flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{p.num}</span>
                <span className="eyebrow">{p.label}</span>
              </div>
              <p className="font-serif text-2xl md:text-3xl leading-tight tracking-[-0.015em] mt-12">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {META.map((m) => (
            <div key={m.k}>
              <p className="eyebrow mb-2">{m.k}</p>
              <p className="text-base md:text-lg">{m.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow">
              <span className="text-foreground/40">0.4</span> How we talk
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GLOSSARY.map((g) => (
              <div
                key={g.code}
                className="border-t border-[var(--border)] pt-4"
              >
                <p className="font-serif text-2xl">
                  {g.code}
                  <sup className="font-mono text-[10px] text-muted ml-0.5">
                    {g.sup}
                  </sup>
                </p>
                <p className="text-sm text-muted mt-1">{g.expand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
