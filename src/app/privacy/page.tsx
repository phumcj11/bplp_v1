import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-off-white px-4 py-20">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="font-bold text-orange">← กลับหน้าแรก</Link>
        <h1 className="mt-8 text-4xl font-black">นโยบายความเป็นส่วนตัว</h1>
        <p className="mt-6 text-lg">
          แบบฟอร์มเช็กวันว่างใน Phase 1 เป็นระบบจำลองบน Local เท่านั้น
          และยังไม่ส่งข้อมูลไปยังระบบ Production
        </p>
        <p className="mt-4 text-charcoal/70">
          ก่อนเปิดใช้งานจริง ทีมงานต้องจัดทำนโยบายฉบับสมบูรณ์
          ระบุผู้ควบคุมข้อมูล วัตถุประสงค์ ระยะเวลาเก็บรักษา และช่องทางใช้สิทธิของเจ้าของข้อมูล
        </p>
      </article>
    </main>
  );
}
