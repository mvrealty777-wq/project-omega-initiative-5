import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { servicesData } from "@/data/servicesData"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto">Что мы строим</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши специалисты <span className="text-primary">выполнят</span>
          </h2>
          <p className="text-muted-foreground text-base">Выберите тип работ, подходящий для вас</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Link to={`/uslugi/${service.slug}`} className="relative h-56 overflow-hidden block">
                <img
                  src={service.image}
                  alt={service.menuLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <Link to={`/uslugi/${service.slug}`}>
                  <h3 className="font-bold text-xl text-foreground mb-4 hover:text-primary transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.menuLabel}
                  </h3>
                </Link>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">—</span>
                      {f.title}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <Link to={`/uslugi/${service.slug}`} className="btn-green w-full justify-center text-sm">
                    Подробнее об услуге
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#contact" className="btn-green-outline w-full justify-center text-sm">
                    Рассчитать стоимость
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
