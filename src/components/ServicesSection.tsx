import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
    title: "Строительство Хаммама",
    points: ["Проектирование хаммама", "Плановое обслуживание", "Реконструкция хаммама"],
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
    title: "Строительство Саун",
    points: ["Проектирование саун", "Финские электрические сауны", "Русские дровяные бани"],
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e2b0a2d3-e6dc-44a4-ae60-482e3be5b688.jpg",
    title: "Соляные Пещеры",
    points: ["Розовая Гималайская соль", "Каменная белая соль", "Галогенератор"],
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg",
    title: "Строительство Бассейна",
    points: ["Проектирование", "Поставка оборудования", "Отделка и облицовка"],
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg",
    title: "Инфракрасные сауны",
    points: ["ИК-кабины", "Проектирование", "Монтаж и установка"],
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/09e490cf-4e62-4ee4-a5ae-0db40e9c8a31.jpg",
    title: "Оборудование для бань",
    points: ["Оборудование для хаммама", "Печи для сауны и бани", "Парогенераторы и автоматика"],
  },
]

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
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-green w-full justify-center text-sm">
                  Рассчитать стоимость
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}