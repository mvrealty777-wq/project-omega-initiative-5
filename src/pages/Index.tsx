import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ReadySection } from "@/components/ReadySection"
import { FullCycleSection } from "@/components/FullCycleSection"
import { AboutSection } from "@/components/AboutSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { VideoWorksSection } from "@/components/VideoWorksSection"
import { VkClipsSection } from "@/components/VkClipsSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { EquipmentChoiceSection } from "@/components/EquipmentChoiceSection"
import { Project3DSection } from "@/components/Project3DSection"
import { SurveyorCtaSection } from "@/components/SurveyorCtaSection"
import { ReputationSection } from "@/components/ReputationSection"
import { ProcessSection } from "@/components/ProcessSection"
import { BuildTimelineSection } from "@/components/BuildTimelineSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { QuizSection } from "@/components/QuizSection"
import { FaqSection } from "@/components/FaqSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { useSeo } from "@/hooks/useSeo"
import { organizationSchema } from "@/lib/schema"

export default function Index() {
  useSeo({
    title: "GeniusSPA — строительство саун, бань и хаммамов под ключ",
    description: "Строим сауны, бани, хаммамы, бассейны и банные комплексы под ключ по всей России. Проект, отделка, оборудование. 400+ объектов, гарантия 5 лет. Расчёт бесплатно.",
    keywords: "строительство саун, строительство бань, хаммам под ключ, турецкая баня, банный комплекс, бассейн под ключ, соляная комната, инфракрасная сауна",
    jsonLd: [organizationSchema()],
  })
  return (
    <main className="min-h-screen banya-bg relative overflow-x-clip">
      <BanyaDecor />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ReadySection />
        <PortfolioSection />
        <QuizSection />
        <FullCycleSection />
        <Project3DSection />
        <AboutSection />
        <VideoWorksSection />
        <VkClipsSection />
        <EquipmentBrandsSection />
        <EquipmentChoiceSection />
        <SurveyorCtaSection />
        <ReputationSection />
        <ProcessSection />
        <BuildTimelineSection />
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