import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ReadySection } from "@/components/ReadySection"
import { FullCycleSection } from "@/components/FullCycleSection"
import { AboutSection } from "@/components/AboutSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { VideoWorksSection } from "@/components/VideoWorksSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { SurveyorCtaSection } from "@/components/SurveyorCtaSection"
import { ReputationSection } from "@/components/ReputationSection"
import { ProcessSection } from "@/components/ProcessSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { FaqSection } from "@/components/FaqSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReadySection />
      <FullCycleSection />
      <AboutSection />
      <PortfolioSection />
      <VideoWorksSection />
      <EquipmentBrandsSection />
      <SurveyorCtaSection />
      <ReputationSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingContacts />
    </main>
  )
}
