import Icon from "@/components/ui/icon"
import { Venok } from "@/components/icons/Venok"
import type { AboutValue, AboutStat } from "@/data/serviceContent"

const defaultValues: AboutValue[] = [
  { icon: "Award", title: "Опыт и экспертиза", description: "Более 10 лет строим сауны и хамамы — знаем все нюансы от фундамента до отделки" },
  { icon: "KeyRound", title: "Работа под ключ", description: "Проект, строительство, инженерия, отделка и запуск — всё в одних руках" },
  { icon: "Gem", title: "Качественные материалы", description: "Финская древесина, турецкий мрамор — только проверенные поставщики" },
  { icon: "Ruler", title: "Индивидуальный проект", description: "Каждый объект проектируем с нуля под ваш участок, бюджет и стиль" },
  { icon: "ShieldCheck", title: "Гарантия 5 лет", description: "Письменная гарантия на конструктив и оборудование, быстро устраняем замечания" },
  { icon: "Clock", title: "Соблюдение сроков", description: "Фиксируем сроки в договоре — за 10 лет не сорвали ни одной сдачи" },
]

const defaultStats: AboutStat[] = [
  { icon: "CalendarDays", number: "10+", label: "Лет на рынке" },
  { icon: "Home", number: "400+", label: "Объектов построено" },
  { icon: "LayoutGrid", number: "8", label: "Видов услуг" },
  { icon: "ShieldCheck", number: "5 лет", label: "Гарантия" },
]

interface Props {
  subtitle?: string
  values?: AboutValue[]
  stats?: AboutStat[]
}

export function AboutSection({ subtitle, values: valuesProp, stats: statsProp }: Props = {}) {
  const values = valuesProp ?? defaultValues
  const stats = statsProp ?? defaultStats
  return (
    <section id="about" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">О компании GeniusSPA</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Почему клиенты <span className="text-primary">выбирают нас?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle ?? "Собственная команда без субподрядчиков — гарантия качества, сроков и единой ответственности за результат."}
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                <Icon name={value.icon} className="w-6 h-6 text-primary" fallback="Check" />
              </div>
              <div>
                <p className="font-bold text-lg text-foreground mb-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{value.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 rounded-2xl overflow-hidden p-6 sm:p-8"
          style={{ background: 'linear-gradient(135deg, hsl(145 63% 32%), hsl(145 70% 22%))' }}>
          {stats.map((stat, index) => (
            <div key={index} className="relative text-center text-white flex flex-col items-center justify-center py-2">
              <Venok className="absolute inset-0 mx-auto h-full text-white/20" />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}