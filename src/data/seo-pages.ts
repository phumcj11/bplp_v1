export type SeoPageEntry = {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly h1: string;
  readonly indexable: boolean;
};

export const pricingLastUpdatedLabel = "19 กรกฎาคม 2569";
export const pricingLastUpdatedIso = "2026-07-19";

export const seoPages = {
  home: {
    path: "/",
    title: "ล่องแพกาญจนบุรี แพพักเหมาส่วนตัว 2 วัน 1 คืน | บ้านพักล่องแพ",
    description:
      "บ้านพักล่องแพ กาญจนบุรี แพเหมาส่วนตัวสำหรับ 8–60 คน โปรแกรม 2 วัน 1 คืน พร้อมอาหาร 2 มื้อ สวนน้ำ แพเปียก คายัค และล่องเรือชมวิว ราคาเริ่มต้น 1,290 บาทต่อคน",
    h1: "ทริปล่องแพ 2 วัน 1 คืน",
    indexable: true,
  },
  packages: {
    path: "/packages",
    title: "ราคาและแพ็กเกจล่องแพกาญจนบุรี 2 วัน 1 คืน | บ้านพักล่องแพ",
    description:
      "ดูราคาเริ่มต้น 1,290 บาทต่อคน ราคาขึ้นอยู่กับประเภทแพและจำนวนผู้เข้าพัก สิ่งที่รวมในแพ็กเกจ อาหาร 2 มื้อ กิจกรรมสวนน้ำ แพเปียก ที่เขื่อนศรีนครินทร์",
    h1: "ราคาและแพ็กเกจ 2 วัน 1 คืน",
    indexable: true,
  },
  rafts: {
    path: "/rafts",
    title: "เลือกแพตามจำนวนคน 8–60 คน | แพพักเขื่อนศรีนครินทร์",
    description:
      "เปรียบเทียบแพ A3 A4 A2 A1 สำหรับกลุ่ม 8–14, 16–25, 32–45 และ 40–60 คน แพเหมาส่วนตัวปรับอากาศ ลากออก ที่เขื่อนศรีนครินทร์ กาญจนบุรี",
    h1: "เลือกแพตามจำนวนคนในกลุ่ม",
    indexable: true,
  },
  activities: {
    path: "/activities",
    title: "กิจกรรมในแพ็กเกจ สวนน้ำ แพเปียก คายัค | บ้านพักล่องแพ",
    description:
      "สรุปกิจกรรมที่รวมในโปรแกรม 2 วัน 1 คืน ได้แก่ Water Park สวนน้ำ แพเปียก เรือคายัค ล่องเรือชมวิว และคาราโอเกะ ที่เขื่อนศรีนครินทร์",
    h1: "กิจกรรมและสิ่งที่รวมในแพ็กเกจ",
    indexable: true,
  },
  itinerary: {
    path: "/itinerary",
    title: "โปรแกรมล่องแพ 2 วัน 1 คืน เขื่อนศรีนครินทร์ | บ้านพักล่องแพ",
    description:
      "ไทม์ไลน์โปรแกรม 2 วัน 1 คืน ตั้งแต่ขึ้นแพ เล่นสวนน้ำ อาหารเย็น คาราโอเกะ จนถึงเช้าวันที่สองและเดินทางกลับ",
    h1: "โปรแกรมทริป 2 วัน 1 คืน",
    indexable: true,
  },
  faq: {
    path: "/faq",
    title: "คำถามที่พบบ่อย ล่องแพกาญจนบุรี | บ้านพักล่องแพ",
    description:
      "ตอบคำถามเรื่องราคาเริ่มต้น 1,290 บาทต่อคน อาหาร 2 มื้อ การเลือกแพ จำนวนคน และการจอง จากข้อมูลที่บ้านพักล่องแพยืนยันแล้ว",
    h1: "คำถามที่พบบ่อย",
    indexable: true,
  },
  contact: {
    path: "/contact",
    title: "ติดต่อและเช็กวันว่าง | บ้านพักล่องแพ กาญจนบุรี",
    description:
      "ติดต่อบ้านพักล่องแพ โทร 081-900-7895 LINE @baanpaklongpae หรือส่งคำขอเช็กวันว่างสำหรับทริปแพเหมาส่วนตัวที่เขื่อนศรีนครินทร์",
    h1: "ติดต่อและเช็กวันว่าง",
    indexable: true,
  },
  guideTrip: {
    path: "/guides/kanchanaburi-raft-trip",
    title: "คู่มือเที่ยวล่องแพกาญจนบุรี เขื่อนศรีนครินทร์ | บ้านพักล่องแพ",
    description:
      "คู่มือเลือกแพ เข้าใจราคา โปรแกรม 2 วัน 1 คืน อาหาร 2 มื้อ และกิจกรรม สำหรับกลุ่ม 8–60 คน โดยบ้านพักล่องแพ",
    h1: "คู่มือเที่ยวล่องแพกาญจนบุรี",
    indexable: true,
  },
  guidePrepare: {
    path: "/guides/prepare-for-raft-trip",
    title: "เตรียมตัวก่อนไปพักแพกาญจนบุรี | บ้านพักล่องแพ",
    description:
      "สิ่งที่ควรเตรียมก่อนทริปแพ ข้อควรรู้เรื่องสวนน้ำ การเดินทาง และวิธีเช็กวันว่าง โดยทีมบ้านพักล่องแพ",
    h1: "เตรียมตัวก่อนไปพักแพ",
    indexable: true,
  },
  privacy: {
    path: "/privacy",
    title: "นโยบายความเป็นส่วนตัว | บ้านพักล่องแพ",
    description: "นโยบายความเป็นส่วนตัวของเว็บไซต์บ้านพักล่องแพ",
    h1: "นโยบายความเป็นส่วนตัว",
    indexable: false,
  },
  terms: {
    path: "/terms",
    title: "เงื่อนไขการจอง | บ้านพักล่องแพ",
    description: "เงื่อนไขการจองและใช้บริการของบ้านพักล่องแพ",
    h1: "เงื่อนไขการจอง",
    indexable: false,
  },
  thankYou: {
    path: "/thank-you",
    title: "ได้รับคำขอแล้ว | บ้านพักล่องแพ",
    description: "ยืนยันการรับคำขอเช็กวันว่าง",
    h1: "ได้รับคำขอของคุณแล้ว",
    indexable: false,
  },
} as const satisfies Record<string, SeoPageEntry>;

export const indexableSeoPages = Object.values(seoPages).filter(
  (page) => page.indexable,
);
