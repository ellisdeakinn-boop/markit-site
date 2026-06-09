// JSON-LD structured data components. Render inside any server component.
// All output is escaped via JSON.stringify and injected via dangerouslySetInnerHTML.

import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  FOUNDERS,
  ORG_ADDRESS,
  SOCIAL_URLS,
  CONTACT_EMAIL,
} from "../lib/site";
import type { Service } from "../data/services";
import type { Project } from "../data/work";

function tag(data: unknown) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return tag({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    founder: FOUNDERS.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: ORG_ADDRESS.region,
      addressCountry: ORG_ADDRESS.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "Customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    sameAs: SOCIAL_URLS,
  });
}

export function LocalBusinessSchema() {
  return tag({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/icon.svg`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: ORG_ADDRESS.region,
      addressCountry: ORG_ADDRESS.country,
    },
    areaServed: { "@type": "Country", name: "United States" },
    email: CONTACT_EMAIL,
    sameAs: SOCIAL_URLS,
  });
}

export function WebSiteSchema() {
  return tag({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
  });
}

export function ServiceSchema({ service }: { service: Service }) {
  return tag({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.name,
    description: service.tagline,
    serviceType: service.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    url: `${SITE_URL}/services/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} offerings`,
      itemListElement: service.whatWeDo.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  });
}

export function CreativeWorkSchema({ project }: { project: Project }) {
  return tag({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/work/${project.slug}#case`,
    name: `${project.brand} — Markit case study`,
    headline: project.hero,
    description: project.details,
    url: `${SITE_URL}/work/${project.slug}`,
    creator: { "@id": `${SITE_URL}/#organization` },
    about: project.brand,
    keywords: project.disciplines.join(", "),
    ...(project.logo ? { image: `${SITE_URL}${project.logo}` } : {}),
  });
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return tag({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  });
}
