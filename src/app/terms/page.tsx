import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.terms);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "เงื่อนไขการจอง", path: "/terms" },
];

export default function TermsPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.terms.path,
    title: seoPages.terms.title,
    description: seoPages.terms.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/terms">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mt-6 text-4xl font-black">{seoPages.terms.h1}</h1>
      <p className="mt-6 text-lg">รอข้อมูลเงื่อนไขการจองที่ยืนยันจากทีมงาน</p>
      <p className="mt-4 text-charcoal/70">
        กรุณาสอบถามทีมงานเกี่ยวกับราคาเด็ก การชำระเงิน การเปลี่ยนวัน และการยกเลิก
        เว็บไซต์นี้จะไม่แสดงเงื่อนไขที่ยังไม่ได้รับการยืนยัน
      </p>
      <Link href="/contact" className="mt-8 inline-block font-bold text-orange underline">
        ติดต่อทีมงาน
      </Link>
    </MarketingLayout>
  );
}
