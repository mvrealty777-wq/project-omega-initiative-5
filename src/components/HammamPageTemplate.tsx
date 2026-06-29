import { useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { ContactSection } from "@/components/ContactSection"
import { ServiceCasesSection } from "@/components/ServiceCasesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { VideoWorksSection } from "@/components/VideoWorksSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { Project3DSection } from "@/components/Project3DSection"
import { HammamQuizBlock } from "@/components/HammamQuizBlock"
import { FaqSection } from "@/components/FaqSection"
import { ReadySection } from "@/components/ReadySection"
import { HammamCompositionSection } from "@/components/HammamCompositionSection"
import { EquipmentSchemeSection } from "@/components/EquipmentSchemeSection"
import { HammamHeroSection } from "@/components/HammamHeroSection"
import {
  HammamWhatIncludedSection,
  HammamTypesSection,
  HammamPricingSection,
  HammamCostFactorsSection,
  HammamBuildStepsSection,
} from "@/components/HammamInfoSections"
import { HammamPortfolioSection } from "@/components/HammamPortfolioSection"
import type { ServiceData } from "@/data/servicesData"
import { getServiceExtra } from "@/data/serviceExtras"
import { getServiceFaq } from "@/data/serviceFaq"
import { useSeo } from "@/hooks/useSeo"
import { organizationSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema"

interface Props {
  service: ServiceData
}

export function HammamPageTemplate({ service }: Props) {
  const extra = getServiceExtra(service.slug)
  const faqItems = getServiceFaq(service.slug)
  const path = `/uslugi/${service.slug}`

  useSeo({
    title: "Хаммам под ключ в Санкт-Петербурге и по РФ | GeniusSPA",
    description: "Проектируем и строим хаммамы для квартир, домов, коттеджей, SPA и коммерческих объектов. Расчёт парогенератора, гидроизоляция, вентиляция, отделка. Цены от 700 000 ₽. Гарантия 5 лет.",
    image: service.image,
    keywords: "хаммам под ключ, строительство хаммама, турецкая баня, хаммам в квартире, хаммам в доме, хаммам СПб, хаммам цена",
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: "Главная", path: "/" },
        { name: "Хаммам под ключ", path },
      ]),
      serviceSchema({
        name: "Хаммам под ключ",
        description: "Проектируем и строим хаммамы для квартир, домов, коттеджей и SPA.",
        image: service.image,
        path,
      }),
    ],
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen banya-bg relative overflow-x-clip">
      <BanyaDecor />
      <div className="relative z-10">
        <Navbar />

        {/* === 1. HERO === */}
        <HammamHeroSection service={service} />

        {/* === 2. ЧТО ВХОДИТ === */}
        <HammamWhatIncludedSection />

        {/* === 3. КАКИЕ ХАММАМЫ СТРОИМ === */}
        <HammamTypesSection />

        {/* === 4. ЦЕНЫ === */}
        <HammamPricingSection />

        {/* === 5. ОТ ЧЕГО ЗАВИСИТ СТОИМОСТЬ === */}
        <HammamCostFactorsSection />

        {/* === 6. ЭТАПЫ РАБОТ === */}
        <HammamBuildStepsSection />

        {/* === 7. ПОРТФОЛИО === */}
        <HammamPortfolioSection />

        {/* === 8. ГАЛЕРЕЯ РАБОТ (из serviceExtras) === */}
        {extra && (
          <ServiceCasesSection title={extra.casesTitle} subtitle={extra.casesSubtitle} cases={extra.cases} />
        )}

        {/* === Из чего состоит хаммам === */}
        <HammamCompositionSection />

        {/* === Схема оборудования === */}
        <EquipmentSchemeSection slug="hammam" />

        {/* === Готовы реализовать === */}
        <ReadySection slug="hammam" />

        {/* === 9. 3D-ПРОЕКТ === */}
        <Project3DSection slug="hammam" />

        {/* === 10. ВИДЕО === */}
        <VideoWorksSection />

        {/* === 11. БРЕНДЫ === */}
        <EquipmentBrandsSection slug="hammam" />

        {/* === 12. ОТЗЫВЫ === */}
        {extra && (
          <TestimonialsSection
            title={extra.testimonialsTitle}
            subtitle={extra.testimonialsSubtitle}
            items={extra.testimonials}
          />
        )}

        {/* === 13. КВИЗ === */}
        <HammamQuizBlock />

        {/* === 14. FAQ === */}
        <FaqSection items={faqItems} />

        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}