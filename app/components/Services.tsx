import ServiceCard from "./ServiceCard";

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
            <ServiceCard key={s.code} s={s} />
          ))}
        </div>

      </div>
    </section>
  );
}
