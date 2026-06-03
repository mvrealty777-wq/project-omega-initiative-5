import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: "Flame",
    emoji: "🌲",
    title: "Финская сауна",
    description: "Классическая сухая сауна с температурой 80–100 °C. Строим из отборного финского бруса, оснащаем печами Harvia, Narvi или Huum.",
    color: "from-amber-50 to-orange-50",
    accent: "hsl(30 90% 55%)",
  },
  {
    icon: "Droplets",
    emoji: "🕌",
    title: "Турецкий хамам",
    description: "Влажный пар 100% и температура 40–55 °C. Мозаика, мрамор, подогрев чебека и стен, кессонный свод — всё «под ключ».",
    color: "from-blue-50 to-cyan-50",
    accent: "hsl(200 80% 50%)",
  },
  {
    icon: "TreePine",
    emoji: "♨️",
    title: "Русская баня",
    description: "Традиционная баня с мягким «живым» паром. Бревно или брус, кирпичная каменка, купель из лиственницы — всё по канонам.",
    color: "from-green-50 to-emerald-50",
    accent: "hsl(145 63% 36%)",
  },
  {
    icon: "Layers",
    emoji: "🏨",
    title: "Банные комплексы",
    description: "Многозонные объекты для отелей, ресторанов и загородных клубов: сауна + хамам + купель + зона отдыха.",
    color: "from-purple-50 to-indigo-50",
    accent: "hsl(260 60% 55%)",
  },
  {
    icon: "Wrench",
    emoji: "⚙️",
    title: "Инженерные системы",
    description: "Вентиляция, канализация, водоснабжение, электрика, парогенераторы и печи — монтируем своими силами без субподрядчиков.",
    color: "from-slate-50 to-gray-50",
    accent: "hsl(220 15% 45%)",
  },
  {
    icon: "Palette",
    emoji: "🎨",
    title: "Дизайн и отделка",
    description: "Авторский интерьер в любом стиле: скандинавский минимализм, восточный хамам, классическая русская баня. Работаем с деревом, мрамором, мозаикой.",
    color: "from-rose-50 to-pink-50",
    accent: "hsl(340 70% 55%)",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <div className="section-badge mb-4">Наши специализации</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-balance" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Что мы <span className="text-primary">строим</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
            Полный цикл работ без привлечения субподрядчиков. Один договор — одна ответственность.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} rounded-2xl p-6 border border-border/60 card-hover cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                  style={{ background: 'white' }}
                >
                  {service.emoji}
                </div>
                <ArrowRight
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: service.accent }}
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}