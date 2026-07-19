import {
  AeoAnswer,
  Breadcrumbs,
  JsonLd,
  SourceNote,
} from "@/components/seo/seo-blocks";
import { MarketingLayout } from "@/components/seo/marketing-layout";
import { AvailabilityForm } from "@/components/availability-form";
import { seoPages } from "@/data/seo-pages";
import { contactData } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPageStructuredData } from "@/lib/seo/structured-data";

export const metadata = createPageMetadata(seoPages.contact);

const breadcrumbs = [
  { name: "หน้าแรก", path: "/" },
  { name: "ติดต่อ", path: "/contact" },
];

export default function ContactPage() {
  const structuredData = buildPageStructuredData({
    path: seoPages.contact.path,
    title: seoPages.contact.title,
    description: seoPages.contact.description,
    breadcrumbs,
  });

  return (
    <MarketingLayout currentPath="/contact">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow mt-6">CONTACT</p>
      <h1 className="section-title mt-2">{seoPages.contact.h1}</h1>
      <p className="mt-4 max-w-3xl text-lg text-charcoal/75">
        ติดต่อบ้านพักล่องแพเพื่อสอบถามรายละเอียดหรือส่งคำขอเช็กวันว่าง
        สำหรับทริปแพเหมาส่วนตัวที่เขื่อนศรีนครินทร์ จังหวัดกาญจนบุรี
      </p>
      <div className="mt-6">
        <SourceNote />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <AeoAnswer
          question="เช็กวันว่างและจองอย่างไร?"
          answer="แจ้งวันที่ จำนวนคน และช่องทางติดต่อผ่านแบบฟอร์มด้านล่าง LINE หรือโทรศัพท์"
          details="ทีมงานจะติดต่อกลับเพื่อยืนยันแพ วันว่าง และรายละเอียดราคาที่เหมาะกับกลุ่มของคุณ"
        />
        <section className="rounded-[1.75rem] border-2 border-charcoal bg-white p-6 shadow-brutal">
          <h2 className="text-2xl font-black">ช่องทางติดต่อ</h2>
          <ul className="mt-4 grid gap-3 text-lg">
            <li>
              <a
                href={contactData.phone.href}
                className="font-semibold text-orange underline"
              >
                โทร {contactData.phone.display}
              </a>
            </li>
            <li>
              <a
                href={contactData.line.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-orange underline"
              >
                LINE {contactData.line.id}
              </a>
            </li>
            <li>
              <a
                href={contactData.facebook.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-orange underline"
              >
                Facebook บ้านพักล่องแพ
              </a>
            </li>
            <li className="text-charcoal/75">{contactData.website.displayName}</li>
          </ul>
        </section>
      </div>

      <div className="mt-12">
        <AvailabilityForm />
      </div>
    </MarketingLayout>
  );
}
