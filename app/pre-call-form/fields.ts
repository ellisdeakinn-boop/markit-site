// Shared question schema for the pre-call discovery form. Used by both the
// client form (rendering inputs) and the API route (rendering the email), so
// labels and ordering can never drift between the two.

export type FieldType = "short" | "long" | "checkbox";

export interface Field {
  /** Stable key used in the POST body and email. */
  key: string;
  /** Question shown to the prospect and used as the email label. */
  label: string;
  type: FieldType;
  required?: boolean;
  /** Only for type "checkbox". */
  options?: string[];
  /** Lets a checkbox group accept a free-text "other" value. */
  allowOther?: boolean;
  placeholder?: string;
}

export interface Section {
  /** Eyebrow number shown beside the title, e.g. "01". */
  no: string;
  title: string;
  fields: Field[];
}

export const SECTIONS: Section[] = [
  {
    no: "00",
    title: "Who you are",
    fields: [
      { key: "contact_name", label: "Your name", type: "short", required: true },
      { key: "business_name", label: "Business name", type: "short", required: true },
      {
        key: "contact_email",
        label: "Best email to reach you",
        type: "short",
        required: true,
        placeholder: "you@business.com",
      },
    ],
  },
  {
    no: "01",
    title: "The offer",
    fields: [
      {
        key: "offer_what",
        label: "What is the mentorship you sell, and who is it for? One sentence is fine.",
        type: "long",
        required: true,
      },
      {
        key: "offer_price",
        label: "What is the price, and is it one-time, payment plan, or recurring?",
        type: "short",
        required: true,
      },
      {
        key: "offer_transformation",
        label:
          "What is the core transformation a client gets? Where do they start, where do they end up?",
        type: "long",
        required: true,
      },
      {
        key: "offer_proof",
        label:
          "What proof do you have that it works? Client results, testimonials, case studies, or your own story.",
        type: "long",
      },
      {
        key: "offer_differentiator",
        label: "What makes you different from the other mentors your buyer could pick instead?",
        type: "long",
      },
    ],
  },
  {
    no: "02",
    title: "The numbers",
    fields: [
      { key: "num_revenue", label: "What is your current monthly revenue, roughly?", type: "short", required: true },
      { key: "num_new_clients", label: "How many new clients do you sign in a typical month?", type: "short", required: true },
      { key: "num_avg_sale", label: "What is your average sale value once someone buys?", type: "short", required: true },
      { key: "num_cpl", label: "What does it cost you to get a lead right now, if you know?", type: "short" },
      { key: "num_leads", label: "How many leads or calls do you get in a month, and where do they come from?", type: "long" },
    ],
  },
  {
    no: "03",
    title: "The funnel",
    fields: [
      {
        key: "funnel_journey",
        label: "Walk me through how a stranger becomes a paying client today, step by step.",
        type: "long",
        required: true,
      },
      { key: "funnel_dropoff", label: "Where in that journey do people drop off or go cold?", type: "long" },
      {
        key: "funnel_sell_method",
        label: "How do you sell? Pick all that apply.",
        type: "checkbox",
        required: true,
        options: ["Sales calls", "DMs", "Webinar", "Straight from content"],
        allowOther: true,
      },
      {
        key: "funnel_show_close",
        label: "If you run sales calls: what percentage show up, and what percentage close?",
        type: "short",
      },
      { key: "funnel_stack", label: "What tools are you using to run all this? CRM, booking, email, payment, etc.", type: "long" },
    ],
  },
  {
    no: "04",
    title: "Traffic and audience",
    fields: [
      {
        key: "traffic_source",
        label: "How are people finding you right now?",
        type: "checkbox",
        required: true,
        options: ["Organic content", "Paid ads", "Referrals", "Affiliates"],
        allowOther: true,
      },
      { key: "traffic_audience", label: "What is your audience size and on which platforms?", type: "long" },
      { key: "traffic_ads", label: "Are you running paid ads? If so, what is the monthly budget and the rough return?", type: "long" },
    ],
  },
  {
    no: "05",
    title: "The bottleneck",
    fields: [
      { key: "bottleneck_main", label: "Single biggest thing holding your revenue back right now?", type: "long", required: true },
      { key: "bottleneck_tried", label: "What have you already tried to fix it, and what happened?", type: "long" },
      { key: "bottleneck_goal", label: "What does this worked look like 90 days from now? Give me a number.", type: "long", required: true },
    ],
  },
  {
    no: "06",
    title: "Fit and logistics",
    fields: [
      { key: "fit_why_now", label: "Why now? What made you book this call this week specifically?", type: "long", required: true },
      { key: "fit_decision", label: "Who else is involved in the decision, or is it just you?", type: "short" },
      { key: "fit_budget", label: "What is your rough budget or appetite for investing in growth right now?", type: "short" },
      { key: "fit_anything_else", label: "Anything I have not asked that I should know before we talk?", type: "long" },
    ],
  },
];

export const ALL_FIELDS: Field[] = SECTIONS.flatMap((s) => s.fields);
