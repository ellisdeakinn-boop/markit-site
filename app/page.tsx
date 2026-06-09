import type { Metadata } from "next";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Overview from "./components/Overview";
import Pillars from "./components/Pillars";
import Services from "./components/Services";
import Proof from "./components/Proof";
import Process from "./components/Process";
import Founders from "./components/Founders";
import Booking from "./components/Booking";

export const metadata: Metadata = {
  title: "Markit / Beyond Marketing",
  description:
    "Markit is the in-house marketing engine local service businesses use to print leads, fill calendars, and book walk-ins. Paid ads, websites, video, lead generation, and copy. Arizona-based, Meta-first, six in-house disciplines.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Markit / Beyond Marketing",
    description:
      "Six in-house disciplines. One operating team. The marketing engine local businesses use to print leads, fill calendars, and book walk-ins.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Overview />
      <Pillars />
      <Services />
      <Proof />
      <Process />
      <Founders />
      <Booking />
    </>
  );
}
