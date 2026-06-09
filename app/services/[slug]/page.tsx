import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, getServiceBySlug } from "../../data/services";
import { getProjectBySlug } from "../../data/work";
import Booking from "../../components/Booking";
import { ServiceSchema, BreadcrumbSchema } from "../../components/Schemas";

export const dynamicParams = false;

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };

  const path = `/services/${service.slug}`;
  const ogTitle = `${service.name} / Markit`;
  return {
    title: service.name,
    description: service.tagline,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: service.tagline,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.caseStudySlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <ServiceSchema service={service} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <section className="relative w-full bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.07),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 pt-40 pb-20 lg:pt-52 lg:pb-32">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
              {service.code} · {service.tag}
            </span>
            <Link
              href="/#services"
              className="ml-auto font-mono text-[11px] uppercase tracking-[0.08em] text-white/60 hover-underline"
            >
              ← All services
            </Link>
          </div>

          <h1 className="font-serif uppercase text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em]">
            {service.name}
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed text-white/80">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="eyebrow">Overview / 01</p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
                {service.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="eyebrow">What we do / 02</p>
              <p className="font-serif text-3xl md:text-4xl mt-3 tracking-[-0.02em]">
                Inside the engagement.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
                {service.whatWeDo.map((item, i) => (
                  <li
                    key={item}
                    className="bg-background p-6 lg:p-7 flex items-baseline gap-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="eyebrow">Process / 03</p>
              <p className="font-serif uppercase text-3xl md:text-5xl mt-3 leading-tight tracking-[-0.02em]">
                How we run it.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
              {service.process.map((step, i) => (
                <div key={step.title} className="bg-background p-6 lg:p-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif uppercase text-xl md:text-2xl mt-3 tracking-[-0.015em]">
                    {step.title}
                  </p>
                  <p className="text-sm text-foreground/75 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-background">
          <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12">
              <div className="md:col-span-4">
                <p className="eyebrow">Selected work / 04</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
                  Where this service shipped.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="svc-card group bg-background p-6 lg:p-7 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      Case / {p.disciplines.join(" · ")}
                    </span>
                    {p.status === "CURRENT" && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-serif uppercase text-2xl md:text-3xl tracking-[-0.02em]">
                    {p.brand}
                  </p>
                  <p className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed flex-1">
                    {p.hero}
                  </p>
                  <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-muted group-hover:text-foreground transition-colors">
                    Read case →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-background border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-16 lg:py-20">
          <p className="eyebrow mb-6">Other disciplines</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="font-serif uppercase text-xl md:text-2xl tracking-[-0.015em] hover-underline"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Booking />
    </>
  );
}
