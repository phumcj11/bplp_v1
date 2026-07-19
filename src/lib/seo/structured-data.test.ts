import { describe, expect, it, vi, afterEach } from "vitest";
import {
  buildBusinessJsonLd,
  buildHomeStructuredData,
  buildOfferJsonLd,
  getBusinessId,
} from "./structured-data";
import { offerSchemaDescription, startingPriceDisplay } from "@/data/package";
import { getSiteUrl } from "./site-url";

describe("structured data", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("home schema ไม่มี rating/review และไม่มี FAQPage", () => {
    const payload = JSON.stringify(buildHomeStructuredData());
    expect(payload).not.toMatch(/AggregateRating|"Review"/);
    expect(payload).not.toContain("FAQPage");
  });

  it("business entity เดียวเป็น LodgingBusiness ที่ #business", () => {
    const blocks = buildHomeStructuredData();
    const lodgingBlocks = blocks.filter(
      (block) => block["@type"] === "LodgingBusiness",
    );
    expect(lodgingBlocks).toHaveLength(1);
    expect(getBusinessId()).toBe("https://baanpaklongpae.com/#business");
    expect(buildBusinessJsonLd()).not.toHaveProperty("address");
  });

  it("offer schema มี priceSpecification และไม่มี eligibleQuantity", () => {
    const offer = buildOfferJsonLd("/packages") as {
      price: string;
      priceCurrency: string;
      priceSpecification: { description: string };
      eligibleQuantity?: unknown;
      seller: { "@id": string };
      description: string;
    };
    expect(offer.price).toBe("1290");
    expect(offer.priceCurrency).toBe("THB");
    expect(offer.priceSpecification.description).toBe(offerSchemaDescription);
    expect(offer.description).toContain(startingPriceDisplay);
    expect(offer.eligibleQuantity).toBeUndefined();
    expect(offer.seller["@id"]).toBe(getBusinessId());
  });

  it("site url fallback ไม่ใช้ localhost", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(getSiteUrl()).toBe("https://baanpaklongpae.com");
  });
});
