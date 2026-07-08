import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { servicesData } from "@/data/servicesData"
import Icon from "@/components/ui/icon"

export function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши специалисты <span className="text-primary">выполнят</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            От проектирования до сдачи объекта под ключ. Работаем по всей России с гарантией качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Wide image with badge */}
              <Link to={`/uslugi/${service.slug}`} className="relative h-64 sm:h-72 lg:h-80 overflow-hidden block">
                <img
                  src={service.image}
                  alt={service.cardTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Иконка-категория */}
                <span className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center bg-white/95 shadow-lg backdrop-blur-sm">
                  <Icon name={service.icon} className="w-5.5 h-5.5 text-primary" fallback="Hammer" />
                </span>
                {/* Стеклянная подпись */}
                <span className="absolute bottom-4 left-4 right-4 inline-flex items-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl text-foreground shadow-lg"
                  style={{ background: 'hsl(0 0% 100% / 0.92)', backdropFilter: 'blur(6px)', fontFamily: 'Montserrat, sans-serif' }}>
                  <Icon name="CircleCheckBig" className="w-4 h-4 text-primary flex-shrink-0" fallback="Check" />
                  {service.badge}
                </span>
              </Link>

              <div className="p-7 flex flex-col flex-1">
                <Link to={`/uslugi/${service.slug}`}>
                  <h3 className="font-black text-2xl text-foreground mb-3 hover:text-primary transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.cardTitle}
                  </h3>
                </Link>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  {service.cardDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-foreground/70 border border-border">
                      <Icon name={tag.icon} className="w-3.5 h-3.5 text-primary" />
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Инфографика */}
                <div className="grid grid-cols-3 gap-2 mb-6 rounded-xl border border-border bg-secondary/40 p-3">
                  <div className="text-center">
                    <div className="flex justify-center mb-1"><Icon name="Wallet" className="w-4 h-4 text-primary" fallback="Tag" /></div>
                    <p className="text-[13px] font-black text-foreground leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.priceFrom.startsWith('от ') ? <>от {service.priceFrom.replace('от ', '')}₽</> : service.priceFrom}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">цена</p>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="flex justify-center mb-1"><Icon name="ListChecks" className="w-4 h-4 text-primary" fallback="Check" /></div>
                    <p className="text-[13px] font-black text-foreground leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.subServices.length}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">услуг</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-1"><Icon name="ShieldCheck" className="w-4 h-4 text-primary" fallback="Check" /></div>
                    <p className="text-[13px] font-black text-foreground leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>5 лет</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">гарантия</p>
                  </div>
                </div>

                <Link to={`/uslugi/${service.slug}`} className="btn-green w-full justify-center text-sm mt-auto">
                  Подробнее об услуге
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}