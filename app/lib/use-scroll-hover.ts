"use client";

import { useEffect, useRef } from "react";

export function useScrollHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: hover)").matches) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.setAttribute("data-tap-active", "on");
        else el.removeAttribute("data-tap-active");
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
