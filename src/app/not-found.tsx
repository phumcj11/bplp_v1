import Link from "next/link";
import { MarketingLayout } from "@/components/seo/marketing-layout";

export default function NotFound() {
  return (
    <MarketingLayout currentPath="">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-6xl text-orange">404</p>
        <h1 className="mt-4 text-3xl font-black">ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="mt-4 text-lg text-charcoal/70">
          ลิงก์อาจถูกย้ายหรือพิมพ์ URL ไม่ถูกต้อง
        </p>
        <Link href="/" className="button button--primary mt-8 inline-flex">
          กลับหน้าแรก
        </Link>
      </div>
    </MarketingLayout>
  );
}
