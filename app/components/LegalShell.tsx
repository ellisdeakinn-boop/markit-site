import Link from "next/link";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: LegalShellProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[920px] px-6 lg:px-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="mb-12 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            {eyebrow}
          </span>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted hover-underline"
          >
            ← Back to Markit
          </Link>
        </div>

        <h1 className="font-serif uppercase text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em]">
          {title}
        </h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mt-6">
          Last updated · {updated}
        </p>

        <div className="legal-body mt-16 max-w-[680px] text-foreground/85 leading-[1.7]">
          {children}
        </div>
      </div>
    </section>
  );
}
