import type { MetadataRoute } from "next";
import { pricingLastUpdatedIso } from "@/data/seo-pages";
import { indexableSeoPages } from "@/data/seo-pages";
import { absoluteUrl } from "@/lib/seo/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableSeoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(pricingLastUpdatedIso),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
