import type { Metadata } from "next";
import PreCallForm from "./PreCallForm";

export const metadata: Metadata = {
  title: "Pre-Call Snapshot",
  description:
    "A quick business snapshot so the Markit team comes into your call fully prepped.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function PreCallFormPage() {
  return <PreCallForm />;
}
