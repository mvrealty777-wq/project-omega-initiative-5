import { lazy, Suspense } from "react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { useSeo } from "@/hooks/useSeo"
import { organizationSchema } from "@/lib/schema"

const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })))
const ReadySection = lazy(() => import("@/components/ReadySection").then(m => ({ default: m.ReadySection })))
const FullCycleSection = lazy(() => import("@/components/FullCycleSection").then(m => ({ default: m.FullCycleSection })))
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })))
const PortfolioSection = lazy(() => import("@/components/PortfolioSection").then(m => ({ default: m.PortfolioSection })))
const VideoWorksSection = lazy(() => import("@/components/VideoWorksSection").then(m => ({ default: m.VideoWorksSection })))
const EquipmentBrandsSection = lazy(() => import("@/components/EquipmentBrandsSection").then(m => ({ default: m.EquipmentBrandsSection })))
const EquipmentChoiceSection = lazy(() => import("@/components/EquipmentChoiceSection").then(m => ({ default: m.EquipmentChoiceSection })))
const Project3DSection = lazy(() => import("@/components/Project3DSection").then(m => ({ default: m.Project3DSection })))
const SurveyorCtaSection = lazy(() => import("@/components/SurveyorCtaSection").then(m => ({ default: m.SurveyorCtaSection })))
const ReputationSection = lazy(() => import("@/components/ReputationSection").then(m => ({ default: m.ReputationSection })))
const ProcessSection = lazy(() => import("@/components/ProcessSection").then(m => ({ default: m.ProcessSection })))
const BuildTimelineSection = lazy(() => import("@/components/BuildTimelineSection").then(m => ({ default: m.BuildTimelineSection })))
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })))
const PricingSection = lazy(() => import("@/components/PricingSection").then(m => ({ default: m.PricingSection })))
const QuizSection = lazy(() => import("@/components/QuizSection").then(m => ({ default: m.QuizSection })))
const FaqSection = lazy(() => import("@/components/FaqSection").then(m => ({ default: m.FaqSection })))
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })))
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })))

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
        <Suspense fallback={null}>
          <ReadySection />
          <PortfolioSection />
          <QuizSection />
          <FullCycleSection />
          <Project3DSection />
          <AboutSection />
          <VideoWorksSection />
          <EquipmentBrandsSection />
          <EquipmentChoiceSection />
          <SurveyorCtaSection />
          <ReputationSection />
          <ProcessSection />
          <BuildTimelineSection />
          <TestimonialsSection />
          <PricingSection />
          <ServicesSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </Suspense>
        <FloatingContacts />
      </div>
    </main>
  )
}