import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { ContactSection } from "@/components/ContactSection"
import Icon from "@/components/ui/icon"
import { CheckCircle2, ArrowRight, Phone } from "lucide-react"
import type { ServiceData } from "@/data/servicesData"

interface Props {
  service: ServiceData
}

export function ServicePageTemplate({ service }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.slug])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/90">{service.menuLabel}</span>
          </nav>

          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 mb-5"
              style={{ background: 'rgba(74,222,128,0.12)' }}>
              <Icon name={service.icon} className="w-4 h-4" fallback="Hammer" />
              Под ключ по всей России
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {service.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-green text-base">
                Получить расчёт
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:88003026753" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" />
                8 800 302-67-53
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {service.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

      {/* What we do + price */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-badge mb-5">Преимущества</div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Почему выбирают <span className="text-primary">нас</span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                  <img src={img} alt={`${service.title} — пример ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer />
      <FloatingContacts />
    </main>
  )
}
