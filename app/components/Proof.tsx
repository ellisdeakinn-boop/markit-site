import Link from "next/link";
import CountUp from "./CountUp";

type Stat = {
  l: string;
  c: string;
  count: {
    to: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  };
};

const STATS: Stat[] = [
  {
    l: "views in 30 days",
    c: "Pocket Dispo · single drop",
    count: { to: 21, suffix: "M+" },
  },
  {
    l: "organic views, 15 creatives",
    c: "Curmel Moton · Moton Classics",
    count: { to: 1.5, suffix: "M+", decimals: 1 },
  },
  {
    l: "monthly recurring, 9 days",
    c: "Arthur · info business",
    count: { to: 25, prefix: "0 → $", suffix: "K" },
  },
  {
    l: "monthly revenue, 12 days",
    c: "Abigail · info business",
    count: { to: 45, prefix: "$400 → $", suffix: "K" },
  },
];

type Partner = {
  name: string;
  slug?: string;
  logo?: string;
  colorRender?: boolean;
};
const PARTNERS: Partner[] = [
  { name: "AZ Compass", slug: "az-compass", logo: "/logos/az-compass.png" },
  { name: "Pocket Dispo", slug: "pocket-dispo", logo: "/logos/pocket-dispo.png" },
  { name: "Curmel Moton", slug: "curmel-moton", logo: "/logos/moton-classics.png" },
  { name: "Restore Hair", slug: "restore-hair", logo: "/logos/restore-hair.png" },
  {
    name: "Abraham Gray",
    slug: "abraham-gray",
    logo: "/logos/abraham-gray.png",
    colorRender: true,
  },
  { name: "Wish ATL", slug: "wish-atl", logo: "/logos/wish-atl.png" },
  { name: "Jordan", slug: "wish-atl", logo: "/logos/jordan.png" },
  { name: "Adidas", slug: "wish-atl", logo: "/logos/adidas.svg" },
  { name: "Nike", slug: "wish-atl", logo: "/logos/nike.svg" },
  { name: "Puma", slug: "wish-atl", logo: "/logos/puma.svg" },
  { name: "Clarks", logo: "/logos/clarks.svg" },
  { name: "GAP", logo: "/logos/gap.svg" },
  { name: "Venum", logo: "/logos/venum.png" },
  { name: "Saint Potential", logo: "/logos/saint-potential.png" },
  { name: "OnCloud", logo: "/logos/oncloud.svg" },
  { name: "OTX", logo: "/logos/otx.png" },
  {
    name: "Bury the Hatchet",
    slug: "bury-the-hatchet",
    logo: "/logos/bury-the-hatchet.png",
    colorRender: true,
  },
  {
    name: "Team Octopus",
    slug: "team-octopus",
    logo: "/logos/team-octopus.png",
    colorRender: true,
  },
  { name: "Putt Nation", slug: "putt-nation", logo: "/logos/putt-nation.png" },
  {
    name: "Deal Maker Weekend",
    slug: "deal-maker-weekend",
    logo: "/logos/deal-maker-weekend.png",
  },
  {
    name: "ATL Elite Real Estate Solutions",
    slug: "atl-elite-real-estate",
    logo: "/logos/atl-elite-real-estate.png",
  },
  {
    name: "YouVersion (via Reverb)",
    slug: "youversion",
    logo: "/logos/youversion.svg",
  },
  { name: "The Send", slug: "youversion", logo: "/logos/the-send.svg" },
];

type Case = {
  brand: string;
  slug?: string;
  result: string;
  discipline: string;
  status?: "CURRENT";
};

const CASES: Case[] = [
  {
    brand: "AZ Compass",
    slug: "az-compass",
    result:
      "250K+ views across YouTube and Instagram driving program interest and student applications.",
    discipline: "Video / Social",
    status: "CURRENT",
  },
  {
    brand: "Pocket Dispo",
    slug: "pocket-dispo",
    result:
      "Single brand-deal commercial shot and produced, 21M views in 30 days. Follow-up release crossed 10M.",
    discipline: "Video / Paid Ads",
  },
  {
    brand: "Curmel Moton · Moton Classics",
    slug: "curmel-moton",
    result:
      "Four shoots in Vegas with the boxer, 15 creatives delivered, 1.5M+ total organic views.",
    discipline: "Video / Social",
  },
  {
    brand: "Restore Hair",
    slug: "restore-hair",
    result:
      "Paid ads and organic content combined to garner millions of views.",
    discipline: "Paid Ads / Video",
  },
  {
    brand: "Abraham Gray",
    slug: "abraham-gray",
    result:
      "Creative production and funnel build, driving ticket sales through his YouTube audience.",
    discipline: "Funnels / Video",
  },
  {
    brand: "Wish ATL · Jordan · Adidas · Nike · Puma",
    slug: "wish-atl",
    result:
      "Direct engagements through Wish ATL: content production, social, and full campaign video.",
    discipline: "Video / Campaigns",
  },
  {
    brand: "Bury the Hatchet · Team Octopus · Putt Nation · Deal Maker Weekend",
    result:
      "Repurposed creative as both paid ads and organic content, lifting lead flow and walk-ins.",
    discipline: "Ads / Lead Gen",
  },
  {
    brand: "YouVersion (via Reverb) & The Send",
    slug: "youversion",
    result:
      "Creator on multi-campaign content for The Send, YouVersion, and Reverb.",
    discipline: "Video / Campaigns",
  },
];

export default function Proof() {
  return (
    <section id="work">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 lg:mb-20">
          <div className="md:col-span-4">
            <p className="eyebrow">Work / 02</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif uppercase text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Receipts.{" "}
              <span className="text-muted">
                Not promises, not projections, not vibes.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-xl text-foreground/80">
              A sample of work shipped between Markit&apos;s two founders.
              Currently in production with AZ Compass. Full case studies on
              request.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {STATS.map((s) => (
            <div key={s.c} className="bg-background p-6 lg:p-8">
              <CountUp
                to={s.count.to}
                prefix={s.count.prefix}
                suffix={s.count.suffix}
                decimals={s.count.decimals}
                className="font-serif text-3xl md:text-5xl tracking-[-0.025em] tabular-nums block"
              />
              <p className="text-xs text-muted mt-3 leading-snug">{s.l}</p>
              <p className="font-mono text-[10px] text-foreground/60 mt-4 uppercase tracking-[0.08em]">
                {s.c}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="eyebrow mb-8">Selected partners</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {PARTNERS.map((p) => {
              let inner: React.ReactNode;
              if (p.logo && p.colorRender) {
                inner = (
                  <div className="relative w-full h-20 md:h-24 lg:h-28 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-full max-w-[95%] object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                );
              } else if (p.logo) {
                inner = (
                  <div
                    role="img"
                    aria-label={p.name}
                    className="w-full h-20 md:h-24 lg:h-28 bg-foreground opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      WebkitMaskImage: `url('${p.logo}')`,
                      maskImage: `url('${p.logo}')`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                );
              } else {
                inner = (
                  <span className="font-serif text-xl md:text-2xl text-foreground/55 tracking-[-0.015em]">
                    {p.name}
                  </span>
                );
              }

              const baseClass =
                "group flex flex-col items-center justify-center text-center min-h-[140px] md:min-h-[180px]";

              return p.slug ? (
                <Link
                  key={p.name}
                  href={`/work/${p.slug}`}
                  className={baseClass}
                  title={p.name}
                >
                  {inner}
                  <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.name} →
                  </span>
                </Link>
              ) : (
                <div key={p.name} className={baseClass} title={p.name}>
                  {inner}
                  <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.name}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            Jordan · Adidas · Nike · Puma campaigns produced via Wish ATL. Clarks, GAP, Venum, Saint Potential, OnCloud, and OTX delivered as separate engagements.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 border-t border-[var(--border)]">
          {CASES.map((c) => {
            const Inner = (
              <>
                <div className="md:col-span-4 flex items-baseline gap-3 flex-wrap">
                  <p className="font-serif text-xl md:text-2xl tracking-[-0.015em] group-hover:underline underline-offset-4 decoration-[var(--border)] group-hover:decoration-foreground transition-colors">
                    {c.brand}
                  </p>
                </div>
                <p className="md:col-span-6 text-base md:text-lg text-foreground/80">
                  {c.result}
                </p>
                <p className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted md:text-right flex md:justify-end items-center gap-2">
                  {c.discipline}
                  {c.slug && (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  )}
                </p>
              </>
            );

            return c.slug ? (
              <Link
                key={c.brand}
                href={`/work/${c.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-[var(--border)] items-baseline hover:bg-foreground/[0.02] transition-colors"
              >
                {Inner}
              </Link>
            ) : (
              <div
                key={c.brand}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-[var(--border)] items-baseline"
              >
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
