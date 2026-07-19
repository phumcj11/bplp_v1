import Link from "next/link";
import {
  AeoAnswer,
  Breadcrumbs,
  InternalLinks,
  JsonLd,
  SourceNote,
} from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { startingPriceCondition, startingPriceDisplay } from "@/data/package";
import { rafts } from "@/data/rafts";
import { seoPages } from "@/data/seo-pages";
import { siteData } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.guideTrip);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "คู่มือ", path: "/guides/kanchanaburi-raft-trip" },
  { name: "เที่ยวล่องแพกาญจนบุรี", path: "/guides/kanchanaburi-raft-trip" },
];

export default function KanchanaburiRaftTripGuidePage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.guideTrip.path,
    title: seoPages.guideTrip.title,
    description: seoPages.guideTrip.description,
    breadcrumbs,
    includeOffer: true,
  });

  return (
    <MarketingLayout currentPath="/guides/kanchanaburi-raft-trip">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">GUIDE</p>
      <h1 className="section-title mt-2">{seoPages.guideTrip.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        คู่มือนี้สรุปข้อมูลจากบ้านพักล่องแพ สำหรับผู้ที่วางแผนทริปแพเหมาส่วนตัว
        ที่เขื่อนศรีนครินทร์ จังหวัดกาญจนบุรี โดยเน้นข้อมูลที่ยืนยันแล้ว
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <section className="prose-section mt-10 grid gap-6">
        <AeoAnswer
          question="ล่องแพกาญจนบุรีคืออะไรสำหรับกลุ่ม 8–60 คน?"
          answer={`บ้านพักล่องแพจัดทริปแพเหมาส่วนตัว 2 วัน 1 คืน ที่เขื่อนศรีนครินทร์ รองรับประมาณ ${siteData.trip.minimumGroupSize}–${siteData.trip.maximumGroupSize} คน ${startingPriceDisplay}`}
          details={`${startingPriceCondition} เหมาะกับกลุ่มเพื่อน ครอบครัวใหญ่ ทริปบริษัท และกรุ๊ปท่องเที่ยวที่ต้องการพื้นที่ส่วนตัวบนแพ`}
        />

        <article className="rounded-2xl border border-charcoal/10 bg-white p-6">
          <h2 className="text-2xl font-black">เที่ยวเขื่อนศรีนครินทร์ 2 วัน 1 คืน ได้อะไร?</h2>
          <p className="mt-3 text-lg font-semibold">
            ได้แพพักส่วนตัว กิจกรรมสวนน้ำและแพเปียก ล่องเรือชมวิว คายัค คาราโอเกะ
            และอาหาร 2 มื้อ ตามรายการในแพ็กเกจ
          </p>
          <p className="mt-3 text-charcoal/75">
            รายละเอียดเวลาออกเดินทางและรอบกิจกรรมบางรายการอาจต้องยืนยันกับทีมงานก่อนวันเดินทาง
          </p>
          <Link href="/itinerary" className="mt-4 inline-block font-bold text-orange underline">
            ดูโปรแกรมเต็ม
          </Link>
        </article>

        <article className="rounded-2xl border border-charcoal/10 bg-white p-6">
          <h2 className="text-2xl font-black">วิธีเลือกแพตามจำนวนคน</h2>
          <p className="mt-3 text-lg font-semibold">
            ใช้ช่วงจำนวนคนของแต่ละแพเป็นจุดเริ่มต้น แล้วสอบถามทีมงานหากอยู่ระหว่างช่วง
          </p>
          <ul className="mt-4 grid gap-2">
            {rafts.map((raft) => (
              <li key={raft.id} className="rounded-xl bg-off-white px-4 py-3">
                แพ {raft.id}: {raft.minimumGuests}–{raft.maximumGuests} คน •{" "}
                {raft.bedrooms} ห้องนอน • {raft.bathrooms} ห้องน้ำ
              </li>
            ))}
          </ul>
          <Link href="/rafts" className="mt-4 inline-block font-bold text-orange underline">
            ดูตารางเปรียบเทียบแพ
          </Link>
        </article>

        <article className="rounded-2xl border border-charcoal/10 bg-white p-6">
          <h2 className="text-2xl font-black">ล่องแพกาญจนบุรีเดือนไหนดี?</h2>
          <p className="mt-3 text-lg font-semibold text-charcoal">
            กรุณาสอบถามทีมงาน
          </p>
          <p className="mt-3 text-charcoal/75">
            ช่วงเวลาที่เหมาะอาจเปลี่ยนตามสภาพอากาศ ความพร้อมของแพ และจำนวนคนในกลุ่ม
            แนะนำให้เช็กวันว่างล่วงหน้า
          </p>
        </article>

        <article className="rounded-2xl border border-charcoal/10 bg-white p-6">
          <h2 className="text-2xl font-black">แพพักกาญจนบุรีเหมาะกับเด็กไหม?</h2>
          <p className="mt-3 text-lg font-semibold text-charcoal">
            กรุณาสอบถามทีมงาน
          </p>
          <p className="mt-3 text-charcoal/75">
            แพ็กเกจมีสวนน้ำและกิจกรรมทางน้ำ ควรยืนยันเงื่อนไขความปลอดภัยและข้อจำกัดอายุกับทีมงานก่อนจอง
          </p>
        </article>
      </section>

      <section className="mt-12">
        <InternalLinks
          links={[
            {
              href: "/guides/prepare-for-raft-trip",
              label: "เตรียมตัวก่อนไปพักแพ",
              description: "สิ่งที่ควรเตรียมและข้อควรรู้ก่อนเดินทาง",
            },
            {
              href: "/contact",
              label: "เช็กวันว่าง",
              description: "ส่งคำขอหรือติดต่อทีมงาน",
            },
          ]}
        />
      </section>
    </MarketingLayout>
  );
}
