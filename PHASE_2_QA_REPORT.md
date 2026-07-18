# Phase 2 QA Report — Baanpak Longpae Mobile Sale Page

Generated: 2026-07-19 (Local)

## Phase 1 Baseline

| Check | Result |
|-------|--------|
| npm run lint | Pass |
| npm run typecheck | Pass |
| npm run test | Pass (16 unit tests) |
| npm run build | Pass |
| npm run test:e2e | Pass (25 passed, 3 skipped) |

## Deliverables

| Item | Status |
|------|--------|
| Media pipeline (`scripts/process-images.mjs`) | Done |
| `local-import/` + `MEDIA_IMPORT_GUIDE.md` | Done |
| `src/data/media.ts` + consent filtering | Done |
| Processed WebP/AVIF (12 sources) | Done |
| Hero (raft-exterior, approved) | Done |
| Package Value + real images | Done |
| Trip Experience images | Done (karaoke step placeholder) |
| Raft Selector + branded raft image | Done |
| Activity Cards | Done (sightseeing/karaoke placeholder) |
| Customer Gallery + filters + Lightbox | Done |
| Reviews (no fake quotes) | Done |
| Animation polish (mobile parallax, refresh) | Done |
| OG image 1200×630 | Done |
| Tests updated | Done |
| Documentation | Done |

## Images Used (Public Gallery — approved / no clear faces)

| ID | Section |
|----|---------|
| raft-exterior | Hero, Raft card, Package, Trip, Gallery |
| ananta-lake-view | Social proof, Trip, Final CTA bg, Gallery |
| kids-water-park | Activities, Package, Trip, Gallery filter |

## Images Prepared but Hidden (consent unknown + faces)

| ID | Reason |
|----|--------|
| hero-raft-group | ใบหน้าลูกค้า — consent unknown |
| hero-evening-group | ใบหน้าลูกค้า — consent unknown |
| customer-group | ใบหน้าลูกค้า — consent unknown |
| customer-water-activity | ใบหน้าลูกค้า — consent unknown |
| wet-raft-group | ใบหน้าลูกค้า — consent unknown |
| group-dining | ใบหน้าลูกค้า — consent unknown |
| adult-water-slide | ใบหน้าลูกค้า — consent unknown |
| kayak-water-park | บุคคลในภาพ — consent unknown |
| raft-lake-view | บุคคลในภาพ — consent unknown |

## Still Needed

- รูปแพ A1, A2, A3, A4 แยกตามประเภท (ยืนยันไม่ได้จากภาพปัจจุบัน)
- รูปล่องเรือชมวิว, คาราโอเกะเฉพาะ
- JPEG ~28 รูป + MP4 จาก Google Drive (นำเข้า `local-import/unsorted/`)
- ข้อความรีวิวจริง (ถ้ามี) → `src/data/reviews.ts`
- consent approval สำหรับภาพที่มีลูกค้า

## Content Accuracy

- ไม่พบคำว่า Adventure / ล่องแก่ง / whitewater ใน UI
- ราคา 1,290 บาท/ท่าน แสดงใน Hero และ Package Value
- CTA หลัก: LINE + โทร 081-900-7895

## Mobile Breakpoints

Manual review recommended at: 360×800, 375×812, 390×844, 430×932, 768×1024, 1280×900, 1440×900

Automated: Playwright mobile-375, mobile-390, tablet-768, desktop-1280 — no horizontal overflow.

## Performance Notes

- Hero uses processed WebP (~125 KB @ 1024px)
- Gallery lazy-loads via Next/Image
- GSAP parallax disabled on mobile
- Run Lighthouse locally after `npm run build && npm start` for scores

## Local Preview

```bash
npm run dev
```

Open: **http://localhost:3000**

## Not Done (By Design — Phase 2 Constraints)

- No VPS / Deploy / DNS / SSL changes
- No Blotato / Facebook posting
- No backend production / real booking
