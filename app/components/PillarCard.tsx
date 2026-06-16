"use client";

import { useScrollHover } from "../lib/use-scroll-hover";

type Pillar = { num: string; label: string; body: string };

const TONES = [
  "bg-[var(--brand-blue)] text-white tap-active:bg-black",
  "bg-[var(--brand-sky)] text-white tap-active:bg-[var(--brand-blue)]",
  "bg-[var(--brand-lime)] text-black tap-active:bg-white",
];
const LABEL_TONES = ["text-white/70", "text-white/80", "text-black/70"];

export function PillarCard({ p, i }: { p: Pillar; i: number }) {
  const ref = useScrollHover<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${TONES[i]} p-8 lg:p-10 flex flex-col justify-between min-h-[260px] transition-colors duration-300`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-mono text-xs ${LABEL_TONES[i]}`}>{p.num}</span>
        <span
          className={`font-mono text-[11px] uppercase tracking-[0.08em] ${LABEL_TONES[i]}`}
        >
          {p.label}
        </span>
      </div>
      <p className="font-serif text-2xl md:text-3xl leading-tight tracking-[-0.015em] mt-12">
        {p.body}
      </p>
    </div>
  );
}
