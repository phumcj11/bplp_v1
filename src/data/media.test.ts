import { describe, expect, it } from "vitest";
import {
  filterGalleryMedia,
  getMediaById,
  heroMedia,
  isPublicGalleryMedia,
  mediaItems,
} from "./media";

describe("media consent filtering", () => {
  it("hero ใช้รูปที่ approved และไม่มีใบหน้าชัด", () => {
    expect(heroMedia.consentStatus).toBe("approved");
    expect(heroMedia.hasIdentifiablePeople).toBe(false);
    expect(heroMedia.id).toBe("raft-exterior");
  });

  it("ไม่แสดงภาพที่มีใบหน้าและ consent unknown ใน public gallery", () => {
    const hidden = mediaItems.filter(
      (item) => item.hasIdentifiablePeople && item.consentStatus === "unknown",
    );
    hidden.forEach((item) => {
      expect(isPublicGalleryMedia(item)).toBe(false);
    });
  });

  it("แสดงภาพ approved ใน gallery", () => {
    const approved = mediaItems.filter((item) => item.consentStatus === "approved");
    approved.forEach((item) => {
      expect(isPublicGalleryMedia(item)).toBe(true);
      expect(filterGalleryMedia("all").some((entry) => entry.id === item.id)).toBe(true);
    });
  });

  it("กรอง gallery ตามหมวด water-park", () => {
    const filtered = filterGalleryMedia("water-park");
    expect(filtered.every((item) => isPublicGalleryMedia(item))).toBe(true);
    expect(filtered.some((item) => item.id === "kids-water-park")).toBe(true);
    expect(filtered.some((item) => item.id === "customer-water-activity")).toBe(false);
  });
});

describe("media metadata", () => {
  it("ทุกรูปมี id src alt category และ consentStatus", () => {
    mediaItems.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.src.startsWith("/images/")).toBe(true);
      expect(item.alt.length).toBeGreaterThan(5);
      expect(["approved", "needs-review", "unknown"]).toContain(item.consentStatus);
      expect(getMediaById(item.id)).toEqual(item);
    });
  });
});
