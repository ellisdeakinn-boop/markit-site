"use client";

import Link from "next/link";
import { useRef } from "react";

type Service = {
  slug: string;
  icon: string;
  code: string;
  name: string;
  tag: string;
  blurb: string;
  bullets: string[];
  tone: string;
  invert?: boolean;
};

export default function ServiceCard({ s }: { s: Service }) {
  const cardRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = e.clientX - rect.left - cx;
    const dy = e.clientY - rect.top - cy;
    const nx = dx / cx;
    const ny = dy / cy;

    const rx = -ny * 5;
    const ry = nx * 7;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;

      if (iconRef.current) {
        iconRef.current.style.transform = `translate(${nx * -10}px, ${ny * -10}px)`;
      }

      if (spotlightRef.current) {
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        spotlightRef.current.style.background = `radial-gradient(280px circle at ${mx}px ${my}px, rgba(255,255,255,0.06), transparent 70%)`;
        spotlightRef.current.style.opacity = "1";
      }
    });
  }

  function onLeave() {
    const card = cardRef.current;
    if (!card) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      card.style.transform = "";
      if (iconRef.current) iconRef.current.style.transform = "";
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    });
  }

  return (
    <article
      ref={cardRef}
      className="svc-card group bg-background relative"
      style={{
        willChange: "transform",
        transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-10 opacity-0"
        style={{ transition: "opacity 200ms ease" }}
        aria-hidden
      />

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

        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div
            ref={iconRef}
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
              transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
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
  );
}
