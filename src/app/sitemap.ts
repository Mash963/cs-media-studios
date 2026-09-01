import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const staticRoutes = [
  "",
  "/services",
  "/campaigns",
  "/campaign-design",
  "/portfolio",
  "/pricing",
  "/how-it-works",
  "/order",
  "/about",
  "/faq",
  "/contact",
  "/terms",
  "/privacy",
  "/popia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
