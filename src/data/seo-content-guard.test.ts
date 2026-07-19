import { describe, expect, it } from "vitest";
import { indexableSeoPages, seoPages } from "./seo-pages";
import {
  mainPackage,
  offerSchemaDescription,
  startingPriceDisplay,
} from "./package";
import { faqs } from "./faqs";

const forbiddenTerms = [/Adventure/i, /ล่องแก่ง/, /อาหาร 3 มื้อ/, /AggregateRating/, /"Review"/];

const publicTextSources = [
  JSON.stringify(seoPages),
  JSON.stringify(mainPackage),
  JSON.stringify(faqs.map((faq) => faq.question)),
  JSON.stringify(faqs.map((faq) => faq.answer)),
  offerSchemaDescription,
];

describe("SEO content guard", () => {
  it("ไม่มีคำต้องห้ามใน metadata และข้อมูลหลัก", () => {
    for (const source of publicTextSources) {
      for (const pattern of forbiddenTerms) {
        expect(source).not.toMatch(pattern);
      }
    }
  });

  it("ยืนยันอาหาร 2 มื้อในแพ็กเกจ", () => {
    expect(mainPackage.inclusions).toContain("อาหารเย็น");
    expect(mainPackage.inclusions).toContain("อาหารเช้า");
    expect(mainPackage.inclusions.filter((item) => item.includes("อาหาร"))).toHaveLength(2);
  });

  it("ข้อความราคาใช้รูปแบบราคาเริ่มต้น 1,290 บาทต่อคน", () => {
    expect(startingPriceDisplay).toBe("ราคาเริ่มต้น 1,290 บาทต่อคน");
    expect(mainPackage.priceLabel).toBe(startingPriceDisplay);
    expect(seoPages.home.description).toContain(startingPriceDisplay);
    expect(offerSchemaDescription).toContain("ประเภทแพ");
  });

  it("title และ description ไม่ซ้ำกันใน indexable pages", () => {
    const titles = indexableSeoPages.map((page) => page.title);
    const descriptions = indexableSeoPages.map((page) => page.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("privacy และ terms ไม่อยู่ใน indexable pages", () => {
    const paths = indexableSeoPages.map((page) => page.path);
    expect(paths).not.toContain("/privacy");
    expect(paths).not.toContain("/terms");
    expect(seoPages.privacy.indexable).toBe(false);
    expect(seoPages.terms.indexable).toBe(false);
  });
});
