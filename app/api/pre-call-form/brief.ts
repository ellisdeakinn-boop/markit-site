// Generates a private call-prep brief for Ellis from a prospect's form answers.
// Markit is a marketing agency (Ellis + Shema); the prospect runs a mentorship /
// info offer and is a potential Markit client. The brief tells Ellis what to
// pitch and how to run the call. It is for Ellis only, never shown to the prospect.
//
// Resilient by design: any failure returns null so the answers email still sends.

import Anthropic from "@anthropic-ai/sdk";
import { ALL_FIELDS } from "../../pre-call-form/fields";

export interface CallBrief {
  read: string;
  pitch: string;
  talkingPoints: string[];
  objections: { objection: string; response: string }[];
  opening: string;
  close: string;
}

const MODEL = "claude-sonnet-4-6";

const SYSTEM = `You are a senior sales strategist prepping Ellis, co-founder of Markit, for a sales call.

ABOUT MARKIT
Markit is a marketing agency (Ellis Deakin + Shema Kamau, Arizona). It builds the marketing engine that turns attention into revenue. Services, all in-house:
- Paid Ads (Meta is home turf, Google when it fits) with creative production under the same roof
- Website Builds (custom Next.js/React, conversion-focused, VSL and booking funnels)
- Video Production (ads, VSLs, organic content)
- Lead Generation
- Copywriting
- Social Media
Edge: media buying and creative live under one roof, so creative is tied directly to what the spend is doing. Built for businesses with an offer worth scaling.

THE PROSPECT
Runs a mentorship / info offer and is a potential Markit client. Their form answers are below. They want to sell more of their mentorship.

YOUR JOB
Give Ellis a tight, specific call-prep brief grounded in THEIR actual answers and numbers. Diagnose where their funnel leaks, then map Markit services to closing the gap between their current revenue and their stated 90-day goal. Lead with their single biggest bottleneck.

RULES
- Be specific. Reference their real numbers, niche, and words. No generic agency fluff.
- No em dashes anywhere. No emojis. Direct, plain, confident.
- Recommend only what fits their stated gap. Do not pitch all six services.
- If an answer is missing, work with what you have, do not invent facts.`;

const TOOL = {
  name: "call_brief",
  description: "The structured call-prep brief for Ellis.",
  input_schema: {
    type: "object" as const,
    properties: {
      read: {
        type: "string",
        description:
          "One or two sentences diagnosing where this prospect is and their single biggest constraint.",
      },
      pitch: {
        type: "string",
        description:
          "2 to 4 sentences: which Markit service(s) to lead with, the offer framing, and why, tied to their numbers and bottleneck.",
      },
      talkingPoints: {
        type: "array",
        items: { type: "string" },
        description:
          "3 to 5 specific points or funnel gaps to raise on the call, each referencing their actual answers.",
      },
      objections: {
        type: "array",
        items: {
          type: "object",
          properties: {
            objection: { type: "string" },
            response: { type: "string" },
          },
          required: ["objection", "response"],
        },
        description: "2 to 3 objections this specific prospect is likely to raise, with how to handle each.",
      },
      opening: {
        type: "string",
        description: "One or two sentences on how to open the call.",
      },
      close: {
        type: "string",
        description: "The next step or close to drive the call toward.",
      },
    },
    required: ["read", "pitch", "talkingPoints", "objections", "opening", "close"],
  },
};

function asText(value: unknown): string {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return (value ?? "").toString().trim();
}

export async function generateBrief(
  body: Record<string, unknown>
): Promise<CallBrief | null> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    console.log("[brief] ANTHROPIC_API_KEY not set; skipping brief.");
    return null;
  }

  // Render the answers as a clean labelled block for the model.
  const answers = ALL_FIELDS.map((f) => {
    const v = asText(body[f.key]);
    return v ? `${f.label}\n${v}` : null;
  })
    .filter(Boolean)
    .join("\n\n");

  try {
    const client = new Anthropic({ apiKey: key });
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 1600,
      system: SYSTEM,
      tools: [TOOL],
      tool_choice: { type: "tool", name: "call_brief" },
      messages: [
        {
          role: "user",
          content: `Prospect's answers:\n\n${answers}\n\nProduce the call_brief.`,
        },
      ],
    });

    const block = message.content.find((b) => b.type === "tool_use");
    if (!block || block.type !== "tool_use") return null;
    return block.input as CallBrief;
  } catch (err) {
    console.error("[brief] generation failed:", err);
    return null;
  }
}
