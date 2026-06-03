import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { servicesData } from "@/data/servicesData"

export function ServicesSection() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Полный комплекс <span className="text-primary">услуг</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            От проектирования до сдачи объекта под ключ. Работаем по всей России с гарантией качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image with badge */}
              <Link to={`/uslugi/${service.slug}`} className="relative h-52 overflow-hidden block">
                <img
                  src={service.image}
                  alt={service.cardTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 w-11 h-11 rounded-xl flex items-center justify-center bg-white/95 shadow-md">
                  <Icon name={service.icon} className="w-5 h-5 text-primary" fallback="Hammer" />
                </span>
                <span className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                  {service.badge}
                </span>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <Link to={`/uslugi/${service.slug}`}>
                  <h3 className="font-black text-2xl text-foreground mb-4 hover:text-primary transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.cardTitle}
                  </h3>
                </Link>

                {/* Sub-services */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.subServices.map((sub, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      {sub}
                    </li>
                  ))}
                </ul>

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
