"use client";

import Link from "next/link";
import { useScrollHover } from "../lib/use-scroll-hover";
import type { Partner, Case } from "./Proof";

export function PartnerCard({ p }: { p: Partner }) {
  const ref = useScrollHover<HTMLAnchorElement>();
  const divRef = useScrollHover<HTMLDivElement>();

  let inner: React.ReactNode;
  if (p.logo && p.colorRender) {
    inner = (
      <div className="relative w-full h-20 md:h-24 lg:h-28 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.logo}
          alt={p.name}
          className="brand-ease max-h-full max-w-[95%] object-contain opacity-85 group-tap-active:opacity-100"
        />
      </div>
    );
  } else if (p.logo) {
    inner = (
      <div
        role="img"
        aria-label={p.name}
        className="brand-ease w-full h-20 md:h-24 lg:h-28 bg-foreground group-tap-active:[background-image:linear-gradient(120deg,#6eff3e_0%,#40bbff_50%,#0074ff_100%)]"
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
    <Link ref={ref} href={`/work/${p.slug}`} className={baseClass} title={p.name}>
      {inner}
      <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--brand-blue)] brand-ease opacity-0 group-tap-active:opacity-100">
        {p.name} →
      </span>
    </Link>
  ) : (
    <div ref={divRef} className={baseClass} title={p.name}>
      {inner}
      <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted brand-ease opacity-0 group-tap-active:opacity-100">
        {p.name}
      </span>
    </div>
  );
}

export function CaseRow({ c }: { c: Case }) {
  const linkRef = useScrollHover<HTMLAnchorElement>();
  const divRef = useScrollHover<HTMLDivElement>();

  const Inner = (
    <>
      <div className="md:col-span-4 flex items-baseline gap-3 flex-wrap">
        <p className="brand-ease font-serif text-xl md:text-2xl tracking-[-0.015em] group-tap-active:text-[var(--brand-blue)]">
          {c.brand}
        </p>
        {c.status === "CURRENT" && (
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-white bg-[var(--brand-blue)] rounded-full px-2 py-0.5">
            Current
          </span>
        )}
      </div>
      <p className="md:col-span-6 text-base md:text-lg text-foreground/80">
        {c.result}
      </p>
      <p className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted md:text-right flex md:justify-end items-center gap-2">
        {c.discipline}
        {c.slug && (
          <span className="brand-ease opacity-0 group-tap-active:opacity-100">
            →
          </span>
        )}
      </p>
    </>
  );

  return c.slug ? (
    <Link
      ref={linkRef}
      href={`/work/${c.slug}`}
      className="group brand-ease grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-[var(--border)] items-baseline tap-active:bg-[var(--brand-blue)]/[0.06]"
    >
      {Inner}
    </Link>
  ) : (
    <div
      ref={divRef}
      className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-[var(--border)] items-baseline"
    >
      {Inner}
    </div>
  );
}
