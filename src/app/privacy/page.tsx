import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.privacy);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "นโยบายความเป็นส่วนตัว", path: "/privacy" },
];

export default function PrivacyPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.privacy.path,
    title: seoPages.privacy.title,
    description: seoPages.privacy.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/privacy">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mt-6 text-4xl font-black">{seoPages.privacy.h1}</h1>
      <p className="mt-6 text-lg">
        เว็บไซต์บ้านพักล่องแพใช้แบบฟอร์มเช็กวันว่างเพื่อให้ทีมงานติดต่อกลับ
        ข้อมูลที่ส่งผ่านแบบฟอร์มใช้เพื่อการติดต่อและให้บริการเท่าที่จำเป็น
      </p>
      <p className="mt-4 text-charcoal/70">
        ก่อนเปิดใช้งานจริง ทีมงานต้องจัดทำนโยบายฉบับสมบูรณ์
        ระบุผู้ควบคุมข้อมูล วัตถุประสงค์ ระยะเวลาเก็บรักษา และช่องทางใช้สิทธิของเจ้าของข้อมูล
      </p>
      <Link href="/" className="mt-8 inline-block font-bold text-orange underline">
        กลับหน้าแรก
      </Link>
    </MarketingLayout>
  );
}
