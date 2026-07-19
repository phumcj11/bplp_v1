export const startingPriceThbPerPerson = 1290 as const;
export const startingPriceDisplay = "ราคาเริ่มต้น 1,290 บาทต่อคน";
export const startingPriceCondition =
  "ราคาขึ้นอยู่กับประเภทแพและจำนวนผู้เข้าพัก";
export const offerSchemaDescription = `${startingPriceDisplay} ${startingPriceCondition}`;

export interface TripPackage {
  readonly name: string;
  readonly duration: {
    readonly days: 2;
    readonly nights: 1;
  };
  readonly startingPriceThbPerPerson: typeof startingPriceThbPerPerson;
  readonly priceLabel: string;
  readonly tagline: string;
  readonly inclusions: readonly string[];
}

export const mainPackage = {
  name: "ทริป 2 วัน 1 คืน",
  duration: {
    days: 2,
    nights: 1,
  },
  startingPriceThbPerPerson,
  priceLabel: startingPriceDisplay,
  tagline: "เที่ยว กิน พัก เล่นน้ำ ครบจบในทริปเดียว",
  inclusions: [
    "แพพักส่วนตัว",
    "ห้องพักปรับอากาศ",
    "คาราโอเกะและแสงสี",
    "ล่องเรือชมวิวเขื่อนศรีนครินทร์",
    "Water Park @ Ananta Resort",
    "สวนน้ำเด็ก",
    "สวนน้ำผู้ใหญ่",
    "สระน้ำแทรมโพลีน",
    "แพเปียก",
    "เรือคายัค",
    "อาหารเย็น",
    "อาหารเช้า",
    "น้ำดื่ม",
    "น้ำแข็ง",
  ],
} as const satisfies TripPackage;
