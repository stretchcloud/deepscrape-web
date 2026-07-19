/*
 * Home — DeepScrapper Landing Page
 * Design: hydranode.ai — Light theme, white background, serif headlines, black CTAs, lime green accents
 * Sections: Navbar → Hero → TrustBar → Features → Demo → API → QuickStart → UseCases → Pricing → CTA → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import ApiSection from "@/components/ApiSection";
import QuickStartSection from "@/components/QuickStartSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import { CtaSection, Footer } from "@/components/CtaSection";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(1 0 0)" }}
    >
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <DemoSection />
      <ApiSection />
      <QuickStartSection />
      <UseCasesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
