import { describe, expect, it } from "vitest";
import { recommendRafts } from "./rafts";

describe("recommendRafts", () => {
  it.each([
    [10, "A3"],
    [20, "A4"],
    [35, "A2"],
    [55, "A1"],
  ])("แนะนำแพตามช่วงจำนวน %i คน", (guests, raftId) => {
    const result = recommendRafts(guests);
    expect(result.exactMatch).toBe(true);
    expect(result.rafts.some((raft) => raft.id === raftId)).toBe(true);
  });

  it("คืนหลายตัวเลือกเมื่อช่วงรองรับซ้อนกัน", () => {
    const result = recommendRafts(42);
    expect(result.rafts.map((raft) => raft.id)).toEqual(["A2", "A1"]);
  });

  it("แนะนำให้สอบถามทีมงานเมื่อจำนวนคนอยู่นอกช่วง", () => {
    const result = recommendRafts(15);
    expect(result.exactMatch).toBe(false);
    expect(result.rafts).toHaveLength(2);
    expect(result.message).toContain("กรุณาสอบถามทีมงาน");
  });
});
