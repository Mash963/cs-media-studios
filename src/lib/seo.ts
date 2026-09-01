import type { Metadata } from "next";
import { site } from "@/data/site";

/**
 * Build per-page metadata with a canonical URL.
 * Pass the route path (e.g. "/services") and the page's own
 * `title` + `description`. The site name is appended automatically.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}${path}`,
    },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: `${site.url}${path}`,
      siteName: site.name,
      title: `${title} — ${site.name}`,
      description,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: ["/og.svg"],
    },
  };
}
