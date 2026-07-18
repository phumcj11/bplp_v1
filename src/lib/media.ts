import type { MediaItem } from "@/data/media";

export function resolveMediaSrc(item: MediaItem, preferWidth = 1280): string {
  const dir = item.processedDir;
  const width =
    preferWidth >= 1200 ? 1280 : preferWidth >= 800 ? 828 : 600;
  return `/images/processed/${dir}/${item.id}-${width}.webp`;
}

export function resolveHeroSrc(item: MediaItem, viewport: "mobile" | "tablet" | "desktop"): string {
  const width = viewport === "mobile" ? 828 : viewport === "tablet" ? 1280 : 1920;
  return `/images/processed/${item.processedDir}/${item.id}-${width}.webp`;
}

export {
  filterGalleryMedia,
  getActivityMedia,
  getMediaById,
  getRaftMedia,
  getSocialProofMedia,
  isPublicGalleryMedia,
} from "@/data/media";
