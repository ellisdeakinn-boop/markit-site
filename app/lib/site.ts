// Central site config. Swap NEXT_PUBLIC_SITE_URL in .env once the real
// domain is registered. Everything downstream (sitemap, OG tags, JSON-LD,
// canonical URLs) reads from here.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://markiting.agency"
).replace(/\/$/, "");

export const SITE_NAME = "Markit";

export const SITE_TAGLINE = "Beyond Marketing";

export const SITE_DESCRIPTION =
  "Markit builds the marketing engine local service businesses use to print leads, fill calendars, and book walk-ins. Paid ads, website builds, video production, lead generation, copywriting, and social media, all in-house in Arizona.";

export const SITE_KEYWORDS = [
  "marketing agency Arizona",
  "Phoenix marketing agency",
  "local business marketing",
  "paid ads agency",
  "video production agency",
  "website build agency",
  "lead generation agency",
  "Meta ads agency",
  "in-house marketing team",
  "Markit",
];

export const FOUNDERS = [
  { name: "Ellis Deakin", role: "Chief of Operations" },
  { name: "Shema Kamau", role: "Chief of Production" },
];

export const ORG_ADDRESS = {
  region: "AZ",
  country: "US",
  timezone: "America/Phoenix",
};

// Populate when social handles are live. Schema.org `sameAs` reads these.
export const SOCIAL_URLS: string[] = [
  "https://www.instagram.com/markitcreative/",
];

export const CONTACT_EMAIL = "hello@markiting.agency";

export const BOOKING_URL =
  "https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry";
