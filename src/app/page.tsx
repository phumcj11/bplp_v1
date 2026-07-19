import { AvailabilityForm } from "@/components/availability-form";
import { DeferredSiteEffects } from "@/components/deferred-site-effects";
import {
  ActivitySlider,
  FAQAccordion,
  FloatingCTA,
  Gallery,
  Header,
  RaftSelector,
} from "@/components/interactive-sections";
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
import { JsonLd } from "@/components/seo/seo-blocks";
import { buildHomeStructuredData } from "@/lib/seo/structured-data";

export default function Home() {
  const structuredData = buildHomeStructuredData();

  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <Header />
      <DeferredSiteEffects>
        <main>
          <QuickSocialProof />
          <PackageValue />
          <TripExperience />
          <RaftSelector />
          <ActivitySlider />
          <ItineraryTimeline />
          <Gallery />
          <WhyChooseUs />
          <FAQAccordion />
          <AvailabilityForm />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingCTA />
      </DeferredSiteEffects>
    </>
  );
}
