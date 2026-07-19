import Link from "next/link";
import { Breadcrumbs, JsonLd, SourceNote } from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { faqs } from "@/data/faqs";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.faq);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FaqPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.faq.path,
    title: seoPages.faq.title,
    description: seoPages.faq.description,
    breadcrumbs,
    faqItems: faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  });

  return (
    <MarketingLayout currentPath="/faq">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">GOOD TO KNOW</p>
      <h1 className="section-title mt-2">{seoPages.faq.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        รวมคำถามที่ลูกค้ามักถามเกี่ยวกับราคา แพ อาหาร 2 มื้อ และการจอง
        คำตอบที่ยังไม่ยืนยันจะระบุให้สอบถามทีมงาน
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <div className="mt-10 divide-y-2 divide-charcoal/10 border-y-2 border-charcoal/10">
        {faqs.map((faq) => (
          <article key={faq.question} className="py-6">
            <h2 className="text-xl font-black md:text-2xl">{faq.question}</h2>
            <p className="mt-3 text-lg text-charcoal/80">{faq.answer}</p>
            {!faq.verified ? (
              <p className="mt-2 text-sm text-charcoal/55">
                ข้อมูลนี้ยังไม่ยืนยันเต็มรูปแบบ กรุณาสอบถามทีมงานก่อนตัดสินใจ
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-[1.75rem] border-2 border-charcoal bg-charcoal p-6 text-white md:p-8">
        <h2 className="text-2xl font-black">ยังมีคำถามเพิ่มเติม?</h2>
        <p className="mt-3 text-white/75">ติดต่อทีมงานหรือส่งคำขอเช็กวันว่างได้ทันที</p>
        <Link href="/contact" className="button button--primary mt-5 inline-flex">
          ไปหน้าติดต่อ
        </Link>
      </section>
    </MarketingLayout>
  );
}
