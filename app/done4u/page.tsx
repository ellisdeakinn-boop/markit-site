import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { DONE4U_CONTENT } from "./content";
import { DONE4U_STYLES } from "./styles";

// Outfit is Done4U's own headline face — it sets the hero on their landing page
// at maxed.vip. Using it for the display type here means the document is
// co-branded through the typography itself: Jake's face on the headings, Markit's
// Geist on the body. Loud over quiet, one of each, per the house pairing rule.
//
// next/font scopes a font to the component that uses it, so this loads on
// /done4u only and never reaches the rest of markiting.agency.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Client-facing document for Done4U (Jake Peters + Reid Seddon): the webinar
// agreement plus the build intake, on one page.
//
// Unlisted rather than secret. It carries commercial terms, so it is noindex /
// nofollow and is not linked from anywhere on the site — the URL is handed over
// directly. Rendered bare (no header, footer or sticky CTA) via BARE_ROUTES in
// app/components/ChromeGate.tsx.

export const metadata: Metadata = {
  title: "Webinar Agreement and Build Intake",
  description:
    "Markit x Done4U: the agreement for the 3 September webinar, and everything we need to build it.",
  robots: { index: false, follow: false },
};

export default function Done4UPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DONE4U_STYLES }} />
      <div
        className={`d4u ${outfit.variable}`}
        dangerouslySetInnerHTML={{ __html: DONE4U_CONTENT }}
      />
    </>
  );
}
