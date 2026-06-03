import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Hand",
    title: "Классический массаж",
    description:
      "Традиционный расслабляющий массаж всего тела, снимающий мышечное напряжение и усталость. Восстанавливает тонус, улучшает кровообращение и дарит глубокое расслабление.",
  },
  {
    icon: "Flame",
    title: "Тайский массаж",
    description:
      "Древняя практика работы с телом: сочетание акупрессуры, пассивной йоги и растяжки. Глубоко воздействует на мышцы и суставы, возвращая лёгкость и гибкость.",
  },
  {
    icon: "Droplets",
    title: "СПА-программы",
    description:
      "Комплексные велнес-программы, объединяющие несколько процедур в одно удовольствие. Пилинг, обёртывание, маска и массаж — всё для глубокого восстановления кожи и тела.",
  },
  {
    icon: "Sparkles",
    title: "Антистресс-массаж",
    description:
      "Специальная программа для снятия хронического стресса и нервного напряжения. Работа с воротниковой зоной, головой и лицом. Эффект заметен уже после первого сеанса.",
  },
  {
    icon: "Heart",
    title: "Массаж лица",
    description:
      "Лифтинг-массаж и уходовые процедуры для кожи лица. Скульптурирование овала, лимфодренаж, снятие отёков. Результат — сияющая кожа и молодой взгляд.",
  },
  {
    icon: "Leaf",
    title: "Стоун-терапия",
    description:
      "Массаж горячими вулканическими камнями. Тепло проникает глубоко в мышцы, устраняя спазмы и улучшая микроциркуляцию. Полное единение с природой.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit tracking-wider uppercase">
          Наши процедуры
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Искусство <span className="text-primary">заботы о себе</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Каждая процедура — это персональный ритуал восстановления, разработанный нашими мастерами с учётом потребностей вашего тела.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Sparkles" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
