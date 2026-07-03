"use client";

import { usePathname } from "next/navigation";

// Routes that should render bare — no header, footer, or sticky CTA.
// The pre-call form is a focused, prospect-facing page; site chrome distracts.
const BARE_ROUTES = ["/pre-call-form"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE_ROUTES.includes(pathname)) return null;
  return <>{children}</>;
}
