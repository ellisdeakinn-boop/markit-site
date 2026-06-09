// Booking confirmation page.
//
// This route is intentionally unlinked from anywhere on the site. It is
// reached only by Calendly's redirect after a successful booking, and is
// marked noindex so search engines don't surface it. Also excluded from
// sitemap.xml.
//
// Page structure follows the Neo / Jeremy Haynes confirmation playbook:
// modern due diligence framing, breakout Q&A modules to compress sales
// cycle, transparent worst-case statements, real numbers as trust assets.
// FAQs are written for the Markit ICP: local service businesses doing
// $500K+/yr in revenue, often burned by a previous agency.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're booked / Markit",
  description: "Booking confirmed. We'll see you on the call.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  alternates: { canonical: null },
};

function formatStartTime(iso?: string): { date: string; time: string } | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const date = d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
  return { date, time };
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "Why does this cost what it costs?",
    a: "Our engagements are full-stack. Strategy, creative production, media buying, copy, funnel build, and the system that catches the leads on the other end. Built and run by the same team. The number reflects an in-house operation, not a contractor stack with markups. If you only need a slice, we can scope it down. The call is the right place for that conversation.",
  },
  {
    q: "How long until I see real results?",
    a: "Most local service clients see lead volume move inside the first 30 days, with sustained lift between days 30 and 90 as we kill what does not convert and double down on what does. Pocket Dispo hit 21 million views in 30 days from a single campaign. Arthur went from zero to $25K monthly recurring in 9 days. These are real numbers, not the median. We will talk about realistic expectations for your specific business on the call.",
  },
  {
    q: "Do you offer a guarantee?",
    a: "We do not promise specific lead numbers or revenue figures in writing because we cannot control your offer, your team, or your follow-up speed. What we do guarantee is the work itself. If a deliverable is wrong, we redo it. If the campaign architecture is broken, we rebuild it at our cost. The work shows up every week or we are not earning the fee.",
  },
  {
    q: "I have been burned by an agency before. How are you actually different?",
    a: "Two reasons. One, you talk to founders for the entire engagement, not an account manager who escalates to a creative team you never meet. Two, we do not outsource. Every creative, every ad, every line of copy is built in-house by the same people running your strategy. When something is wrong, there is no hand-off to blame. If you want to verify, search us. Reddit, Google, anywhere. We will help you do that homework on the call.",
  },
  {
    q: "What do I actually have to do each week?",
    a: "Two things. Approve creative inside 24 hours when we send it. Show up to a 30 minute weekly check-in. Beyond that, the goal is to remove work from your plate, not add to it. We will need account access during onboarding, and we will need decisions when there is a real decision to make. Everything else is on us.",
  },
  {
    q: "What kind of contract am I signing?",
    a: "Month to month after a 90 day initial commitment. The 90 day floor exists because anything shorter is not honest. A real marketing engine takes a full cycle to show what it can do. After day 90, you can leave on 30 days notice with no fees. We are not interested in trapping you with paper.",
  },
  {
    q: "Will this work for my specific business?",
    a: "We work with local service businesses doing $500K or more in annual revenue, with capacity to handle 30 to 100 percent more lead volume than they get today. Law firms, home services, healthcare practices, professional services, and similar. If you are pre-revenue, very early stage, or in a category we have not run before, we will tell you on the call. We turn down more clients than we take on.",
  },
  {
    q: "What if I do not have an ad account, website, or any of this set up?",
    a: "Fine. Half our local clients arrive without one or more of those. We set them up as part of onboarding. The website becomes a Markit website if you want it to. The ad account becomes a Markit-managed account on your name. Everything we build, you own. Nothing is rented from us.",
  },
  {
    q: "Who am I actually working with day to day?",
    a: "Ellis Deakin runs strategy, ops, and the back-end systems. Shema Kamau runs video and paid creative. Both of us are on every account during the first 30 days. After that, you have a primary point of contact and the other of us in every weekly meeting. There is no third tier you get downgraded to.",
  },
  {
    q: "What does a client who does not do well with you look like?",
    a: "Three patterns. Owners who will not approve creative inside 5 business days. Businesses that cannot follow up on a lead inside 30 minutes. Categories where the founder will not appear on camera at all, ever. If you recognise yourself in those, the engagement will struggle. Better to know before we start than after.",
  },
];

const TRUST_STATS = [
  { n: "21M+", l: "views in 30 days · Pocket Dispo" },
  { n: "1.5M+", l: "organic views, 15 creatives · Curmel Moton" },
  { n: "$100K+", l: "ticket sales driven · Abraham Gray" },
  { n: "0 → $25K", l: "MRR in 9 days · Arthur" },
];

const TRANSPARENT_STATEMENTS = [
  {
    t: "We do not promise specific lead numbers",
    d: "Any agency that does is either making it up or has not seen enough markets. We promise the work, the system, and the cadence. The numbers are downstream of that.",
  },
  {
    t: "We are not the cheapest option",
    d: "We are also not the most expensive. We sit where a senior operator who actually does the work sits. If you are price-shopping, there are cheaper places to land. We will not be offended.",
  },
  {
    t: "We say no to most prospects",
    d: "If you are not a fit, we will tell you on the call and point you somewhere better. We would rather end the call early than take a check we cannot earn.",
  },
];

export default async function BookingConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const firstName =
    (typeof sp.invitee_full_name === "string"
      ? sp.invitee_full_name.split(" ")[0]
      : "") || "";
  const eventStart =
    typeof sp.event_start_time === "string" ? sp.event_start_time : "";
  const eventType =
    typeof sp.event_type_name === "string" ? sp.event_type_name : "";
  const formatted = formatStartTime(eventStart);

  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-[1100px] px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="flex items-center justify-between mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
            Booking confirmed
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50 hidden sm:inline">
            Markit® / Arizona
          </span>
        </div>

        <h1 className="fade-up font-serif uppercase text-[42px] leading-[1.02] tracking-[-0.02em] sm:text-[64px] md:text-[88px] lg:text-[104px]">
          {firstName ? `You're in, ${firstName}.` : "You're in."}
        </h1>

        {formatted && (
          <p className="mt-10 text-lg md:text-2xl text-background/85 leading-relaxed max-w-2xl">
            We&apos;ll meet on{" "}
            <span className="text-background font-medium">
              {formatted.date}
            </span>{" "}
            at{" "}
            <span className="text-background font-medium">
              {formatted.time}
            </span>
            {eventType && (
              <>
                {" "}
                for the{" "}
                <span className="text-background font-medium">{eventType}</span>
                .
              </>
            )}
          </p>
        )}

        {/* === 1. Immediate prep === */}

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 border border-background/10 rounded-2xl overflow-hidden">
          {[
            {
              k: "01",
              t: "Calendar invite",
              d: "A calendar invite with the meeting link is heading to your inbox now. Check spam if it doesn't show up in five minutes.",
            },
            {
              k: "02",
              t: "What we'll cover",
              d: "We'll review your current marketing, the gaps we see, and what we'd do in your first 30 days. No deck. No pitch.",
            },
            {
              k: "03",
              t: "Show up ready",
              d: "Bring access to your ad account, website analytics, and any current creative if you have them. The more we can see, the better the call.",
            },
          ].map((step) => (
            <div
              key={step.k}
              className="bg-foreground p-6 lg:p-7 border-r border-background/10 last:border-r-0"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
                {step.k}
              </span>
              <p className="font-serif uppercase text-xl md:text-2xl mt-3 tracking-[-0.015em]">
                {step.t}
              </p>
              <p className="text-sm text-background/70 mt-3 leading-relaxed">
                {step.d}
              </p>
            </div>
          ))}
        </div>

        {/* === 2. Due diligence framing === */}

        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
              Before we talk / 04
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              You&apos;re going to research us anyway.{" "}
              <span className="text-background/55">
                We&apos;d rather you do it with the right answers.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-background/80 leading-relaxed max-w-2xl">
              Between now and the call, you&apos;ll probably Google us,
              search Reddit, look for case studies, and try to figure out
              whether this is real. Good. The questions below are the ones
              real local service business owners actually ask before they
              hire us. The answers are honest, including the parts we
              don&apos;t normally lead with.
            </p>
          </div>
        </div>

        {/* === 3. FAQ accordion === */}

        <div className="mt-12 lg:mt-16 border-t border-background/15">
          {FAQS.map((faq, i) => (
            <details
              key={faq.q}
              className="group border-b border-background/15 py-6"
            >
              <summary className="flex items-baseline gap-4 cursor-pointer list-none">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-serif uppercase text-lg md:text-2xl tracking-[-0.015em] text-background">
                  {faq.q}
                </span>
                <span
                  className="font-mono text-base text-background/60 shrink-0 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-5 ml-10 max-w-[820px] text-base md:text-lg text-background/80 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* === 4. Real receipts === */}

        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
              Real receipts / 05
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              The numbers behind the partner wall.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10 border border-background/10 rounded-2xl overflow-hidden">
          {TRUST_STATS.map((s) => (
            <div key={s.l} className="bg-foreground p-6 lg:p-7">
              <p className="font-serif text-2xl md:text-4xl tracking-[-0.02em] tabular-nums">
                {s.n}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-background/55 mt-3 leading-snug">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        {/* === 5. What we won't promise === */}

        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
              What we won&apos;t promise / 06
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              Three things you should hear up front.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 border border-background/10 rounded-2xl overflow-hidden">
          {TRANSPARENT_STATEMENTS.map((s, i) => (
            <div key={s.t} className="bg-foreground p-6 lg:p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif uppercase text-xl md:text-2xl mt-3 tracking-[-0.015em]">
                {s.t}
              </p>
              <p className="text-sm text-background/70 mt-3 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        {/* === 6. Reschedule / nav out === */}

        <div className="mt-24 lg:mt-32 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-background/15">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-background/50">
              Need to reschedule?
            </p>
            <p className="text-sm text-background/80 mt-1">
              Use the link in your calendar invite or reply to the email.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-background/85 hover-underline"
          >
            <span aria-hidden>←</span>
            Back to Markit
          </Link>
        </div>
      </div>
    </section>
  );
}
