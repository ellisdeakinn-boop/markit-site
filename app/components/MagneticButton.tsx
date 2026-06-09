"use client";

import { useEffect, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Distance in px from which the magnet starts pulling. */
  radius?: number;
  /** Max translation in px. */
  strength?: number;
};

export default function MagneticButton({
  href,
  children,
  className,
  radius = 140,
  strength = 14,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skip on touch devices where magnetism doesn't apply.
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist > radius) {
        el.style.transform = `translate3d(0,0,0)`;
        return;
      }

      const pull = 1 - dist / radius;
      const tx = (dx / radius) * strength * (1 + pull);
      const ty = (dy / radius) * strength * (1 + pull);

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(
          2
        )}px, 0)`;
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0,0,0)`;
      });
    };

    el.style.willChange = "transform";
    el.style.transition = "transform 320ms cubic-bezier(0.16, 1, 0.3, 1)";

    window.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [radius, strength]);

  return (
    <a ref={ref} href={href} className={className}>
      {children}
    </a>
  );
}
