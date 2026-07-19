import type { Metadata } from "next";
import type { SeoPageEntry } from "@/data/seo-pages";
import { siteData } from "@/data/site";
import { absoluteUrl } from "./site-url";

export function createPageMetadata(page: SeoPageEntry): Metadata {
  const canonicalPath = page.path === "/" ? "/" : page.path;
  const ogImage = absoluteUrl("/images/og/og-share.jpg");

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: "th_TH",
      url: canonicalPath,
      siteName: siteData.name.th,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteData.name.th} ทริปล่องแพ 2 วัน 1 คืน`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    robots: page.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
