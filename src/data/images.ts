import type { ActivityId } from "./activities";

export type SiteImageData = {
  readonly src: string;
  readonly alt: string;
};

export const heroImages = {
  main: {
    src: "/images/hero/hero-raft-group.png",
    alt: "กลุ่มลูกค้าเล่นน้ำหน้าแพพักบ้านพักล่องแพ",
  },
  finalCta: {
    src: "/images/hero/hero-evening-group.png",
    alt: "กลุ่มลูกค้าเล่นแพเปียกยามเย็นบนเขื่อนศรีนครินทร์",
  },
} as const satisfies Record<string, SiteImageData>;

export const activityImages: Partial<Record<ActivityId, SiteImageData>> = {
  "water-park-ananta": {
    src: "/images/activities/water-park/kids-water-park.png",
    alt: "สวนน้ำ Water Park at Ananta Resort",
  },
  "kids-water-park": {
    src: "/images/activities/water-park/kids-water-park.png",
    alt: "สวนน้ำเด็กพร้อมเครื่องเล่นที่ Ananta Resort",
  },
  "adult-water-park": {
    src: "/images/activities/water-park/adult-water-slide.png",
    alt: "ลูกค้าเล่นสไลเดอร์ในสวนน้ำผู้ใหญ่",
  },
  "wet-raft": {
    src: "/images/activities/wet-raft/wet-raft-group.png",
    alt: "กลุ่มลูกค้าเล่นแพเปียกบนเขื่อนศรีนครินทร์",
  },
  kayak: {
    src: "/images/activities/kayak/kayak-water-park.png",
    alt: "เรือคายัคและเครื่องเล่นน้ำช่วงพระอาทิตย์ตก",
  },
  "group-dining": {
    src: "/images/activities/dining/group-dining.png",
    alt: "ลูกค้ารับประทานอาหารและสังสรรค์ร่วมกันบนแพ",
  },
};

export const galleryImages = [
  {
    src: "/images/reviews/customer-group.png",
    alt: "กลุ่มลูกค้าถ่ายภาพร่วมกันบนแพเปียก",
  },
  {
    src: "/images/reviews/customer-water-activity.png",
    alt: "ลูกค้าเล่นเครื่องเล่นเป่าลมในน้ำ",
  },
  {
    src: "/images/activities/dining/group-dining.png",
    alt: "บรรยากาศรับประทานอาหารและสังสรรค์บนแพ",
  },
  {
    src: "/images/hero/hero-raft-group.png",
    alt: "กลุ่มลูกค้าเล่นน้ำบริเวณหน้าแพพัก",
  },
  {
    src: "/images/reviews/ananta-lake-view.png",
    alt: "บรรยากาศริมเขื่อนบริเวณ Ananta Resort",
  },
  {
    src: "/images/reviews/raft-lake-view.png",
    alt: "แพพักบนผืนน้ำท่ามกลางภูเขา",
  },
] as const satisfies readonly SiteImageData[];

export const experienceImages = [
  galleryImages[3],
  galleryImages[4],
  activityImages["water-park-ananta"],
  activityImages["wet-raft"],
  activityImages["group-dining"],
  undefined,
  galleryImages[5],
] as const;
