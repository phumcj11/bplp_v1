# Local Import Staging

โฟลเดอร์นี้ใช้รับไฟล์ต้นฉบับจาก Google Drive **ก่อน** ประมวลผลเท่านั้น

- ห้ามอ้างอิงไฟล์ใน `local-import/` โดยตรงบนหน้าเว็บ
- หลังคัดเลือกแล้ว ให้รัน `npm run media:process` เพื่อสร้างไฟล์ใน `public/images/processed/`
- อ่านขั้นตอนเต็มได้ที่ `MEDIA_IMPORT_GUIDE.md`

โครงสร้าง:

```text
local-import/
├── unsorted/      # ไฟล์ใหม่ที่ยังไม่จัดหมวด
├── rafts/         # ภาพแพ (ยืนยันประเภทได้เมื่อมีข้อมูล)
├── activities/    # กิจกรรม
├── reviews/       # ภาพลูกค้า / บรรยากาศ
├── videos/        # วิดีโอ (Phase 2 ยังไม่ autoplay)
└── media-catalog.json
```
