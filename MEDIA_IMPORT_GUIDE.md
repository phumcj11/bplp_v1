# Media Import Guide — บ้านพักล่องแพ Phase 2

## แหล่งรูป Reference

Google Drive: [รีวิวลูกค้า](https://drive.google.com/drive/folders/1gKLQzbFqGbQA68b_XXol-EuGKAjjTQMF)

- JPEG ~28 รูป
- MP4 1 ไฟล์

**ห้าม** Hotlink จาก Google Drive บน Production  
**ห้าม** ใส่ Google Drive API Key ใน Source Code

## ขั้นตอน Import

1. ดาวน์โหลดไฟล์จาก Google Drive ลงเครื่อง Local
2. วางไฟล์ใหม่ใน `local-import/unsorted/` ก่อน
3. ตรวจภาพทีละไฟล์ แล้วย้ายไปโฟลเดอร์ที่เหมาะสม:

```text
local-import/
├── unsorted/       # ไฟล์ที่ยังไม่จัดหมวด
├── rafts/          # ภาพแพ (ยืนยัน A1–A4 ได้เมื่อมีข้อมูล)
├── activities/     # water-park, wet-raft, kayak, dining, ...
├── reviews/        # ภาพลูกค้า / บรรยากาศ
└── videos/         # วิดีโอ (Phase 2 ไม่ autoplay)
```

4. เพิ่มรายการใน `local-import/media-catalog.json` (id, category, alt, consentStatus)
5. รัน:

```bash
npm run media:prepare
```

คำสั่งนี้จะ seed → process → สร้าง OG → อัปเดต `MEDIA_SELECTION_REPORT.md`

## consentStatus

| ค่า | ความหมาย |
|-----|----------|
| `approved` | ใช้ Hero / Gallery ได้ |
| `needs-review` | รอตรวจสอบ ไม่แสดงใน Gallery |
| `unknown` | ไม่แสดงถ้ามีใบหน้าชัด |

## หลัง Process

- ไฟล์ optimized อยู่ที่ `public/images/processed/`
- Manifest: `public/images/processed/manifest.json`
- Metadata UI: `src/data/media.ts`

**ห้าม** อ้างอิง `local-import/` บนหน้าเว็บโดยตรง

## เปลี่ยน Hero

1. เลือกรูปที่ `consentStatus: approved` และไม่มีใบหน้าชัด
2. อัปเดต `heroMedia` / catalog
3. รัน `npm run media:process`

## รูปที่ยังต้องการ

- แพ A1, A2, A3, A4 แยกตามประเภท (ยืนยันจากภาพไม่ได้ตอนนี้)
- ล่องเรือชมวิว, คาราโอเกะ (ยังไม่มีรูปเฉพาะ)
- รีวิวข้อความจริง (เก็บใน `src/data/reviews.ts` เมื่อมี)
