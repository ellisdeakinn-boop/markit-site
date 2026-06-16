"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ServiceItem } from "./Services";

export default function ServiceCard({ s }: { s: ServiceItem }) {
  const cardRef = useRef<HTMLElement>(null);
  const tileRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [hover, setHover] = useState(false);

  // Mobile scroll-hover: activate color swap when the tile is in the viewport center.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: hover)").matches) return;
    const el = tileRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHover(entry.isIntersecting),
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
        spotlightRef.current.style.background = `radial-gradient(280px circle at ${mx}px ${my}px, rgba(255,255,255,0.08), transparent 70%)`;
        spotlightRef.current.style.opacity = "1";
      }
    });
  }

  function onEnter() {
    setHover(true);
  }

  function onLeave() {
    setHover(false);
    const card = cardRef.current;
    if (!card) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      card.style.transform = "";
      if (iconRef.current) iconRef.current.style.transform = "";
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    });
  }

  const bg = hover ? s.hoverBg : s.bg;
  const invertText = hover ? (s.hoverInvert ?? s.invert) : s.invert;
  const textColor = invertText ? "text-white" : "text-black";
  const fillColor = invertText ? "bg-white" : "bg-black";

  return (
    <article
      ref={cardRef}
      className="svc-card group bg-background relative"
      style={{
        willChange: "transform",
        transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-10 opacity-0"
        style={{ transition: "opacity 200ms ease" }}
        aria-hidden
      />

      <div
        ref={tileRef}
        className="brand-ease aspect-[5/4] relative overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span
            className={`font-mono text-[11px] brand-ease ${
              invertText ? "text-white/80" : "text-black/80"
            }`}
          >
            {s.code}
          </span>
          <span
            className={`font-mono text-[11px] brand-ease ${
              invertText ? "text-white/50" : "text-black/50"
            }`}
          >
            / {s.tag}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div
            ref={iconRef}
            className={`brand-ease w-24 h-24 lg:w-28 lg:h-28 ${fillColor}`}
            style={{
              WebkitMaskImage: `url('${s.icon}')`,
              maskImage: `url('${s.icon}')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              transition:
                "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), background-color 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
          <p
            className={`font-serif uppercase text-4xl lg:text-5xl tracking-[-0.02em] brand-ease ${textColor}`}
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
