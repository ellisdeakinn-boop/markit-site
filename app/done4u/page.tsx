import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { DONE4U_CONTENT } from "./content";
import { DONE4U_STYLES } from "./styles";
import Done4UForm from "./Done4UForm";

// Client-facing webinar build intake for Done4U (Jake Peters + Reid Seddon).
//
// The agreement used to live on this page too. It moved to a Google Doc for
// DocuSign, so this page is now only the intake form.
//
// Unlisted rather than secret: it is noindex/nofollow and linked from nowhere,
// with the URL handed over directly. Rendered bare (no header, footer or sticky
// CTA) via BARE_ROUTES in app/components/ChromeGate.tsx.

// Outfit is Done4U's own headline face; it sets the hero on their landing page
// at maxed.vip. Using it for display type co-brands the document through the
// typography: Jake's face on the headings, Markit's Geist on the body.
//
// next/font scopes a font to the component that uses it, so this loads on
// /done4u only and never reaches the rest of markiting.agency.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webinar Build Intake",
  description:
    "Markit x Done4U: everything we need to build the 3 September webinar.",
  robots: { index: false, follow: false },
};

export default function Done4UPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DONE4U_STYLES }} />
      <div className={`d4u ${outfit.variable}`}>
        <Done4UForm html={DONE4U_CONTENT} />
      </div>
    </>
  );
}
