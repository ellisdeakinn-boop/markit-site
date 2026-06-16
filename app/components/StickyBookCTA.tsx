"use client";

import { useEffect, useState } from "react";

export function StickyBookCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    let bookInView = false;
    let scrolled = false;

    const recompute = () => setShow(scrolled && !bookInView);

    const onScroll = () => {
      scrolled = window.scrollY > window.innerHeight * 0.6;
      recompute();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const book = document.getElementById("book");
    let obs: IntersectionObserver | undefined;
    if (book) {
      obs = new IntersectionObserver(
        ([entry]) => {
          bookInView = entry.isIntersecting;
          recompute();
        },
        { threshold: 0.05 }
      );
      obs.observe(book);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs?.disconnect();
    };
  }, []);

  return (
    <a
      href="#book"
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-[var(--brand-blue)] text-white flex items-center justify-between px-5 py-3.5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/80">
        Ready to start
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        Book a call
        <span aria-hidden>→</span>
      </span>
    </a>
  );
}
