import { AvailabilityForm } from "@/components/availability-form";
import {
  ActivitySlider,
  FAQAccordion,
  FloatingCTA,
  Gallery,
  Header,
  RaftSelector,
  ReviewCarousel,
} from "@/components/interactive-sections";
import { Preloader, SiteEffects } from "@/components/site-effects";
import {
  FinalCTA,
  Footer,
  Hero,
  ItineraryTimeline,
  PackageValue,
  QuickSocialProof,
  TripExperience,
  WhyChooseUs,
} from "@/components/static-sections";
import { contactData } from "@/data/contact";
import { faqs } from "@/data/faqs";
import { siteData } from "@/data/site";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "LodgingBusiness"],
      name: siteData.name.th,
      alternateName: siteData.name.en,
      url: siteUrl,
      telephone: contactData.phone.display,
      address: {
        "@type": "PostalAddress",
        addressLocality: "เขื่อนศรีนครินทร์",
        addressRegion: "กาญจนบุรี",
        addressCountry: "TH",
      },
      priceRange: "เริ่มต้น 1,290 บาท/ท่าน",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteUrl },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Preloader />
      <Header />
      <SiteEffects>
        <main>
          <Hero />
          <QuickSocialProof />
          <PackageValue />
          <TripExperience />
          <RaftSelector />
          <ActivitySlider />
          <ItineraryTimeline />
          <Gallery />
          <ReviewCarousel />
          <WhyChooseUs />
          <FAQAccordion />
          <AvailabilityForm />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingCTA />
      </SiteEffects>
    </>
  );
}
