export interface SiteData {
  readonly name: {
    readonly th: string;
    readonly en: string;
  };
  readonly location: {
    readonly area: string;
    readonly province: string;
    readonly displayName: string;
  };
  readonly trip: {
    readonly durationDays: 2;
    readonly durationNights: 1;
    readonly startingPriceThbPerPerson: 1290;
    readonly minimumGroupSize: 8;
    readonly maximumGroupSize: 60;
  };
  readonly tagline: string;
  readonly targetGroups: readonly string[];
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

export const siteData = {
  name: {
    th: "บ้านพักล่องแพ",
    en: "BAAN PAK LONG PAE",
  },
  location: {
    area: "เขื่อนศรีนครินทร์",
    province: "จังหวัดกาญจนบุรี",
    displayName: "เขื่อนศรีนครินทร์ จังหวัดกาญจนบุรี",
  },
  trip: {
    durationDays: 2,
    durationNights: 1,
    startingPriceThbPerPerson: 1290,
    minimumGroupSize: 8,
    maximumGroupSize: 60,
  },
  tagline: "เที่ยว กิน พัก เล่นน้ำ ครบจบในทริปเดียว",
  targetGroups: [
    "กลุ่มเพื่อน",
    "ครอบครัวใหญ่",
    "ทริปบริษัท",
    "งานเลี้ยงทีม",
    "กรุ๊ปท่องเที่ยว",
  ],
  seo: {
    title: "ล่องแพกาญจนบุรี แพพักเหมาส่วนตัว 2 วัน 1 คืน | บ้านพักล่องแพ",
    description:
      "บ้านพักล่องแพ กาญจนบุรี แพเหมาส่วนตัวสำหรับ 8–60 คน โปรแกรม 2 วัน 1 คืน พร้อมอาหาร 2 มื้อ สวนน้ำ แพเปียก คายัค และล่องเรือชมวิว ราคาเริ่มต้น 1,290 บาทต่อคน",
  },
} as const satisfies SiteData;
