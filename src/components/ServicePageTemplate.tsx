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
import type { ServiceData } from "@/data/servicesData"
import { getSubServices } from "@/data/servicesData"
import { getServiceExtra } from "@/data/serviceExtras"
import { useSeo } from "@/hooks/useSeo"

interface Props {
  service: ServiceData
}

export function ServicePageTemplate({ service }: Props) {
  const subServices = getSubServices(service)
  const extra = getServiceExtra(service.slug)

  useSeo({
    title: extra?.seoTitle ?? `${service.heroTitle} | GeniusSPA`,
    description: extra?.seoDescription ?? service.heroSubtitle,
    image: service.image,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.slug])

  return (
    <main className="min-h-screen banya-bg relative overflow-hidden">
      <BanyaDecor />
      <div className="relative z-10">
      <Navbar />

      {/* Hero — как на главной */}
      <ServiceHero service={service} />

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-glass">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {service.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-glass-tint">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto">Что входит</div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши <span className="text-primary">услуги</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}>
                  <Icon name={f.icon} className="w-8 h-8 text-white" fallback="Wrench" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Подуслуги — направления */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-glass">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto">Направления</div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Выберите <span className="text-primary">услугу</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Каждое направление — отдельная услуга под ключ. Нажмите, чтобы узнать подробнее.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map((sub) => (
              <Link
                key={sub.subSlug}
                to={`/uslugi/${service.slug}/${sub.subSlug}`}
                className="group bg-white rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
              >
                <span className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                  <Icon name={service.icon} className="w-6 h-6 text-primary" fallback="Hammer" />
                </span>
                <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors flex-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {sub.title}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Блоки как на главной — в порядке главной страницы */}
      {/* 1. Наш подход */}
      <ReadySection />
      {/* 2. Наши работы */}
      {extra && (
        <ServiceCasesSection title={extra.casesTitle} subtitle={extra.casesSubtitle} cases={extra.cases} />
      )}
      {/* 3. Полный цикл работ */}
      <FullCycleSection />
      {/* 4. 3D-проект */}
      <Project3DSection />
      {/* 5. Почему выбирают нас */}
      <AboutSection />
      {/* 6 + 7. Лучшая цена + «нашли дешевле» */}
      <EquipmentBrandsSection />
      {/* 8. Выбор оборудования и материалов */}
      <EquipmentChoiceSection />
      {/* 9. Заявка на замерщика */}
      <SurveyorCtaSection />
      <ReputationSection />
      <ProcessSection />
      <TestimonialsSection
        title={extra?.testimonialsTitle}
        subtitle={extra?.testimonialsSubtitle}
        items={extra?.testimonials}
      />
      {/* 10. Прозрачные цены */}
      <PricingSection />

      {/* 11. Услуга под ключ (что входит + стоимость) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-glass-tint">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-badge mb-5">Что входит</div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Услуга <span className="text-primary">под ключ</span>
              </h2>
              <ul className="space-y-5">
                {service.works.map((w, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-foreground mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{w.title}</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{w.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price card */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-primary shadow-xl shadow-primary/10 overflow-hidden">
                <div className="p-8 bg-gray-900 text-white">
                  <p className="text-white/60 text-sm mb-2">Стоимость работ</p>
                  <p className="text-4xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.priceFrom === "По запросу" ? (
                      <span className="text-green-400">{service.priceFrom}</span>
                    ) : (
                      <>{service.priceFrom} <span className="text-xl font-normal text-white/60">₽</span></>
                    )}
                  </p>
                  <p className="text-white/60 text-sm">{service.priceNote}</p>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-3 mb-7">
                    {["Бесплатный выезд и замер", "Фиксированная цена в договоре", "Дизайн-проект и 3D-визуализация", "Гарантия 5 лет"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-base text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-green w-full justify-center text-base">
                    Рассчитать стоимость
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {service.gallery.length > 1 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 section-glass">
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
                  <img src={img} alt={`${service.title} — пример ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. Частые вопросы */}
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingContacts />
      </div>
    </main>
  )
}