import { useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { ContactSection } from "@/components/ContactSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { VideoWorksSection } from "@/components/VideoWorksSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { EquipmentChoiceSection } from "@/components/EquipmentChoiceSection"
import { FullCycleSection } from "@/components/FullCycleSection"
import { SurveyorCtaSection } from "@/components/SurveyorCtaSection"
import { ReputationSection } from "@/components/ReputationSection"
import { AboutSection } from "@/components/AboutSection"
import { Project3DSection } from "@/components/Project3DSection"
import { HammamQuizBlock } from "@/components/HammamQuizBlock"
import { FaqSection } from "@/components/FaqSection"
import { ReadySection } from "@/components/ReadySection"
import { EquipmentSchemeSection } from "@/components/EquipmentSchemeSection"
import { HammamHeroSection } from "@/components/HammamHeroSection"
import {
  HammamTypesSection,
  HammamPricingSection,
  HammamCostFactorsSection,
} from "@/components/HammamInfoSections"
import type { ServiceData } from "@/data/servicesData"
import { getServiceExtra } from "@/data/serviceExtras"
import { getServiceContent } from "@/data/serviceContent"
import { getServiceFaq } from "@/data/serviceFaq"
import { useSeo } from "@/hooks/useSeo"
import { organizationSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema"

interface Props {
  service: ServiceData
}

export function HammamPageTemplate({ service }: Props) {
  const extra = getServiceExtra(service.slug)
  const content = getServiceContent(service.slug)
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

        {/* === HERO === */}
        <HammamHeroSection service={service} />

        {/* === Наш подход === */}
        <ReadySection slug="hammam" />

        {/* === Квиз — расчёт стоимости === */}
        <HammamQuizBlock />

        {/* === Какие хаммамы строим === */}
        <HammamTypesSection />

        {/* === Более 400 выполненных объектов === */}
        <PortfolioSection />

        {/* === Из чего состоит хаммам === */}
        <EquipmentSchemeSection slug="hammam" />

        {/* === Полный цикл работ === */}
        <FullCycleSection
          title={content?.fullCycle.title}
          subtitle={content?.fullCycle.subtitle}
          items={content?.fullCycle.items}
        />

        {/* === 3D-проект === */}
        <Project3DSection />

        {/* === Почему выбирают нас === */}
        <AboutSection
          subtitle={content?.about.subtitle}
          values={content?.about.values}
          stats={content?.about.stats}
        />

        {/* === Видео работ === */}
        <VideoWorksSection />

        {/* === Лучшая цена на оборудование === */}
        <EquipmentBrandsSection slug="hammam" />

        {/* === Дополнительные опции и оборудование для хаммама === */}
        <EquipmentChoiceSection
          title={content?.equipmentChoice.title}
          titleAccent={content?.equipmentChoice.titleAccent}
          subtitle={content?.equipmentChoice.subtitle}
          cta={content?.equipmentChoice.cta}
          products={content?.equipmentChoice.products}
          features={content?.equipmentChoice.features}
        />

        {/* === От чего зависит стоимость === */}
        <HammamCostFactorsSection />

        {/* === Заявка на замерщика === */}
        <SurveyorCtaSection />

        {/* === Нам доверяют === */}
        <ReputationSection />

        {/* === Отзывы === */}
        {extra && (
          <TestimonialsSection
            title={extra.testimonialsTitle}
            subtitle={extra.testimonialsSubtitle}
            items={extra.testimonials}
          />
        )}

        {/* === Цены на хаммам === */}
        <HammamPricingSection />

        {/* === FAQ === */}
        <FaqSection items={faqItems} />

        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}