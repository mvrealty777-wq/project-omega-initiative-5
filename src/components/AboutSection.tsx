import { CheckCircle2 } from "lucide-react"

const values = [
  { title: "Опыт и экспертиза", description: "Более 10 лет строим сауны и хамамы — знаем все нюансы от фундамента до финишной отделки" },
  { title: "Работа под ключ", description: "Проектирование, строительство, инженерные системы, отделка и запуск — всё в одних руках" },
  { title: "Качественные материалы", description: "Финская древесина, турецкий мрамор, немецкое оборудование — только проверенные поставщики" },
  { title: "Индивидуальный проект", description: "Каждый объект проектируется с нуля под ваш участок, бюджет и пожелания по стилю" },
  { title: "Гарантия 5 лет", description: "Письменная гарантия на конструктив и оборудование, оперативно устраняем любые замечания" },
  { title: "Соблюдение сроков", description: "Фиксируем сроки в договоре и соблюдаем их — за 10 лет не сорвали ни одной сдачи" },
]

const stats = [
  { number: "10+", label: "Лет на рынке", emoji: "📅" },
  { number: "400+", label: "Объектов построено", emoji: "🏗️" },
  { number: "6", label: "Видов услуг", emoji: "🛠️" },
  { number: "5 лет", label: "Гарантия", emoji: "🛡️" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-badge mb-5">О компании GeniusSPA</div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Строим не просто бани —<br />
              <span className="text-primary">создаём пространство</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              GeniusSPA — строительная компания с 10-летним опытом возведения финских саун, русских бань и турецких хамамов. Работаем по всей России: от небольшой бани на даче до многозонного банного комплекса для ресторана или отеля.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Мы не привлекаем субподрядчиков — весь цикл от проекта до сдачи выполняет наша собственная команда. Это гарантирует качество, сроки и единую ответственность.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{value.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{stat.emoji}</div>
                <div
                  className="text-4xl font-black text-primary mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}