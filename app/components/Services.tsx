"use client";

import Link from "next/link";
import { useState } from "react";

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
    bg: "#000000",
    invert: true,
    hoverBg: "#0074ff",
    hoverInvert: true,
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
    bg: "#ffffff",
    invert: false,
    hoverBg: "#40bbff",
    hoverInvert: true,
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
    bg: "#000000",
    invert: true,
    hoverBg: "#6eff3e",
    hoverInvert: false,
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
    bg: "#ffffff",
    invert: false,
    hoverBg: "#0074ff",
    hoverInvert: true,
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
    bg: "#000000",
    invert: true,
    hoverBg: "#6eff3e",
    hoverInvert: false,
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
    bg: "#ffffff",
    invert: false,
    hoverBg: "#40bbff",
    hoverInvert: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 lg:mb-24">
          <div className="md:col-span-4">
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[var(--brand-blue)]" aria-hidden />
              Services / 01
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif uppercase text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              <span className="text-[var(--brand-blue)]">Ads and websites</span> are our specialty.{" "}
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
          {SERVICES.map((s) => {
            return <ServiceCard key={s.code} s={s} />;
          })}
        </div>
      </div>
    </section>
  );
}

type ServiceItem = (typeof SERVICES)[number];

function ServiceCard({ s }: { s: ServiceItem }) {
  const [hover, setHover] = useState(false);
  const bg = hover ? s.hoverBg : s.bg;
  const invertText = hover ? (s.hoverInvert ?? s.invert) : s.invert;
  const textColor = invertText ? "text-white" : "text-black";
  const fillColor = invertText ? "bg-white" : "bg-black";
  return (
    <article className="svc-card group bg-background relative overflow-hidden">
      <div
        className="aspect-[5/4] relative overflow-hidden transition-colors duration-300 ease-out"
        style={{ backgroundColor: bg }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span
            className={`font-mono text-[11px] transition-colors ${
              invertText ? "text-white/80" : "text-black/80"
            }`}
          >
            {s.code}
          </span>
          <span
            className={`font-mono text-[11px] transition-colors ${
              invertText ? "text-white/50" : "text-black/50"
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
            className={`w-24 h-24 lg:w-28 lg:h-28 transition-colors duration-300 ${fillColor}`}
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
            className={`font-serif uppercase text-4xl lg:text-5xl tracking-[-0.02em] transition-colors ${textColor}`}
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
          className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-[var(--brand-blue)]"
        >
          Explore service
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
