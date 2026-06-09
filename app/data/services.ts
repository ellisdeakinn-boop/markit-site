export type Service = {
  slug: string;
  code: string;
  name: string;
  tag: "SPECIALTY" | "LEAD" | "SYSTEM" | "WORDS" | "BY REQUEST";
  tagline: string;
  intro: string;
  whatWeDo: string[];
  process: { title: string; description: string }[];
  caseStudySlugs: string[];
  invert?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "paid-ads",
    code: "A¹",
    name: "Paid Ads",
    tag: "SPECIALTY",
    tagline:
      "Campaign management and creative production under one roof. Meta is home turf. Google when the channel fits.",
    intro:
      "Most agencies split media buying from creative production. We don't. The same team that scripts and shoots the ad runs the campaign that distributes it. Faster iteration, fewer hand-offs, and creative tied directly to what the spend is doing.",
    whatWeDo: [
      "Strategy and account architecture across Meta (Facebook + Instagram)",
      "Google Ads (Search, Performance Max, YouTube) when the channel fits the business",
      "Weekly creative production loop tied to spend and performance",
      "Funnel review, audience research, and offer testing",
      "Pixel, conversion API, and attribution setup",
      "Reporting tied to bookings and revenue, not vanity metrics",
    ],
    process: [
      {
        title: "Audit",
        description:
          "We pull the existing account, creative library, and analytics. We map the gap between current spend and your revenue goal.",
      },
      {
        title: "Build & Launch",
        description:
          "Account rebuild, campaign architecture, fresh creative shot in-house, and a live tracking dashboard.",
      },
      {
        title: "Iterate",
        description:
          "Weekly creative refresh and audience tests. We kill what doesn't convert and double down on what does.",
      },
    ],
    caseStudySlugs: [
      "abraham-gray",
      "restore-hair",
      "deal-maker-weekend",
      "bury-the-hatchet",
    ],
    invert: true,
  },
  {
    slug: "website-builds",
    code: "B¹",
    name: "Website Builds",
    tag: "SPECIALTY",
    tagline:
      "Custom code in Next.js and React. No themes, no page builders, no templates.",
    intro:
      "Your website is the single asset your ads, content, and word-of-mouth all point to. We treat it like a conversion machine, not a brochure. Built from scratch in modern code, engineered for performance, ranked from day one.",
    whatWeDo: [
      "Custom marketing sites in Next.js / React",
      "Conversion-focused funnels and long-form VSL pages",
      "Booking flows wired directly into your CRM",
      "On-page SEO, Core Web Vitals, and accessibility built in",
      "Headless commerce where it fits",
      "Hosting and analytics setup that you own",
    ],
    process: [
      {
        title: "Strategy & Architecture",
        description:
          "Audit, sitemap, conversion modelling, and copy direction. We define what each page is for before we draw anything.",
      },
      {
        title: "Design & Build",
        description:
          "Design and code in parallel by the same team. Real components, real interactions, never static mockups.",
      },
      {
        title: "Launch & Tune",
        description:
          "Soft launch, monitor real traffic, fix what underperforms, then hand over a site you actually own.",
      },
    ],
    caseStudySlugs: ["az-compass", "abraham-gray", "atl-elite-real-estate"],
    invert: true,
  },
  {
    slug: "video-production",
    code: "C¹",
    name: "Video Production",
    tag: "LEAD",
    tagline:
      "On-location, in-studio, UGC casting, or post-only from your footage. The goal is revenue through views, not views for views' sake.",
    intro:
      "We own our gear, run our own edit team, and have produced everything from a single brand-deal commercial that pulled 21 million views to a 15-creative campaign with a professional boxer. Every shoot is built around what the business needs to grow, not just what looks good on a reel.",
    whatWeDo: [
      "On-location capture at your business, in the field, or anywhere the story lives",
      "In-studio shoots for controlled talking-head, UGC, and product content",
      "UGC creator sourcing, casting, and direction",
      "Post-only editing from footage you already have",
      "Short-form ad creative and long-form brand films",
      "Repurposing one shoot into weeks of content",
    ],
    process: [
      {
        title: "Brief",
        description:
          "We define the business outcome the video has to drive, then work back to the script, format, and shot list.",
      },
      {
        title: "Produce",
        description:
          "We bring gear, talent, and crew. You get out of the way, or jump in front of the camera if it serves the work.",
      },
      {
        title: "Edit & Ship",
        description:
          "In-house edits, multiple variants per concept for ad testing, delivered in formats ready for every channel.",
      },
    ],
    caseStudySlugs: [
      "pocket-dispo",
      "curmel-moton",
      "wish-atl",
      "youversion",
      "az-compass",
    ],
  },
  {
    slug: "lead-generation",
    code: "D¹",
    name: "Lead Generation",
    tag: "SYSTEM",
    tagline:
      "Whatever CRM you run, we wire it up. No CRM, we deploy GoHighLevel.",
    intro:
      "Leads are only valuable when they make it to a calendar or a counter. We build the plumbing that turns clicks into booked calls and walk-ins: intake, automated follow-up, reputation, and missed-call recovery, all in one system.",
    whatWeDo: [
      "GoHighLevel deployment or integration with your existing stack",
      "Zapier automations between your tools",
      "Intake forms, qualifying questions, and routing",
      "SMS, email, and voicemail follow-up sequences",
      "Reputation and review pipelines for Google and Yelp",
      "Missed-call text-back and AI receptionist setup",
      "Reporting dashboards owned by you",
    ],
    process: [
      {
        title: "Diagnose",
        description:
          "We map every step from first click to booked appointment, and where leads currently leak.",
      },
      {
        title: "Wire",
        description:
          "CRM, automations, forms, and dashboards built and tested. We migrate from your old setup with no data loss.",
      },
      {
        title: "Optimise",
        description:
          "Monthly tuning on response times, follow-up cadence, and conversion at every step.",
      },
    ],
    caseStudySlugs: ["bury-the-hatchet", "deal-maker-weekend", "putt-nation"],
  },
  {
    slug: "copywriting",
    code: "E¹",
    name: "Copywriting",
    tag: "WORDS",
    tagline:
      "Direct-response copy with taste. Pages, ads, emails, and SMS that move money.",
    intro:
      "Words are how you sell when no one is in the room. We write copy that earns attention and converts it, without sounding like a 2010 sales letter or a corporate brochure. Every line is tested against the business outcome.",
    whatWeDo: [
      "Landing pages and long-form sales pages",
      "Video sales letter scripts (VSLs)",
      "Ad scripts and hook variations for performance testing",
      "Email and SMS sequences",
      "Brand voice and messaging frameworks",
      "Sales decks and pitch documents",
    ],
    process: [
      {
        title: "Research",
        description:
          "Customer interviews, review mining, competitor teardown, and voice study before a single line is drafted.",
      },
      {
        title: "Draft & Test",
        description:
          "Multiple variants where it counts. Hooks, leads, and CTAs tested against each other in real distribution.",
      },
      {
        title: "Polish",
        description:
          "Edit for rhythm and clarity, scrub for filler, ship the version that converts.",
      },
    ],
    caseStudySlugs: ["abraham-gray", "atl-elite-real-estate"],
  },
  {
    slug: "social-media",
    code: "F¹",
    name: "Social Media",
    tag: "BY REQUEST",
    tagline:
      "Always-on content that compounds attention. Offered for clients who genuinely need it.",
    intro:
      "We don't push social as a default deliverable. When a brand needs constant content presence, we take it on like everything else: in-house, strategy-led, and tied to the same revenue numbers as the ad account.",
    whatWeDo: [
      "Content strategy aligned to the broader marketing plan",
      "On-location and in-studio capture",
      "Short-form edits sized for each platform",
      "Posting cadence and community management",
      "Repurposing of existing video and brand assets",
    ],
    process: [
      {
        title: "Map",
        description:
          "Define the audience, the format, and what 'success' looks like in revenue terms, not follower counts.",
      },
      {
        title: "Produce",
        description:
          "A capture day every two to four weeks generates the raw material for the whole posting calendar.",
      },
      {
        title: "Distribute",
        description:
          "Daily posting, community responses, and weekly performance read-outs.",
      },
    ],
    caseStudySlugs: ["az-compass", "youversion"],
  },
];

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
