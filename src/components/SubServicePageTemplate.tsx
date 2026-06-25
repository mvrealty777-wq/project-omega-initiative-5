import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { ContactSection } from "@/components/ContactSection"
import { ServiceHero } from "@/components/ServiceHero"
import { ReadySection } from "@/components/ReadySection"
import { ServiceCasesSection } from "@/components/ServiceCasesSection"
import { ServiceTurnkeySection } from "@/components/ServiceTurnkeySection"
import { BuildTimelineSection } from "@/components/BuildTimelineSection"
import { FullCycleSection } from "@/components/FullCycleSection"
import { Project3DSection } from "@/components/Project3DSection"
import { AboutSection } from "@/components/AboutSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { EquipmentChoiceSection } from "@/components/EquipmentChoiceSection"
import { SurveyorCtaSection } from "@/components/SurveyorCtaSection"
import { ProcessSection } from "@/components/ProcessSection"
import { ReputationSection } from "@/components/ReputationSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { FaqSection } from "@/components/FaqSection"
import Icon from "@/components/ui/icon"
import { CheckCircle2, ArrowRight } from "lucide-react"
import type { SubServiceData } from "@/data/servicesData"
import { getSubServices } from "@/data/servicesData"
import { getServiceExtra } from "@/data/serviceExtras"
import { getServiceContent } from "@/data/serviceContent"
import { getServiceFaq } from "@/data/serviceFaq"
import { useSeo } from "@/hooks/useSeo"
import { organizationSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { EquipmentSchemeSection } from "@/components/EquipmentSchemeSection"

interface Props {
  sub: SubServiceData
}

export function SubServicePageTemplate({ sub }: Props) {
  const service = sub.parent
  const siblings = getSubServices(service).filter((s) => s.subSlug !== sub.subSlug)
  const extra = getServiceExtra(service.slug)
  const content = getServiceContent(service.slug)
  const faqItems = getServiceFaq(service.slug)
  const path = `/uslugi/${service.slug}/${sub.subSlug}`
  const description = `${sub.title} под ключ по всей России: проектирование, материалы, монтаж и гарантия 5 лет. Раздел «${service.cardTitle}». Бесплатный расчёт и выезд замерщика.`

  useSeo({
    title: `${sub.title} под ключ — ${service.cardTitle} | GeniusSPA`,
    description,
    image: service.image,
    keywords: `${sub.title}, ${sub.title} под ключ, ${service.cardTitle}, ${service.menuLabel}`,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: "Главная", path: "/" },
        { name: service.cardTitle, path: `/uslugi/${service.slug}` },
        { name: sub.title, path },
      ]),
      serviceSchema({ name: sub.title, description, image: service.image, path }),
    ],
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.slug, sub.subSlug])

  return (
    <main className="min-h-screen banya-bg relative overflow-x-clip">
      <BanyaDecor />
      <div className="relative z-10">
        <Navbar />

        {/* Hero — как на главной */}
        <ServiceHero
          service={service}
          titleOverride={sub.title}
          subtitleOverride={
            sub.title === "Русская баня"
              ? "Русская баня с дровяной печью-каменкой под ключ. Сруб, брус или бревно, парная + моечная + комната отдыха. Гарантия 5 лет."
              : `${sub.title} под ключ по всей России. Проектирование, материалы, монтаж и гарантия 5 лет.`
          }
          parentCrumb={{ label: service.cardTitle, to: `/uslugi/${service.slug}` }}
        />

        {/* Intro */}
        <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {sub.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
          </div>
        </section>

        {/* Схема оборудования */}
        <EquipmentSchemeSection slug={service.slug} />

        {/* Блоки как на главной — в порядке главной страницы */}
        <ReadySection />
        {extra && (
          <ServiceCasesSection title={extra.casesTitle} subtitle={extra.casesSubtitle} cases={extra.cases} />
        )}
        <FullCycleSection
          title={content?.fullCycle.title}
          subtitle={content?.fullCycle.subtitle}
          items={content?.fullCycle.items}
        />
        <Project3DSection />
        <AboutSection
          subtitle={content?.about.subtitle}
          values={content?.about.values}
          stats={content?.about.stats}
        />
        <EquipmentBrandsSection />
        <EquipmentChoiceSection
          title={content?.equipmentChoice.title}
          titleAccent={content?.equipmentChoice.titleAccent}
          subtitle={content?.equipmentChoice.subtitle}
          cta={content?.equipmentChoice.cta}
          products={content?.equipmentChoice.products}
          features={content?.equipmentChoice.features}
        />
        <SurveyorCtaSection />
        <ReputationSection />
        <ProcessSection
          badge={content?.process.badge}
          title={content?.process.title}
          titleAccent={content?.process.titleAccent}
          steps={content?.process.steps}
        />
        <BuildTimelineSection
          title={content?.timeline.title}
          titleAccent={content?.timeline.titleAccent}
          subtitle={content?.timeline.subtitle}
          rows={content?.timeline.rows}
          note={content?.timeline.note}
        />
        <TestimonialsSection
          title={extra?.testimonialsTitle}
          subtitle={extra?.testimonialsSubtitle}
          items={extra?.testimonials}
        />
        <PricingSection
          title={content?.pricing.title}
          titleAccent={content?.pricing.titleAccent}
          subtitle={content?.pricing.subtitle}
          tiers={content?.pricing.tiers}
        />

        {/* Услуга под ключ (что входит + стоимость) */}
        <ServiceTurnkeySection service={service} title={sub.title} />

        {/* Gallery */}
        {service.gallery.length > 1 && (
          <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="section-badge mb-5 mx-auto">Примеры</div>
                <h2 className="text-4xl sm:text-5xl font-black text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Примеры <span className="text-primary">объектов</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.gallery.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] group">
                    <img src={img} alt={`${sub.title} — пример ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Другие услуги направления */}
        {siblings.length > 0 && (
          <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="section-badge mb-5 mx-auto">Ещё в разделе «{service.cardTitle}»</div>
                <h2 className="text-4xl sm:text-5xl font-black text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Другие <span className="text-primary">услуги</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {siblings.map((s) => (
                  <Link
                    key={s.subSlug}
                    to={`/uslugi/${service.slug}/${s.subSlug}`}
                    className="group bg-white rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
                  >
                    <span className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                      <Icon name={service.icon} className="w-6 h-6 text-primary" fallback="Hammer" />
                    </span>
                    <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors flex-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {s.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FaqSection items={faqItems} />
        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}