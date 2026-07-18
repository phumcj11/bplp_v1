import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-off-white px-4 py-20">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="font-bold text-orange">← กลับหน้าแรก</Link>
        <h1 className="mt-8 text-4xl font-black">เงื่อนไขการจอง</h1>
        <p className="mt-6 text-lg">
          รอข้อมูลเงื่อนไขการจองที่ยืนยันจากทีมงาน
        </p>
        <p className="mt-4 text-charcoal/70">
          กรุณาสอบถามทีมงานเกี่ยวกับราคาเด็ก การชำระเงิน การเปลี่ยนวัน และการยกเลิก
          เว็บไซต์นี้จะไม่แสดงเงื่อนไขที่ยังไม่ได้รับการยืนยัน
        </p>
      </article>
    </main>
  );
}
