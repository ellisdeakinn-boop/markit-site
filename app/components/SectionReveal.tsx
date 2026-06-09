"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function SectionReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("main > section, footer")
    );

    const vh = window.innerHeight;

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < vh * 0.85;

      el.style.transition = `opacity 900ms ${EASE}, transform 900ms ${EASE}`;

      if (inView) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(36px)";
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= vh * 0.85) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
