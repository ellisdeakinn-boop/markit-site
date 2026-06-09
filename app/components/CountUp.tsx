"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
};

const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  durationMs = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const t0 = performance.now();
      let rafId: number;

      const tick = (now: number) => {
        const p = Math.min((now - t0) / durationMs, 1);
        const eased = EASE_OUT(p);
        const current = from + (to - from) * eased;
        setValue(current);
        if (p < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);

      return () => cancelAnimationFrame(rafId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [from, to, durationMs]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
