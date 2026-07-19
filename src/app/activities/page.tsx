import Link from "next/link";
import {
  AeoAnswer,
  Breadcrumbs,
  JsonLd,
  SourceNote,
} from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { activities } from "@/data/activities";
import { mainPackage } from "@/data/package";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.activities);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "กิจกรรม", path: "/activities" },
];

export default function ActivitiesPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.activities.path,
    title: seoPages.activities.title,
    description: seoPages.activities.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/activities">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">ACTIVITIES</p>
      <h1 className="section-title mt-2">{seoPages.activities.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        โปรแกรม 2 วัน 1 คืนของบ้านพักล่องแพรวมกิจกรรมบนเขื่อนศรีนครินทร์
        ทั้งสวนน้ำ แพเปียก เรือคายัค ล่องเรือชมวิว และคาราโอเกะ
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <AeoAnswer
        question="แพพักกาญจนบุรีมีอะไรให้เล่น?"
        answer="ในแพ็กเกจมี Water Park สวนน้ำ แพเปียก เรือคายัค ล่องเรือชมวิว และคาราโอเกะ"
        details="รายละเอียดรอบเวลาและเงื่อนไขการเล่นอาจเปลี่ยนตามวัน กรุณาสอบถามทีมงานหากต้องการยืนยันก่อนจอง"
      />

      <section className="mt-10">
        <h2 className="text-3xl font-black">รายการกิจกรรมที่ยืนยันแล้ว</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="rounded-2xl border-2 border-charcoal bg-white p-5 shadow-[4px_4px_0_#151515]"
            >
              <h3 className="text-xl font-black">{activity.name}</h3>
              <p className="mt-2 text-charcoal/70">
                รวมในแพ็กเกจ {mainPackage.name} ของบ้านพักล่องแพ
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-[1.75rem] border-2 border-charcoal bg-lake/10 p-6 md:p-8">
        <h2 className="text-2xl font-black">ดูโปรแกรมเต็มวัน</h2>
        <p className="mt-3 text-charcoal/75">
          ไทม์ไลน์กิจกรรมแยกตามช่วงเวลาวันแรกและเช้าวันที่สอง
        </p>
        <Link href="/itinerary" className="button button--primary mt-5 inline-flex">
          ดูโปรแกรม 2 วัน 1 คืน
        </Link>
      </section>
    </MarketingLayout>
  );
}
