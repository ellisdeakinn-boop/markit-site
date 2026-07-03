import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /booking-confirmed and /pre-call-form are handled by noindex meta
        // tags instead of a disallow here: a robots.txt block stops Google
        // from crawling the page, so it never sees the noindex and the URL
        // can still show up in results if anyone links to it.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
