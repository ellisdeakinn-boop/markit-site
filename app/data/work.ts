export type Project = {
  slug: string;
  brand: string;
  logo?: string;
  colorLogo?: boolean;
  href?: string;
  status: "CURRENT" | "PAST";
  hero: string;
  details: string;
  disciplines: string[];
  serviceSlugs: string[];
  stats?: { value: string; label: string }[];
  meta?: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "az-compass",
    brand: "AZ Compass",
    logo: "/logos/az-compass.png",
    href: "https://www.azcompassprep.com/",
    status: "CURRENT",
    hero: "250K+ views across YouTube and Instagram driving program interest and student applications.",
    details:
      "AZ Compass is a college and professional prep program in Arizona. We run their video and social engine, producing short-form content built to put the program in front of prospective students and their families. The work is ongoing.",
    disciplines: ["Video Production", "Social Media"],
    serviceSlugs: ["video-production", "social-media", "website-builds"],
    stats: [
      { value: "250K+", label: "views across YouTube and Instagram" },
      { value: "Ongoing", label: "in production" },
    ],
    meta: [
      { label: "Role", value: "Video & Social Lead" },
      { label: "Status", value: "Current" },
      { label: "Sector", value: "Education" },
    ],
  },
  {
    slug: "pocket-dispo",
    brand: "Pocket Dispo",
    logo: "/logos/pocket-dispo.png",
    href: "https://pocketdispo.com/",
    status: "PAST",
    hero: "21M views in 30 days. One brand-deal commercial. Follow-up release crossed 10M.",
    details:
      "Pocket Dispo brought us in to produce a single brand-deal commercial. We shot it, cut it, and released it on socials. It pulled 21 million views in the first 30 days. A subsequent release for the same client crossed 10 million.",
    disciplines: ["Video Production", "Paid Ads"],
    serviceSlugs: ["video-production", "paid-ads"],
    stats: [
      { value: "21M+", label: "views in 30 days" },
      { value: "10M+", label: "follow-up release" },
      { value: "1", label: "campaign" },
    ],
    meta: [
      { label: "Format", value: "Short-form commercial" },
      { label: "Distribution", value: "Organic + paid" },
      { label: "Sector", value: "Consumer product" },
    ],
  },
  {
    slug: "curmel-moton",
    brand: "Curmel Moton · Moton Classics",
    logo: "/logos/moton-classics.png",
    href: "https://www.instagram.com/motonclassics/",
    status: "PAST",
    hero: "Four shoots in Vegas with the boxer. 15 creatives. 1.5M+ total organic views.",
    details:
      "We embedded with Curmel Moton across four shoot days in Las Vegas, capturing fight prep, lifestyle, and brand moments around the Moton Classics platform. The output was 15 creatives released organically. Total view count across the work crossed 1.5 million.",
    disciplines: ["Video Production", "Social Media"],
    serviceSlugs: ["video-production", "social-media"],
    stats: [
      { value: "15", label: "creatives produced" },
      { value: "4", label: "Vegas shoot days" },
      { value: "1.5M+", label: "organic views" },
    ],
    meta: [
      { label: "Subject", value: "Professional boxer" },
      { label: "Format", value: "Lifestyle + brand" },
      { label: "Distribution", value: "Organic" },
    ],
  },
  {
    slug: "restore-hair",
    brand: "Restore Hair",
    logo: "/logos/restore-hair.png",
    href: "https://restorehair.com/",
    status: "PAST",
    hero: "Paid ads and organic content combined to garner millions of views.",
    details:
      "Restore Hair is a national hair-restoration brand. We ran a combined paid and organic content engine, producing creative built to perform on Meta and as ongoing social content. The work garnered millions of views across channels.",
    disciplines: ["Paid Ads", "Video Production"],
    serviceSlugs: ["paid-ads", "video-production"],
    stats: [
      { value: "Millions", label: "views across paid + organic" },
      { value: "National", label: "campaign reach" },
    ],
    meta: [
      { label: "Sector", value: "Health & wellness" },
      { label: "Channels", value: "Meta + organic social" },
    ],
  },
  {
    slug: "abraham-gray",
    brand: "Abraham Gray",
    href: "https://www.youtube.com/@abrahamgray",
    status: "PAST",
    hero: "Creative production and funnel build driving ticket sales through his YouTube audience.",
    details:
      "Abraham Gray is a creator and entrepreneur. We built the creative production loop, the long-form sales funnel, and the sign-up flow that converted his YouTube audience into ticket buyers. Hundreds of thousands of dollars in ticket sales attributed.",
    disciplines: ["Paid Ads", "Website Builds", "Copywriting"],
    serviceSlugs: ["paid-ads", "website-builds", "copywriting"],
    stats: [
      { value: "$100K+", label: "in ticket sales driven" },
      { value: "YouTube", label: "audience activation" },
    ],
    meta: [
      { label: "Format", value: "Creator funnel" },
      { label: "Sector", value: "Creator economy" },
    ],
  },
  {
    slug: "wish-atl",
    brand: "Wish ATL · Jordan · Adidas · Nike · Puma",
    logo: "/logos/wish-atl.png",
    href: "https://wishatl.com/",
    status: "PAST",
    hero: "Direct engagements through Wish ATL: content production, social, and full video campaigns with the biggest names in sport.",
    details:
      "Through Wish ATL in Atlanta, we delivered content production and full campaign video for partnerships with Jordan Brand, Adidas, Nike, and Puma. The work spanned in-store activations, athlete content, and product launch creative.",
    disciplines: ["Video Production", "Social Media"],
    serviceSlugs: ["video-production", "social-media"],
    stats: [
      { value: "100K+", label: "views across campaigns" },
      { value: "4", label: "global brands" },
    ],
    meta: [
      { label: "Partner", value: "Wish ATL" },
      { label: "Brands", value: "Jordan, Adidas, Nike, Puma" },
      { label: "Sector", value: "Sportswear" },
    ],
  },
  {
    slug: "bury-the-hatchet",
    brand: "Bury the Hatchet",
    logo: "/logos/bury-the-hatchet.png",
    colorLogo: true,
    href: "https://burythehatchet.com/",
    status: "PAST",
    hero: "Repurposed creative as paid ads and organic content, lifting lead flow and walk-ins.",
    details:
      "Bury the Hatchet is a multi-location axe-throwing experience. We took existing brand content and rebuilt it as paid creative and organic posts, increasing both online lead flow and in-person walk-ins.",
    disciplines: ["Paid Ads", "Lead Generation"],
    serviceSlugs: ["paid-ads", "lead-generation"],
    stats: [
      { value: "↑", label: "lead flow" },
      { value: "↑", label: "walk-ins" },
    ],
    meta: [
      { label: "Sector", value: "Entertainment / hospitality" },
      { label: "Channels", value: "Meta + organic" },
    ],
  },
  {
    slug: "team-octopus",
    brand: "Team Octopus",
    logo: "/logos/team-octopus.png",
    href: "https://mmaatl.com/",
    status: "PAST",
    hero: "Content built to drive ad performance and organic reach for the MMA team and gym.",
    details:
      "Team Octopus is an MMA team training out of Atlanta. We produced and repurposed content that ran as both paid and organic, increasing visibility and pulling new members into the gym.",
    disciplines: ["Video Production", "Paid Ads"],
    serviceSlugs: ["video-production", "paid-ads"],
    meta: [
      { label: "Sector", value: "Combat sports" },
      { label: "Channels", value: "Meta + organic" },
    ],
  },
  {
    slug: "putt-nation",
    brand: "Putt Nation",
    logo: "/logos/putt-nation.png",
    href: "https://puttnation.com/",
    status: "PAST",
    hero: "Content rebuilt for paid and organic distribution, driving foot traffic.",
    details:
      "Putt Nation runs experiential mini-golf venues. We turned their existing footage and brand assets into a sustained content and ad rotation that grew booked rounds and walk-in traffic.",
    disciplines: ["Paid Ads", "Lead Generation"],
    serviceSlugs: ["paid-ads", "lead-generation"],
    meta: [
      { label: "Sector", value: "Entertainment / hospitality" },
      { label: "Channels", value: "Meta + organic" },
    ],
  },
  {
    slug: "deal-maker-weekend",
    brand: "Deal Maker Weekend",
    logo: "/logos/deal-maker-weekend.png",
    href: "https://www.dealmakerevent.com/",
    status: "PAST",
    hero: "Paid ads and follow-up systems for a high-ticket event that drove a sold-out room.",
    details:
      "Deal Maker Weekend is a high-ticket event series. We ran the paid ad creative and built the registration and follow-up systems that converted cold traffic into paid attendees.",
    disciplines: ["Paid Ads", "Lead Generation"],
    serviceSlugs: ["paid-ads", "lead-generation"],
    meta: [
      { label: "Format", value: "Live event" },
      { label: "Channels", value: "Meta + email/SMS" },
    ],
  },
  {
    slug: "atl-elite-real-estate",
    brand: "ATL Elite Real Estate Solutions",
    logo: "/logos/atl-elite-real-estate.png",
    status: "PAST",
    hero: "Brand, copy, and website work for a growing Atlanta real-estate operation.",
    details:
      "ATL Elite Real Estate Solutions is a real-estate firm in Atlanta. We supported with web build, copywriting, and brand assets that positioned them in a competitive local market.",
    disciplines: ["Website Builds", "Copywriting"],
    serviceSlugs: ["website-builds", "copywriting"],
    meta: [
      { label: "Sector", value: "Real estate" },
      { label: "Location", value: "Atlanta" },
    ],
  },
  {
    slug: "youversion",
    brand: "YouVersion (via Reverb) & The Send",
    logo: "/logos/youversion.png",
    colorLogo: true,
    status: "PAST",
    hero: "Multi-campaign creator role for YouVersion via Reverb agency, plus content for The Send.",
    details:
      "Shema operated as creator across multiple campaigns inside the YouVersion Bible App ecosystem, produced through Reverb agency, and contributed content for The Send live events. Multiple pieces shipped at scale.",
    disciplines: ["Video Production", "Social Media"],
    serviceSlugs: ["video-production", "social-media"],
    meta: [
      { label: "Role", value: "Creator" },
      { label: "Partners", value: "Reverb · YouVersion · The Send" },
      { label: "Sector", value: "Faith / non-profit" },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
