import Link from "next/link";
import { Breadcrumbs, JsonLd, SourceNote } from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { itinerary } from "@/data/itinerary";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.itinerary);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "โปรแกรม", path: "/itinerary" },
];

export default function ItineraryPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.itinerary.path,
    title: seoPages.itinerary.title,
    description: seoPages.itinerary.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/itinerary">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">2 DAYS 1 NIGHT</p>
      <h1 className="section-title mt-2">{seoPages.itinerary.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        โปรแกรมล่องแพ 2 วัน 1 คืนของบ้านพักล่องแพ ครอบคลุมขึ้นแพ เล่นสวนน้ำ
        อาหารเย็น คาราโอเกะ และเช้าวันที่สอง ก่อนเดินทางกลับฝั่งประมาณ 11:00 น.
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <section className="mt-10">
        <h2 className="text-3xl font-black">โปรแกรม 2 วัน 1 คืนทำกิจกรรมอะไรบ้าง?</h2>
        <p className="mt-4 max-w-3xl text-lg font-semibold">
          วันแรกเน้น Water Park แพเปียก และมื้อเย็นบนแพ วันที่สองเป็นอาหารเช้าและพักผ่อนก่อนกลับ
        </p>
      </section>

      <div className="mt-8 grid gap-5">
        {itinerary.map((period) => (
          <article
            key={period.id}
            className="rounded-[1.75rem] border-2 border-charcoal bg-white p-6 shadow-[4px_4px_0_#151515]"
          >
            <p className="font-display tracking-widest text-orange">{period.dayLabel}</p>
            <h3 className="mt-2 text-2xl font-black">{period.time}</h3>
            <ul className="mt-4 grid gap-2 text-charcoal/80">
              {period.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <Link href="/packages" className="button button--primary inline-flex">
          ดูราคาและสิ่งที่รวม
        </Link>
      </section>
    </MarketingLayout>
  );
}
