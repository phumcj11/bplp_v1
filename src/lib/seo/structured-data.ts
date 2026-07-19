import { pricingLastUpdatedIso } from "@/data/seo-pages";
import { contactData } from "@/data/contact";
import {
  mainPackage,
  offerSchemaDescription,
  startingPriceDisplay,
} from "@/data/package";
import { siteData } from "@/data/site";
import { absoluteUrl, getSiteUrl } from "./site-url";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getBusinessId() {
  return `${getSiteUrl()}/#business`;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: siteData.name.th,
    alternateName: siteData.name.en,
    url: getSiteUrl(),
    inLanguage: "th-TH",
    publisher: { "@id": getBusinessId() },
  };
}

export function buildBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": getBusinessId(),
    name: siteData.name.th,
    alternateName: siteData.name.en,
    url: getSiteUrl(),
    telephone: contactData.phone.display,
    sameAs: [contactData.facebook.href],
    priceRange: startingPriceDisplay,
  };
}

export function buildOfferJsonLd(path = "/packages") {
  const pageUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${pageUrl}#offer`,
    name: `${mainPackage.name} — ${startingPriceDisplay}`,
    description: `${offerSchemaDescription} สิ่งที่รวม: ${mainPackage.inclusions.join(" ")}`,
    url: pageUrl,
    price: String(mainPackage.startingPriceThbPerPerson),
    priceCurrency: "THB",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: String(mainPackage.startingPriceThbPerPerson),
      priceCurrency: "THB",
      description: offerSchemaDescription,
    },
    availability: "https://schema.org/InStock",
    validFrom: pricingLastUpdatedIso,
    seller: { "@id": getBusinessId() },
  };
}

export function buildWebPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "th-TH",
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    about: { "@id": getBusinessId() },
  };
}

export function buildFaqPageJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildHomeStructuredData() {
  return [
    buildBusinessJsonLd(),
    buildWebSiteJsonLd(),
    buildWebPageJsonLd({
      path: "/",
      title: siteData.seo.title,
      description: siteData.seo.description,
    }),
    buildOfferJsonLd("/packages"),
    buildBreadcrumbJsonLd([{ name: "หน้าแรก", path: "/" }]),
  ];
}

export function buildPageStructuredData({
  path,
  title,
  description,
  breadcrumbs,
  faqItems,
  includeOffer = false,
}: {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  faqItems?: ReadonlyArray<{ question: string; answer: string }>;
  includeOffer?: boolean;
}) {
  const blocks: Record<string, unknown>[] = [
    buildWebPageJsonLd({ path, title, description }),
    buildBreadcrumbJsonLd(breadcrumbs),
  ];

  if (includeOffer) {
    blocks.push(buildOfferJsonLd(path));
  }

  if (faqItems?.length) {
    blocks.push(buildFaqPageJsonLd(faqItems));
  }

  return blocks;
}
