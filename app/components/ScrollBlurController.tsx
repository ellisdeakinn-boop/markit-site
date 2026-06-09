"use client";

import { useEffect } from "react";

const MAX_BLUR = 14; // px
const CLEAR_AT = 0.25; // section's top reaches 25% of viewport height = fully clear
const BLUR_AT = 1.0; // section's top at or below viewport bottom = fully blurred

export default function ScrollBlurController() {
  useEffect(() => {
    // Footer is excluded so it stays sharp at the bottom of the page.
    // Only main content sections get the depth-of-field effect.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    );

    targets.forEach((el) => {
      el.style.willChange = "filter";
      el.style.transition = "filter 120ms linear";
    });

    let rafId = 0;

    const update = () => {
      const vh = window.innerHeight;
      const clearZone = vh * CLEAR_AT;
      const blurZone = vh * BLUR_AT;

      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        // Above viewport (already scrolled past): no blur
        if (bottom < -50) {
          el.style.filter = "";
          continue;
        }

        // In or above clear zone: no blur
        if (top <= clearZone) {
          el.style.filter = "";
          continue;
        }

        // Between clearZone and blurZone: interpolate
        const range = blurZone - clearZone;
        const progress = Math.min(Math.max((top - clearZone) / range, 0), 1);
        const blur = progress * MAX_BLUR;

        el.style.filter = `blur(${blur.toFixed(2)}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.style.filter = "";
        el.style.willChange = "";
        el.style.transition = "";
      });
    };
  }, []);

  return null;
}
