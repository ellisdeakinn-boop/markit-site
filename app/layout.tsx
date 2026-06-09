import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollBlurController from "./components/ScrollBlurController";
import SectionReveal from "./components/SectionReveal";
import {
  OrganizationSchema,
  WebSiteSchema,
  LocalBusinessSchema,
} from "./components/Schemas";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
} from "./lib/site";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Geist used as the display face too, matching the PP Neue Montreal request.
const display = Geist({
  variable: "--font-serif",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} / Beyond Marketing`,
    template: `%s / ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Ellis Deakin" }, { name: "Shema Kamau" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} / Beyond Marketing`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} / Beyond Marketing`,
    description: SITE_DESCRIPTION,
    creator: "@markitstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Marketing",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/markit-mark-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/markit-mark-192.png", sizes: "192x192" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        <SmoothScroll />
        <ScrollBlurController />
        <SectionReveal />
        <Header />
        <main className="flex flex-col flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
