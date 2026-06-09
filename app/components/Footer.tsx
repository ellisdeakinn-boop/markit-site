import Link from "next/link";

const SERVICE_LINKS = [
  { label: "Paid Ads", slug: "paid-ads" },
  { label: "Website Builds", slug: "website-builds" },
  { label: "Video Production", slug: "video-production" },
  { label: "Lead Generation", slug: "lead-generation" },
  { label: "Copywriting", slug: "copywriting" },
  { label: "Social Media", slug: "social-media" },
];

const WORK_LINKS = [
  { label: "AZ Compass", slug: "az-compass" },
  { label: "Pocket Dispo", slug: "pocket-dispo" },
  { label: "Curmel Moton", slug: "curmel-moton" },
  { label: "Restore Hair", slug: "restore-hair" },
  { label: "Abraham Gray", slug: "abraham-gray" },
  { label: "Wish ATL", slug: "wish-atl" },
];

const FOLLOW: { name: string; href: string }[] = [
  { name: "Instagram", href: "https://www.instagram.com/markitcreative/" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block"
              aria-label="Markit home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/markit-logo.png"
                alt="Markit"
                className="h-32 md:h-40 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-md text-foreground/75 leading-relaxed">
              The marketing engine for local service businesses. Built in
              studio, shipped every week.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block font-serif text-2xl hover-underline tracking-[-0.02em]"
            >
              Book a call →
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">1.0 Services</p>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover-underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">2.0 Selected work</p>
            <ul className="space-y-2.5">
              {WORK_LINKS.map((w) => (
                <li key={w.slug}>
                  <Link href={`/work/${w.slug}`} className="hover-underline">
                    {w.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">3.0 Follow</p>
            <ul className="space-y-2.5">
              {FOLLOW.map((f) => (
                <li key={f.name}>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline"
                  >
                    {f.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 mb-2">Studio</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Arizona · PST
            </p>
            <p className="mt-4 font-mono text-[11px] text-muted">EST. 2025</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Markit. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs text-muted hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
