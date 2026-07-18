# เว็บไซต์บ้านพักล่องแพ

Mobile-first Interactive Sale Page สำหรับ **บ้านพักล่องแพ / BAAN PAK LONG PAE** ณ เขื่อนศรีนครินทร์ จังหวัดกาญจนบุรี พัฒนาด้วย Next.js, TypeScript และ App Router

Phase 1 ทำงานบนเครื่อง Local เท่านั้น แบบฟอร์มส่งเข้า Mock API ในโปรเจกต์ ไม่มีการเชื่อมต่อบริการภายนอก ระบบจองจริง ฐานข้อมูล Production หรือการ Deploy

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
├── data/                # Business data models
├── lib/                 # Validation และ submission adapter
└── test/                # Test setup
e2e/                     # Playwright responsive smoke tests
public/images/           # พื้นที่รูปจริง แยกตามประเภท
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

## การเตรียมรูปจริง

โครงสร้างรูปอยู่ที่ `public/images/` ขณะนี้มีเฉพาะไฟล์ `.gitkeep` และ Placeholder ที่ระบุประเภทรูปในหน้าเว็บ โดยไม่มีการดาวน์โหลด สร้าง หรือใช้รูป Stock แทนรูปจริง

อ่านชื่อไฟล์ ขนาด สัดส่วน และขั้นตอนเปลี่ยนรูปได้ที่ `IMAGE_REQUIREMENTS.md`

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
2. เตรียมรูปตาม `IMAGE_REQUIREMENTS.md` และวางใน `public/images/`
3. เปลี่ยน `ImagePlaceholder` ใน Section ที่เกี่ยวข้องเป็น `next/image`
4. ระบุ `width`, `height`, `sizes`, Alt ภาษาไทย และใช้ `priority` เฉพาะ Hero
5. รันคำสั่งตรวจสอบทั้งหมดก่อนดำเนิน Phase ถัดไป

## ข้อจำกัดของข้อมูล

- ไม่เพิ่มราคา เงื่อนไขการจอง ราคาเด็ก หรือนโยบายยกเลิกที่ยังไม่ได้รับการยืนยัน
- FAQ ที่ไม่มีคำตอบยืนยันใช้ข้อความ “กรุณาสอบถามทีมงาน”
- ไม่มีชื่อ คะแนน หรือข้อความรีวิวสมมติ
- Facebook ยังไม่มี URL ที่ยืนยัน จึงเก็บเฉพาะชื่อเพจและไม่สร้าง URL ขึ้นเอง
- ห้ามนำรูปจากเว็บไซต์อื่น รูป Stock หรือรูป AI ที่ทำให้สถานที่และแพคลาดเคลื่อนจากของจริงมาใช้
