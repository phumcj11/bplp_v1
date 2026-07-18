# เว็บไซต์บ้านพักล่องแพ

Mobile-first Interactive Sale Page สำหรับ **บ้านพักล่องแพ / BAAN PAK LONG PAE** ณ เขื่อนศรีนครินทร์ จังหวัดกาญจนบุรี พัฒนาด้วย Next.js, TypeScript และ App Router

Phase 2 เพิ่ม Media Pipeline, รูปจริง 12 ไฟล์ (WebP/AVIF optimized), Gallery filter, consent system และ OG image — ยังทำงาน Local เท่านั้น

## Architecture

- Server Components เป็นค่าเริ่มต้นที่ `src/app/page.tsx`
- Client Components แยกเฉพาะเมนู ตัวเลือกแพ Slider, Dialog, FAQ, Form และ Animation
- ข้อมูลธุรกิจอยู่ใน `src/data/` ไม่ผูกกับ UI
- Validation ใช้ Zod schema เดียวกันทั้ง Client และ Local API
- `AvailabilitySubmissionAdapter` เป็นจุดเปลี่ยนไปเชื่อม Backend ในอนาคต
- GSAP/ScrollTrigger ใช้กับ Scroll reveal และ Parallax; Framer Motion ใช้ UI state เท่านั้น
- รองรับ Reduced Motion, Keyboard, Safe Area และ Mobile swipe

## โครงสร้างไฟล์สำคัญ

```text
src/
├── app/                 # App Router, Local API, SEO routes
├── components/          # Static และ interactive sections
├── data/                # Business data + media manifest (media.ts)
├── lib/                 # Validation และ submission adapter
└── test/                # Test setup
e2e/                     # Playwright responsive smoke tests
public/images/           # ต้นฉบับ + processed (WebP/AVIF) + OG
local-import/            # staging ก่อน process (gitignored ยกเว้น catalog)
scripts/                 # process-images, media-report, generate-og
```

## ข้อมูลธุรกิจหลัก

- โทรศัพท์: 081-900-7895
- LINE: @baanpaklongpae
- แพ็กเกจหลัก: ทริป 2 วัน 1 คืน
- ราคา: เริ่มต้น 1,290 บาท/ท่าน
- รองรับกลุ่มประมาณ 8–60 คน
- แพทุกหลังเป็นแพพักส่วนตัว ห้องพักปรับอากาศ และลากออก

## โครงสร้างข้อมูล

ข้อมูลที่ใช้ซ้ำใน UI แยกไว้ใน `src/data/` และกำหนด TypeScript type/interface ไว้อย่างชัดเจน

- `site.ts` — ชื่อธุรกิจ สถานที่ ข้อมูลทริป กลุ่มเป้าหมาย และข้อความ SEO
- `contact.ts` — โทรศัพท์ LINE Facebook เว็บไซต์ และสถานที่
- `rafts.ts` — ขนาดแพ จำนวนผู้เข้าพัก ห้องนอน ห้องน้ำ และคุณสมบัติแพ
- `package.ts` — ราคา ระยะเวลา และรายการที่รวมในแพ็กเกจ
- `activities.ts` — กิจกรรมที่ได้รับการยืนยัน
- `itinerary.ts` — โปรแกรมทริปตามวันและช่วงเวลา
- `faqs.ts` — คำถามที่กำหนด พร้อมคำตอบเฉพาะข้อมูลที่ยืนยันแล้ว
- `reviews.ts` — Placeholder “รอข้อมูลรีวิวจริง” เท่านั้น

หากต้องแก้ข้อมูลธุรกิจ ให้แก้ที่ไฟล์ข้อมูลต้นทางเหล่านี้แทนการ Hardcode ซ้ำใน Component

- `reviews.ts` — Placeholder / รีวิวจริงเมื่อมีข้อมูล
- `media.ts` — รายการรูป id, category, consentStatus, alt, src

## Media Pipeline (Phase 2)

1. นำรูปจาก Google Drive ลง `local-import/` (อ่าน `MEDIA_IMPORT_GUIDE.md`)
2. อัปเดต `local-import/media-catalog.json`
3. รัน:

```bash
npm run media:prepare
```

คำสั่งย่อย: `media:seed` | `media:process` | `media:og` | `media:report`

- ต้นฉบับอยู่ `local-import/` (ไม่แก้ไฟล์ต้นฉบับ)
- Output optimized: `public/images/processed/`
- Manifest: `public/images/processed/manifest.json`
- รายงานคัดเลือก: `MEDIA_SELECTION_REPORT.md`

### เปลี่ยน Hero

แก้ `heroMedia` ใน `src/data/media.ts` — ใช้ได้เฉพาะ `consentStatus: approved` และไม่มีใบหน้าชัด

### เพิ่ม Gallery / ตั้ง consentStatus

แก้ `media.ts` และ catalog แล้วรัน `npm run media:process`

### ห้ามบน Production (Phase 2)

- Hotlink Google Drive
- Deploy / แก้ DNS / SSL โดยไม่มีคำสั่ง
- ใส่ API Key ใน source code

## การเตรียมรูปจริง

มีรูป PNG ต้นฉบับ 12 ไฟล์ + processed WebP/AVIF อ่านรายละเอียดที่ `IMAGE_REQUIREMENTS.md` และ `MEDIA_IMPORT_GUIDE.md`

## Environment Variable

คัดลอก `.env.example` เป็น `.env.local` แล้วกำหนด URL เฉพาะสภาพแวดล้อมเมื่อต้องใช้งาน:

```env
NEXT_PUBLIC_SITE_URL=
```

ไฟล์ตัวอย่างไม่มี Domain, API key หรือ Secret จริง

## เริ่มใช้งานบนเครื่อง Local

```bash
npm install
npm run dev
```

จากนั้นเปิด `http://localhost:3000`

คำสั่งตรวจสอบที่มีอยู่ในโครงการ:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

Playwright ครั้งแรกอาจต้องติดตั้ง Chromium บนเครื่องด้วย `npx playwright install chromium`

## เปลี่ยนข้อมูลและรูป

1. แก้ข้อมูลธุรกิจจากไฟล์ใน `src/data/`
2. Import รูปใหม่ตาม `MEDIA_IMPORT_GUIDE.md` แล้วรัน `npm run media:prepare`
3. ปรับ `src/data/media.ts` (consent, category, alt)
4. รันคำสั่งตรวจสอบทั้งหมดก่อนดำเนิน Phase ถัดไป

## ข้อจำกัดของข้อมูล

- ไม่เพิ่มราคา เงื่อนไขการจอง ราคาเด็ก หรือนโยบายยกเลิกที่ยังไม่ได้รับการยืนยัน
- FAQ ที่ไม่มีคำตอบยืนยันใช้ข้อความ “กรุณาสอบถามทีมงาน”
- ไม่มีชื่อ คะแนน หรือข้อความรีวิวสมมติ
- Facebook ยังไม่มี URL ที่ยืนยัน จึงเก็บเฉพาะชื่อเพจและไม่สร้าง URL ขึ้นเอง
- ห้ามนำรูปจากเว็บไซต์อื่น รูป Stock หรือรูป AI ที่ทำให้สถานที่และแพคลาดเคลื่อนจากของจริงมาใช้
