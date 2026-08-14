"use client";

import { usePathname } from "next/navigation";

// Routes that should render bare — no header, footer, or sticky CTA.
// The pre-call form is a focused, prospect-facing page; site chrome distracts.
// /done4u is a client document (agreement + intake) handed over by link, so it
// should read as a document rather than a page on the marketing site.
const BARE_ROUTES = ["/pre-call-form", "/done4u"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE_ROUTES.includes(pathname)) return null;
  return <>{children}</>;
}
