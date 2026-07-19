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
import { rafts } from "@/data/rafts";
import { startingPriceDisplay } from "@/data/package";
import { siteData } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.rafts);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "เลือกแพ", path: "/rafts" },
];

export default function RaftsPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.rafts.path,
    title: seoPages.rafts.title,
    description: seoPages.rafts.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/rafts">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">CHOOSE YOUR RAFT</p>
      <h1 className="section-title mt-2">{seoPages.rafts.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        บ้านพักล่องแพมีแพเหมาส่วนตัวหลายขนาด ปรับอากาศ ลากออก ที่เขื่อนศรีนครินทร์
        เลือกตามจำนวนคนในกลุ่ม {siteData.trip.minimumGroupSize}–
        {siteData.trip.maximumGroupSize} คน
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <AeoAnswer
          question="กลุ่ม 10 คนควรเลือกแพหลังไหน?"
          answer="กลุ่ม 8–14 คนเหมาะกับแพ A3"
          details="หากจำนวนคนอยู่ระหว่างช่วงหรือใกล้ขอบเขต กรุณาสอบถามทีมงานเพื่อเทียบตัวเลือกใกล้เคียงก่อนจอง"
        />
        <AeoAnswer
          question="กลุ่ม 20 คนควรเลือกแพหลังไหน?"
          answer="กลุ่ม 16–25 คนเหมาะกับแพ A4"
          details="แพ A4 มี 4 ห้องนอน 2 ห้องน้ำ เหมาะกับกลุ่มกลางถึงใหญ่"
        />
        <AeoAnswer
          question="กลุ่ม 40 คนควรเลือกแพหลังไหน?"
          answer="กลุ่ม 32–45 คนเหมาะกับแพ A2 และ 40–60 คนเหมาะกับแพ A1"
          details="สำหรับกลุ่มใหญ่ แนะนำให้เช็กวันว่างล่วงหน้าและยืนยันรายละเอียดกับทีมงาน"
        />
      </div>

      <section className="mt-12 overflow-x-auto">
        <h2 className="text-3xl font-black">ตารางเปรียบเทียบแพ</h2>
        <table className="mt-6 w-full min-w-[720px] border-collapse overflow-hidden rounded-2xl border-2 border-charcoal bg-white">
          <thead className="bg-charcoal text-left text-white">
            <tr>
              <th className="p-4">แพ</th>
              <th className="p-4">จำนวนคน</th>
              <th className="p-4">ห้องนอน</th>
              <th className="p-4">ห้องน้ำ</th>
              <th className="p-4">ลักษณะ</th>
            </tr>
          </thead>
          <tbody>
            {rafts.map((raft) => (
              <tr key={raft.id} className="border-t border-charcoal/10">
                <td className="p-4 font-black">แพ {raft.id}</td>
                <td className="p-4">
                  {raft.minimumGuests}–{raft.maximumGuests} คน
                </td>
                <td className="p-4">{raft.bedrooms} ห้องนอน</td>
                <td className="p-4">{raft.bathrooms} ห้องน้ำ</td>
                <td className="p-4">แพแอร์ ลากออก เหมาทั้งหลัง</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black">วิธีเลือกแพตามจำนวนคน</h2>
        <ol className="mt-4 grid gap-3 text-lg text-charcoal/80">
          <li>1. นับจำนวนผู้เข้าพักทั้งหมดในกลุ่ม</li>
          <li>2. ดูช่วงคนที่ใกล้เคียงในตารางเปรียบเทียบ</li>
          <li>3. หากจำนวนอยู่ระหว่างช่วง ให้สอบถามทีมงานก่อนจอง</li>
          <li>4. ส่งคำขอเช็กวันว่างพร้อมวันที่และจำนวนคน</li>
        </ol>
        <Link href="/contact" className="button button--primary mt-6 inline-flex">
          เช็กวันว่าง
        </Link>
      </section>

      <section className="mt-12">
        <InternalLinks
          links={[
            {
              href: "/packages",
              label: "ราคาและแพ็กเกจ",
              description: `${startingPriceDisplay} และสิ่งที่รวม`,
            },
            {
              href: "/guides/kanchanaburi-raft-trip",
              label: "คู่มือเที่ยวล่องแพ",
              description: "สรุปข้อมูลสำหรับผู้วางแผนทริปครั้งแรก",
            },
          ]}
        />
      </section>
    </MarketingLayout>
  );
}
