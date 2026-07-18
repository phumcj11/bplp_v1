import type { Metadata } from "next";
import { Anton, Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "บ้านพักล่องแพ กาญจนบุรี | แพเหมาส่วนตัว เขื่อนศรีนครินทร์",
  description:
    "ทริปล่องแพกาญจนบุรี 2 วัน 1 คืน แพพักส่วนตัว สวนน้ำ แพเปียก และอาหาร 2 มื้อ รองรับกลุ่ม 8–60 คน เริ่มต้น 1,290 บาทต่อท่าน",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: "บ้านพักล่องแพ",
    title: "บ้านพักล่องแพ กาญจนบุรี | แพเหมาส่วนตัว",
    description:
      "ทริป 2 วัน 1 คืน ครบทั้งที่พัก กิจกรรม และอาหาร รองรับกลุ่ม 8–60 คน",
  },
  twitter: {
    card: "summary_large_image",
    title: "บ้านพักล่องแพ กาญจนบุรี",
    description: "แพเหมาส่วนตัว เขื่อนศรีนครินทร์ เริ่มต้น 1,290 บาท/ท่าน",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}
