import Link from "next/link";

const SERVICES = [
  {
    slug: "paid-ads",
    icon: "/services/paid-ads.png",
    code: "A¹",
    name: "Paid Ads",
    tag: "SPECIALTY",
    blurb:
      "Campaign management and creative production under one roof. Meta is home turf. Google when the channel fits. One team, one brief, no hand-offs between strategy and shoot.",
    bullets: [
      "Meta (Facebook + Instagram)",
      "Google when it fits",
      "Creative + media in one team",
    ],
    tone: "from-[#0f0f10] to-[#0a0a0a]",
    invert: true,
  },
  {
    slug: "website-builds",
    icon: "/services/website-builds.png",
    code: "B¹",
    name: "Website Builds",
    tag: "SPECIALTY",
    blurb:
      "Custom code in Next.js and React. No themes, no page builders, no templates. Fast, ranked, and engineered to convert from day one.",
    bullets: [
      "Custom Next.js / React",
      "Conversion-built funnels & VSLs",
      "SEO and performance baked in",
    ],
    tone: "from-[#0f0f10] to-[#0a0a0a]",
    invert: true,
  },
  {
    slug: "video-production",
    icon: "/services/video-production.png",
    code: "C¹",
    name: "Video Production",
    tag: "LEAD",
    blurb:
      "Our gear, your venue. On-location, in-studio, UGC casting, or post-only from your footage. The goal is revenue through views, not views for views' sake.",
    bullets: [
      "Ad creative & UGC",
      "On-location & in-studio shoots",
      "In-house edit team",
    ],
    tone: "from-[#f3f3f3] to-[#e5e5e5]",
  },
  {
    slug: "lead-generation",
    icon: "/services/lead-generation.png",
    code: "D¹",
    name: "Lead Generation",
    tag: "SYSTEM",
    blurb:
      "Whatever CRM you run, we wire it up. No CRM, we deploy GoHighLevel. Intake, automated follow-up, reputation, and missed-call recovery all included.",
    bullets: [
      "GHL or your stack",
      "Reputation & reviews",
      "Missed-call follow-up & AI receptionist",
    ],
    tone: "from-[#f3f3f3] to-[#e5e5e5]",
  },
  {
    slug: "copywriting",
    icon: "/services/copywriting.png",
    code: "E¹",
    name: "Copywriting",
    tag: "WORDS",
    blurb:
      "Direct-response copy with taste. Landing pages, ad scripts, emails, and SMS sequences engineered to move booked calls and walk-ins.",
    bullets: ["Landing pages", "Email & SMS", "Ad scripts"],
    tone: "from-[#f3f3f3] to-[#e5e5e5]",
  },
  {
    slug: "social-media",
    icon: "/services/social-media.png",
    code: "F¹",
    name: "Social Media",
    tag: "BY REQUEST",
    blurb:
      "Strategy, capture, edit, post, repeat. Always-on content that compounds attention. Offered for clients who genuinely need it.",
    bullets: ["Organic content", "Short-form", "Community ops"],
    tone: "from-[#f3f3f3] to-[#e5e5e5]",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 lg:mb-24">
          <div className="md:col-span-4">
            <p className="eyebrow">Services / 01</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif uppercase text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Ads and websites are our specialty.{" "}
              <span className="text-muted">
                Video is the engine that powers them.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-xl text-foreground/80">
              Five disciplines, one team, all in-house. We can run the whole
              engine or plug into one piece. You don&apos;t pay for layers of
              account managers you never meet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {SERVICES.map((s) => (
            <article
              key={s.code}
              className="svc-card group bg-background relative overflow-hidden"
            >
              <div
                className={`aspect-[5/4] bg-gradient-to-br ${s.tone} relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 ${
                    s.invert
                      ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]"
                      : "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.6),transparent_60%)]"
                  }`}
                />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span
                    className={`font-mono text-[11px] ${
                      s.invert ? "text-background/70" : "text-foreground/70"
                    }`}
                  >
                    {s.code}
                  </span>
                  <span
                    className={`font-mono text-[11px] ${
                      s.invert ? "text-background/40" : "text-foreground/40"
                    }`}
                  >
                    / {s.tag}
                  </span>
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  <div
                    className={`w-24 h-24 lg:w-28 lg:h-28 ${
                      s.invert ? "bg-background/90" : "bg-foreground/85"
                    }`}
                    style={{
                      WebkitMaskImage: `url('${s.icon}')`,
                      maskImage: `url('${s.icon}')`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                  <p
                    className={`font-serif uppercase text-4xl lg:text-5xl tracking-[-0.02em] ${
                      s.invert ? "text-background/95" : "text-foreground/90"
                    }`}
                  >
                    {s.name}
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <p className="text-foreground/85 leading-relaxed">{s.blurb}</p>
                <ul className="mt-5 grid gap-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-2 text-sm text-muted"
                    >
                      <span className="font-mono text-[10px]">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm hover-underline"
                >
                  Explore service
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
