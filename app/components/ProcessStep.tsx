"use client";

import { useScrollHover } from "../lib/use-scroll-hover";

export function ProcessStep({ k, t, d }: { k: string; t: string; d: string }) {
  const ref = useScrollHover<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="group brand-ease bg-[var(--brand-blue)] p-6 tap-active:bg-black"
    >
      <span className="brand-ease inline-flex items-center justify-center w-9 h-9 bg-white text-[var(--brand-blue)] font-mono text-[12px] font-medium group-tap-active:bg-[var(--brand-sky)] group-tap-active:text-white">
        {k}
      </span>
      <p className="font-serif text-xl mt-4 tracking-[-0.015em] text-white">
        {t}
      </p>
      <p className="text-sm text-white/80 mt-2 leading-relaxed">{d}</p>
    </div>
  );
}
