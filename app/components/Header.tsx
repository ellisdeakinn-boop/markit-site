"use client";

import { useEffect, useState } from "react";

const NAV = [
  { num: "01", label: "Services", href: "/#services" },
  { num: "02", label: "Work", href: "/#work" },
  { num: "03", label: "Process", href: "/#process" },
  { num: "04", label: "Founders", href: "/#founders" },
  { num: "05", label: "Book a call", href: "/#book" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / hash navigation
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onLight = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          onLight
            ? "bg-background/85 backdrop-blur-md border-b border-[var(--border)] text-foreground"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="Markit home"
            onClick={() => setMenuOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/markit-mark.png"
              alt="Markit"
              className="h-8 md:h-9 w-auto transition-[filter] duration-300"
              style={onLight ? {} : { filter: "invert(1)" }}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="flex items-baseline gap-1.5 group"
              >
                <span
                  className={`font-mono text-[10px] ${
                    onLight ? "text-muted" : "text-white/60"
                  }`}
                >
                  {item.num}
                </span>
                <span className="text-sm hover-underline">{item.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="/#book"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
              onLight
                ? "bg-foreground text-background hover:opacity-90"
                : "border border-white/40 text-white hover:bg-white hover:text-foreground"
            }`}
          >
            Book a call
            <span aria-hidden>→</span>
          </a>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative inline-flex flex-col items-center justify-center gap-1.5 p-2 w-10 h-10"
          >
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                onLight ? "bg-foreground" : "bg-white"
              } ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                onLight ? "bg-foreground" : "bg-white"
              } ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-background transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-full flex flex-col pt-24 pb-10 px-6">
          <nav className="flex-1 flex flex-col gap-2">
            {NAV.map((item, i) => (
              <a
                key={item.num}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-baseline gap-3 border-b border-[var(--border)] py-5 transition-all duration-[600ms] ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms",
                }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {item.num}
                </span>
                <span className="font-serif uppercase text-4xl tracking-[-0.02em]">
                  {item.label}
                </span>
                <span
                  className="ml-auto self-center font-mono text-xs text-muted"
                  aria-hidden
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          <a
            href="/#book"
            onClick={() => setMenuOpen(false)}
            className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-4 text-base transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionDelay: menuOpen ? `${NAV.length * 60 + 120}ms` : "0ms",
            }}
          >
            Book a call
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </>
  );
}
