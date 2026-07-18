import { z } from "zod";

export const groupTypes = [
  "กลุ่มเพื่อน",
  "ครอบครัว",
  "บริษัท",
  "กรุ๊ปทัวร์",
  "อื่น ๆ",
] as const;

export const availabilitySchema = z.object({
  stayDate: z.string().min(1, "กรุณาเลือกวันที่ต้องการเข้าพัก"),
  guests: z
    .number({ message: "กรุณาระบุจำนวนผู้เข้าพัก" })
    .int("กรุณาระบุเป็นจำนวนเต็ม")
    .min(1, "กรุณาระบุจำนวนผู้เข้าพัก"),
  groupType: z.enum(groupTypes, {
    message: "กรุณาเลือกประเภทกลุ่ม",
  }),
  contactName: z.string().trim().min(2, "กรุณาระบุชื่อผู้ติดต่อ"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{9,15}$/, "กรุณาตรวจสอบเบอร์โทรศัพท์"),
  lineId: z.string().trim().max(50, "LINE ID ยาวเกินไป").optional(),
  message: z.string().trim().max(500, "ข้อความยาวเกิน 500 ตัวอักษร").optional(),
  privacyAccepted: z
    .boolean()
    .refine((accepted) => accepted, "กรุณายอมรับนโยบายความเป็นส่วนตัว"),
  website: z.string().max(0, "ไม่สามารถส่งแบบฟอร์มได้"),
});

export type AvailabilityInput = z.infer<typeof availabilitySchema>;

export type AvailabilityResponse = {
  success: boolean;
  message: string;
};
