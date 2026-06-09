import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, getProjectBySlug } from "../../data/work";
import { getServiceBySlug } from "../../data/services";
import Booking from "../../components/Booking";
import {
  CreativeWorkSchema,
  BreadcrumbSchema,
} from "../../components/Schemas";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  const path = `/work/${project.slug}`;
  const ogTitle = `${project.brand} / Markit work`;
  return {
    title: `${project.brand} — work`,
    description: project.hero,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: project.hero,
      url: path,
      type: "article",
      ...(project.logo ? { images: [project.logo] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: project.hero,
      ...(project.logo ? { images: [project.logo] } : {}),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedServices = project.serviceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(
    0,
    6
  );

  return (
    <>
      <CreativeWorkSchema project={project} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/#work" },
          { name: project.brand, href: `/work/${project.slug}` },
        ]}
      />

      <section className="relative w-full bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 pt-40 pb-20 lg:pt-52 lg:pb-32">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
              Work / {project.status === "CURRENT" ? "In production" : "Past"}
            </span>
            <Link
              href="/#work"
              className="ml-auto font-mono text-[11px] uppercase tracking-[0.08em] text-white/60 hover-underline"
            >
              ← All work
            </Link>
          </div>

          {project.logo && (
            <div className="mb-12">
              {project.colorLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.logo}
                  alt={project.brand}
                  className="max-h-16 md:max-h-20 w-auto"
                />
              ) : (
                <div
                  role="img"
                  aria-label={project.brand}
                  className="h-16 md:h-20 w-auto max-w-[280px] bg-white"
                  style={{
                    WebkitMaskImage: `url('${project.logo}')`,
                    maskImage: `url('${project.logo}')`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "left center",
                    maskPosition: "left center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              )}
            </div>
          )}

          <h1 className="font-serif uppercase text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
            {project.brand}
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-2xl leading-relaxed text-white/80">
            {project.hero}
          </p>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-2.5 text-sm hover:bg-white hover:text-foreground transition-colors"
            >
              Visit live site
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </section>

      {project.stats && project.stats.length > 0 && (
        <section className="bg-background">
          <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-16 lg:py-24">
            <div
              className={`grid grid-cols-2 ${
                project.stats.length >= 4
                  ? "md:grid-cols-4"
                  : project.stats.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              } gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden`}
            >
              {project.stats.map((s) => (
                <div key={s.label} className="bg-background p-6 lg:p-8">
                  <p className="font-serif text-3xl md:text-5xl tracking-[-0.025em] tabular-nums">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted mt-3 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-background">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="eyebrow">The work</p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-2xl md:text-3xl leading-[1.3] tracking-[-0.01em] text-foreground/90">
                {project.details}
              </p>
            </div>
          </div>
        </div>
      </section>

      {project.meta && project.meta.length > 0 && (
        <section className="bg-background">
          <div className="mx-auto max-w-[1480px] px-6 lg:px-10 pb-20 lg:pb-28">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[var(--border)] pt-10">
              {project.meta.map((m) => (
                <div key={m.label}>
                  <p className="eyebrow mb-2">{m.label}</p>
                  <p className="text-base md:text-lg">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="bg-background">
          <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-10">
              <div className="md:col-span-4">
                <p className="eyebrow">Services used</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
                  What we ran on this project.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="svc-card group bg-background p-6 lg:p-7 flex flex-col"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {s.code} · {s.tag}
                  </span>
                  <p className="font-serif uppercase text-2xl md:text-3xl mt-4 tracking-[-0.02em]">
                    {s.name}
                  </p>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed flex-1">
                    {s.tagline}
                  </p>
                  <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-muted group-hover:text-foreground transition-colors">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-background border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-16 lg:py-20">
          <p className="eyebrow mb-6">More work</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="font-serif text-xl md:text-2xl tracking-[-0.015em] hover-underline"
              >
                {p.brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Booking />
    </>
  );
}
