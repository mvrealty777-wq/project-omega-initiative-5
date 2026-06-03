import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { servicesData } from "@/data/servicesData"

export function ServicesSection() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши специалисты <span className="text-primary">выполнят</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            От проектирования до сдачи объекта под ключ. Работаем по всей России с гарантией качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Wide image with badge */}
              <Link to={`/uslugi/${service.slug}`} className="relative h-64 overflow-hidden block">
                <img
                  src={service.image}
                  alt={service.cardTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold px-4 py-2 rounded-full text-white shadow-md"
                  style={{ background: 'hsl(145 63% 32%)' }}>
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
                <div className="flex flex-wrap gap-2 mb-7">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-foreground/70 border border-border">
                      {tag}
                    </span>
                  ))}
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
