import { describe, expect, it } from "vitest";
import { availabilitySchema } from "./availability";

const validInput = {
  stayDate: "2026-12-20",
  guests: 12,
  groupType: "กลุ่มเพื่อน",
  contactName: "ผู้ติดต่อทดสอบ",
  phone: "081-900-7895",
  lineId: "",
  message: "",
  privacyAccepted: true,
  website: "",
};

describe("availabilitySchema", () => {
  it("ยอมรับข้อมูลที่ครบถ้วน", () => {
    expect(availabilitySchema.safeParse(validInput).success).toBe(true);
  });

  it("ปฏิเสธเมื่อไม่ยอมรับนโยบาย", () => {
    const result = availabilitySchema.safeParse({
      ...validInput,
      privacyAccepted: false,
    });
    expect(result.success).toBe(false);
  });

  it("ปฏิเสธ honeypot ที่มีค่า", () => {
    const result = availabilitySchema.safeParse({
      ...validInput,
      website: "spam.example",
    });
    expect(result.success).toBe(false);
  });
});
