import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ReadySection } from "@/components/ReadySection"
import { FullCycleSection } from "@/components/FullCycleSection"
import { AboutSection } from "@/components/AboutSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { VideoWorksSection } from "@/components/VideoWorksSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { EquipmentChoiceSection } from "@/components/EquipmentChoiceSection"
import { Project3DSection } from "@/components/Project3DSection"
import { SurveyorCtaSection } from "@/components/SurveyorCtaSection"
import { ReputationSection } from "@/components/ReputationSection"
import { ProcessSection } from "@/components/ProcessSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { FaqSection } from "@/components/FaqSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { useSeo } from "@/hooks/useSeo"

export default function Index() {
  useSeo({
    title: "GeniusSPA — строительство саун, бань и хаммамов под ключ",
    description: "Строим сауны, бани, хаммамы, бассейны и банные комплексы под ключ по всей России. Проект, отделка, оборудование. 400+ объектов, гарантия 5 лет. Расчёт бесплатно.",
  })
  return (
    <main className="min-h-screen banya-bg relative overflow-hidden">
      <BanyaDecor />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ReadySection />
        <PortfolioSection />
        <FullCycleSection />
        <Project3DSection />
        <AboutSection />
        <VideoWorksSection />
        <EquipmentBrandsSection />
        <EquipmentChoiceSection />
        <SurveyorCtaSection />
        <ReputationSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}