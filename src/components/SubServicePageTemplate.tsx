import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { ContactSection } from "@/components/ContactSection"
import { ServiceHero } from "@/components/ServiceHero"
import { FullCycleSection } from "@/components/FullCycleSection"
import { ProcessSection } from "@/components/ProcessSection"
import { ReputationSection } from "@/components/ReputationSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import Icon from "@/components/ui/icon"
import { CheckCircle2, ArrowRight } from "lucide-react"
import type { SubServiceData } from "@/data/servicesData"
import { getSubServices } from "@/data/servicesData"

interface Props {
  sub: SubServiceData
}

export function SubServicePageTemplate({ sub }: Props) {
  const service = sub.parent
  const siblings = getSubServices(service).filter((s) => s.subSlug !== sub.subSlug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.slug, sub.subSlug])

  return (
    <main className="min-h-screen banya-bg relative overflow-hidden">
      <BanyaDecor />
      <div className="relative z-10">
        <Navbar />

        {/* Hero — как на главной */}
        <ServiceHero
          service={service}
          titleOverride={sub.title}
          subtitleOverride={`${sub.title} под ключ по всей России. Проектирование, материалы, монтаж и гарантия 5 лет.`}
          parentCrumb={{ label: service.cardTitle, to: `/uslugi/${service.slug}` }}
        />

        {/* Intro */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {sub.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
          </div>
        </section>

        {/* Что входит / преимущества + price */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="section-badge mb-5 mx-auto">Наши работы</div>
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

        <FullCycleSection />
        <ProcessSection />
        <ReputationSection />
        <TestimonialsSection />

        {/* Другие услуги направления */}
        {siblings.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

        <FaqSection />
        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}