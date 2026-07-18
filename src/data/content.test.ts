import { describe, expect, it } from "vitest";
import { itinerary } from "./itinerary";
import { mainPackage } from "./package";

describe("package data", () => {
  it("ใช้ราคาและรายการที่ยืนยันแล้ว", () => {
    expect(mainPackage.startingPriceThbPerPerson).toBe(1290);
    expect(mainPackage.inclusions).toContain("แพพักส่วนตัว");
    expect(mainPackage.inclusions).toContain("อาหารเช้า");
    expect(mainPackage.inclusions).toHaveLength(14);
  });
});

describe("itinerary data", () => {
  it("มี 4 ช่วงเวลา ครบสองวัน", () => {
    expect(itinerary).toHaveLength(4);
    expect(new Set(itinerary.map((period) => period.day))).toEqual(
      new Set([1, 2]),
    );
    expect(itinerary.at(-1)?.time).toBe("08:00–11:00");
  });
});
