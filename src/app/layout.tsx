import type { Metadata } from "next";
import { Anton, Kanit } from "next/font/google";
import { seoPages } from "@/data/seo-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/lib/seo/site-url";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["600", "700", "900"],
  display: "swap",
  adjustFontFallback: true,
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...createPageMetadata(seoPages.home),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} ${anton.variable} js-animations-pending`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/processed/hero/raft-exterior-828.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
