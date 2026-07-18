import type { ActivityId } from "./activities";

export type ConsentStatus = "approved" | "needs-review" | "unknown";

export type MediaCategory =
  | "hero"
  | "rafts"
  | "water-park"
  | "wet-raft"
  | "kayak"
  | "sightseeing"
  | "karaoke"
  | "dining"
  | "customer-groups"
  | "landscape"
  | "evening"
  | "reviews";

export type GalleryFilterId =
  | "all"
  | "rafts"
  | "water-park"
  | "wet-raft"
  | "dining"
  | "customer-groups"
  | "landscape";

export type MediaOrientation = "landscape" | "portrait" | "square";

export interface MediaItem {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly category: MediaCategory;
  readonly orientation: MediaOrientation;
  readonly width: number;
  readonly height: number;
  readonly featured: boolean;
  readonly priority: boolean;
  readonly caption?: string;
  readonly source: string;
  readonly consentStatus: ConsentStatus;
  readonly hasIdentifiablePeople: boolean;
  readonly processedDir: string;
  readonly fallbackSrc?: string;
}

export const galleryFilters: readonly {
  readonly id: GalleryFilterId;
  readonly label: string;
}[] = [
  { id: "all", label: "ทั้งหมด" },
  { id: "rafts", label: "บ้านพักแพ" },
  { id: "water-park", label: "Water Park" },
  { id: "wet-raft", label: "แพเปียก" },
  { id: "dining", label: "อาหาร" },
  { id: "customer-groups", label: "ลูกค้ากลุ่ม" },
  { id: "landscape", label: "วิวเขื่อน" },
];

const categoryToFilter: Partial<Record<MediaCategory, GalleryFilterId>> = {
  rafts: "rafts",
  "water-park": "water-park",
  "wet-raft": "wet-raft",
  dining: "dining",
  karaoke: "dining",
  "customer-groups": "customer-groups",
  landscape: "landscape",
  evening: "landscape",
  sightseeing: "landscape",
};

export const mediaItems = [
  {
    id: "raft-exterior",
    src: "/images/processed/hero/raft-exterior-1024.webp",
    fallbackSrc: "/images/rafts/raft-exterior.png",
    alt: "แพพักสองชั้นบ้านพักล่องแพบนเขื่อนศรีนครินทร์",
    category: "rafts",
    orientation: "landscape",
    width: 1280,
    height: 960,
    featured: true,
    priority: true,
    caption: "แพพักส่วนตัวบนผืนน้ำเขื่อนศรีนครินทร์",
    source: "public/images/rafts/raft-exterior.png",
    consentStatus: "approved",
    hasIdentifiablePeople: false,
    processedDir: "hero",
  },
  {
    id: "ananta-lake-view",
    src: "/images/processed/landscape/ananta-lake-view-1024.webp",
    fallbackSrc: "/images/reviews/ananta-lake-view.png",
    alt: "วิวริมเขื่อนบริเวณ Ananta Resort",
    category: "landscape",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: true,
    priority: false,
    caption: "บรรยากาศริมเขื่อนศรีนครินทร์",
    source: "public/images/reviews/ananta-lake-view.png",
    consentStatus: "approved",
    hasIdentifiablePeople: false,
    processedDir: "landscape",
  },
  {
    id: "kids-water-park",
    src: "/images/processed/activities/water-park/kids-water-park-1024.webp",
    fallbackSrc: "/images/activities/water-park/kids-water-park.png",
    alt: "สวนน้ำเด็กพร้อมเครื่องเล่นที่ Ananta Resort",
    category: "water-park",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    caption: "Water Park @ Ananta Resort",
    source: "public/images/activities/water-park/kids-water-park.png",
    consentStatus: "approved",
    hasIdentifiablePeople: false,
    processedDir: "activities/water-park",
  },
  {
    id: "adult-water-slide",
    src: "/images/processed/activities/water-park/adult-water-slide-768.webp",
    fallbackSrc: "/images/activities/water-park/adult-water-slide.png",
    alt: "เครื่องเล่นสวนน้ำผู้ใหญ่ที่ Ananta Resort",
    category: "water-park",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/activities/water-park/adult-water-slide.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "activities/water-park",
  },
  {
    id: "wet-raft-group",
    src: "/images/processed/activities/wet-raft/wet-raft-group-1024.webp",
    fallbackSrc: "/images/activities/wet-raft/wet-raft-group.png",
    alt: "กลุ่มลูกค้าเล่นแพเปียกบนเขื่อนศรีนครินทร์",
    category: "wet-raft",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/activities/wet-raft/wet-raft-group.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "activities/wet-raft",
  },
  {
    id: "kayak-water-park",
    src: "/images/processed/activities/kayak/kayak-water-park-1024.webp",
    fallbackSrc: "/images/activities/kayak/kayak-water-park.png",
    alt: "เรือคายัคและเครื่องเล่นน้ำช่วงเย็นที่ Ananta Resort",
    category: "kayak",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/activities/kayak/kayak-water-park.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "activities/kayak",
  },
  {
    id: "group-dining",
    src: "/images/processed/activities/dining/group-dining-768.webp",
    fallbackSrc: "/images/activities/dining/group-dining.png",
    alt: "ลูกค้ารับประทานอาหารและสังสรรค์บนแพ",
    category: "dining",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/activities/dining/group-dining.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "activities/dining",
  },
  {
    id: "hero-evening-group",
    src: "/images/processed/landscape/hero-evening-group-1024.webp",
    fallbackSrc: "/images/hero/hero-evening-group.png",
    alt: "บรรยากาศยามเย็นบนแพเปียกที่เขื่อนศรีนครินทร์",
    category: "evening",
    orientation: "landscape",
    width: 1280,
    height: 960,
    featured: false,
    priority: false,
    source: "public/images/hero/hero-evening-group.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "landscape",
  },
  {
    id: "raft-lake-view",
    src: "/images/processed/landscape/raft-lake-view-1024.webp",
    fallbackSrc: "/images/reviews/raft-lake-view.png",
    alt: "แพพักบนผืนน้ำท่ามกลางภูเขาช่วงเย็น",
    category: "landscape",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/reviews/raft-lake-view.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "landscape",
  },
  {
    id: "customer-group",
    src: "/images/processed/reviews/customer-group-1024.webp",
    fallbackSrc: "/images/reviews/customer-group.png",
    alt: "กลุ่มลูกค้าถ่ายภาพร่วมกันบนแพเปียก",
    category: "customer-groups",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/reviews/customer-group.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "reviews",
  },
  {
    id: "customer-water-activity",
    src: "/images/processed/reviews/customer-water-activity-810.webp",
    fallbackSrc: "/images/reviews/customer-water-activity.png",
    alt: "ลูกค้าเล่นเครื่องเล่นเป่าลมในน้ำ",
    category: "water-park",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/reviews/customer-water-activity.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "reviews",
  },
  {
    id: "hero-raft-group",
    src: "/images/processed/reviews/hero-raft-group-960.webp",
    fallbackSrc: "/images/hero/hero-raft-group.png",
    alt: "กลุ่มลูกค้าเล่นน้ำหน้าแพพักบ้านพักล่องแพ",
    category: "customer-groups",
    orientation: "landscape",
    width: 1200,
    height: 900,
    featured: false,
    priority: false,
    source: "public/images/hero/hero-raft-group.png",
    consentStatus: "unknown",
    hasIdentifiablePeople: true,
    processedDir: "reviews",
  },
] as const satisfies readonly MediaItem[];

export const heroMedia = mediaItems.find((item) => item.id === "raft-exterior")!;

export const finalCtaMedia = mediaItems.find(
  (item) => item.id === "ananta-lake-view",
)!;

const activityMediaMap: Partial<Record<ActivityId, MediaItem>> = {
  "water-park-ananta": mediaItems.find((item) => item.id === "kids-water-park"),
  "kids-water-park": mediaItems.find((item) => item.id === "kids-water-park"),
  "adult-water-park": mediaItems.find((item) => item.id === "adult-water-slide"),
  "wet-raft": mediaItems.find((item) => item.id === "wet-raft-group"),
  kayak: mediaItems.find((item) => item.id === "kayak-water-park"),
  sightseeing: mediaItems.find((item) => item.id === "ananta-lake-view"),
  karaoke: mediaItems.find((item) => item.id === "group-dining"),
  "group-dining": mediaItems.find((item) => item.id === "group-dining"),
};

export const experienceMediaIds = [
  "raft-exterior",
  "ananta-lake-view",
  "kids-water-park",
  "wet-raft-group",
  "group-dining",
  null,
  "raft-lake-view",
] as const;

export const packageValueMediaIds = [
  "raft-exterior",
  "kids-water-park",
  "wet-raft-group",
  "group-dining",
] as const;

export function getMediaById(id: string): MediaItem | undefined {
  return mediaItems.find((item) => item.id === id);
}

export function getActivityMedia(activityId: ActivityId): MediaItem | undefined {
  return activityMediaMap[activityId];
}

export function getRaftMedia(): MediaItem {
  return heroMedia;
}

export function isPublicGalleryMedia(item: MediaItem): boolean {
  if (item.consentStatus === "approved") {
    return true;
  }

  if (item.consentStatus === "needs-review") {
    return false;
  }

  return !item.hasIdentifiablePeople;
}

export function filterGalleryMedia(
  filter: GalleryFilterId,
): readonly MediaItem[] {
  const publicItems = mediaItems.filter(isPublicGalleryMedia);

  if (filter === "all") {
    return publicItems;
  }

  return publicItems.filter(
    (item) => categoryToFilter[item.category] === filter,
  );
}

export function getSocialProofMedia(): readonly MediaItem[] {
  return mediaItems.filter(
    (item) =>
      isPublicGalleryMedia(item) &&
      (item.featured || item.category === "landscape"),
  );
}

export type SiteImageData = {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly priority?: boolean;
};

export function toSiteImageData(item: MediaItem, priority = false): SiteImageData {
  return {
    src: item.src,
    alt: item.alt,
    width: item.width,
    height: item.height,
    priority: priority || item.priority,
  };
}

export const heroImages = {
  main: toSiteImageData(heroMedia, true),
  finalCta: toSiteImageData(finalCtaMedia),
} as const;

export const activityImages = Object.fromEntries(
  Object.entries(activityMediaMap).flatMap(([id, item]) =>
    item ? [[id, toSiteImageData(item)]] : [],
  ),
) as Partial<Record<ActivityId, SiteImageData>>;

export const galleryImages = filterGalleryMedia("all").map((item) =>
  toSiteImageData(item),
);

export const experienceImages = experienceMediaIds.map((id) =>
  id ? toSiteImageData(getMediaById(id)!) : undefined,
);
