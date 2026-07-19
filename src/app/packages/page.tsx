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
import { contactData } from "@/data/contact";
import { mainPackage, startingPriceCondition, startingPriceDisplay } from "@/data/package";
import { siteData } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.packages);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "แพ็กเกจ", path: "/packages" },
];

export default function PackagesPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.packages.path,
    title: seoPages.packages.title,
    description: seoPages.packages.description,
    breadcrumbs,
    includeOffer: true,
  });

  return (
    <MarketingLayout currentPath="/packages">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">PACKAGE & PRICING</p>
      <h1 className="section-title mt-2">{seoPages.packages.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        แพ็กเกจหลักของบ้านพักล่องแพคือทริป {mainPackage.duration.days} วัน{" "}
        {mainPackage.duration.nights} คืน แบบแพเหมาส่วนตัวที่เขื่อนศรีนครินทร์
        จังหวัดกาญจนบุรี รองรับกลุ่มประมาณ {siteData.trip.minimumGroupSize}–
        {siteData.trip.maximumGroupSize} คน {startingPriceDisplay} {startingPriceCondition}
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <AeoAnswer
          question="ล่องแพกาญจนบุรีราคาเท่าไร?"
          answer={startingPriceDisplay}
          details={`${startingPriceCondition} กรุณาเช็กวันว่างกับทีมงานก่อนจอง`}
        />
        <AeoAnswer
          question="แพ็กเกจมีอาหารกี่มื้อ?"
          answer="แพ็กเกจรวมอาหาร 2 มื้อ ได้แก่ อาหารเย็น และอาหารเช้า"
          details="ลูกค้าสามารถเตรียมอาหารมาเพิ่มได้ หากต้องการรายละเอียดเมนูหรือข้อจำกัดด้านอาหาร กรุณาสอบถามทีมงาน"
        />
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-black">สิ่งที่รวมในราคา {mainPackage.priceLabel}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {mainPackage.inclusions.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-charcoal/10 bg-white px-4 py-3 font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-[1.75rem] border-2 border-charcoal bg-orange p-6 text-white md:p-8">
        <h2 className="text-3xl font-black">พร้อมเช็กวันว่าง?</h2>
        <p className="mt-3 max-w-2xl text-lg">
          แจ้งวันที่และจำนวนคน ทีมงานจะช่วยยืนยันแพและราคาที่เหมาะกับกลุ่มของคุณ
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="button button--light">
            ส่งคำขอเช็กวันว่าง
          </Link>
          <a
            href={contactData.line.href}
            target="_blank"
            rel="noreferrer"
            className="button bg-forest text-white"
          >
            ทัก LINE
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black">หน้าที่เกี่ยวข้อง</h2>
        <div className="mt-6">
          <InternalLinks
            links={[
              {
                href: "/rafts",
                label: "เลือกแพตามจำนวนคน",
                description: "เปรียบเทียบแพ A3 A4 A2 A1 สำหรับกลุ่ม 8–60 คน",
              },
              {
                href: "/itinerary",
                label: "โปรแกรม 2 วัน 1 คืน",
                description: "ดูไทม์ไลน์กิจกรรมตั้งแต่วันแรกถึงเช้าวันที่สอง",
              },
              {
                href: "/activities",
                label: "กิจกรรมที่รวม",
                description: "สวนน้ำ แพเปียก คายัค ล่องเรือชมวิว และคาราโอเกะ",
              },
              {
                href: "/faq",
                label: "คำถามที่พบบ่อย",
                description: "คำตอบเรื่องราคา แพ อาหาร และการจอง",
              },
            ]}
          />
        </div>
      </section>
    </MarketingLayout>
  );
}
