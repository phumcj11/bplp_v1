import Link from "next/link";
import {
  AeoAnswer,
  Breadcrumbs,
  InternalLinks,
  JsonLd,
  SourceNote,
} from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.guidePrepare);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "คู่มือ", path: "/guides/prepare-for-raft-trip" },
  { name: "เตรียมตัวก่อนไปพักแพ", path: "/guides/prepare-for-raft-trip" },
];

const confirmedItems = [
  "แจ้งจำนวนคนและวันที่ให้ทีมงานก่อนเดินทาง",
  "เตรียมชุดสำหรับเล่นน้ำและเปลี่ยนหลังเล่น Water Park",
  "ลูกค้าสามารถเตรียมอาหารมาเพิ่มได้",
  "ตรวจสอบรายการในแพ็กเกจว่ามีอาหาร 2 มื้อ ตามที่ยืนยัน",
];

export default function PrepareForRaftTripGuidePage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.guidePrepare.path,
    title: seoPages.guidePrepare.title,
    description: seoPages.guidePrepare.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/guides/prepare-for-raft-trip">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">GUIDE</p>
      <h1 className="section-title mt-2">{seoPages.guidePrepare.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        คู่มือนี้ช่วยให้กลุ่มเตรียมตัวก่อนทริปแพที่เขื่อนศรีนครินทร์
        โดยแยกข้อมูลที่ยืนยันแล้วจากข้อที่ต้องสอบถามทีมงาน
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <div className="mt-10 grid gap-6">
        <AeoAnswer
          question="ต้องเตรียมของอะไรไปพักแพ?"
          answer="กรุณาสอบถามทีมงานสำหรับรายการสิ่งของที่แนะนำตามฤดูกาลและกิจกรรม"
          details="ด้านล่างเป็นข้อมูลที่ยืนยันแล้วจากโปรแกรมและเงื่อนไขของบ้านพักล่องแพ"
        />

        <section className="rounded-2xl border border-charcoal/10 bg-white p-6">
          <h2 className="text-2xl font-black">สิ่งที่ยืนยันแล้วจากโปรแกรม</h2>
          <ul className="mt-4 grid gap-3">
            {confirmedItems.map((item) => (
              <li key={item} className="rounded-xl bg-off-white px-4 py-3 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <AeoAnswer
          question="เด็กสามารถเล่นสวนน้ำได้หรือไม่?"
          answer="กรุณาสอบถามทีมงาน"
          details="แพ็กเกจมีสวนน้ำเด็กและสวนน้ำผู้ใหญ่ ควรยืนยันเงื่อนไขความปลอดภัยกับทีมงานก่อนเดินทาง"
        />

        <section className="rounded-2xl border border-charcoal/10 bg-white p-6">
          <h2 className="text-2xl font-black">ล่องแพกาญจนบุรีเตรียมอะไรบ้างก่อนจอง?</h2>
          <p className="mt-3 text-lg font-semibold">
            เตรียมวันที่เดินทาง จำนวนคน ประเภทกลุ่ม และช่องทางติดต่อ
            แล้วส่งคำขอเช็กวันว่าง
          </p>
          <ol className="mt-4 grid gap-2 text-charcoal/80">
            <li>1. กำหนดช่วงวันที่ต้องการเข้าพัก</li>
            <li>2. นับจำนวนผู้เข้าพักทั้งหมด</li>
            <li>3. เลือกแพใกล้เคียงจากหน้าเลือกแพ</li>
            <li>4. ส่งแบบฟอร์มหรือติดต่อ LINE/โทร</li>
          </ol>
          <Link href="/contact" className="button button--primary mt-5 inline-flex">
            ไปหน้าเช็กวันว่าง
          </Link>
        </section>
      </div>

      <section className="mt-12">
        <InternalLinks
          links={[
            {
              href: "/guides/kanchanaburi-raft-trip",
              label: "คู่มือเที่ยวล่องแพกาญจนบุรี",
              description: "ภาพรวมราคา โปรแกรม และการเลือกแพ",
            },
            {
              href: "/faq",
              label: "คำถามที่พบบ่อย",
              description: "คำตอบเรื่องราคา อาหาร และการจอง",
            },
          ]}
        />
      </section>
    </MarketingLayout>
  );
}
