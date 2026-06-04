import Icon from "@/components/ui/icon"

const cycleItems = [
  {
    icon: "PencilRuler",
    title: "Проектирование",
    text: "Разрабатываем индивидуальный проект и 3D-визуализацию под ваш участок, бюджет и пожелания. Вы заранее видите будущий объект.",
  },
  {
    icon: "Hammer",
    title: "Строительство",
    text: "Возводим конструкции из качественных материалов: финская древесина, турецкий мрамор, влагостойкие основания. Всё по ГОСТам.",
  },
  {
    icon: "Settings",
    title: "Инженерные системы",
    text: "Монтируем вентиляцию, гидроизоляцию, подогрев пола, электрику и парогенераторы. Скрытые коммуникации, продуманные до мелочей.",
  },
  {
    icon: "Sparkles",
    title: "Отделка и запуск",
    text: "Выполняем финишную отделку, устанавливаем печи и оборудование, проводим пуско-наладку и передаём объект готовым к использованию.",
  },
]

export function FullCycleSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-9 sm:mb-12">
          <div className="section-badge mb-4 mx-auto">Полный цикл</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Выполним <span className="text-primary">полный цикл работ</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            От первого эскиза до запуска готового объекта — всё в одних руках. Без поиска подрядчиков
            и контроля качества. Мы берём это на себя.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Соединительная линия */}
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/40 via-primary/40 to-primary/40" />

          {cycleItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="relative z-10 mx-auto w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}>
                <Icon name={item.icon} className="w-8 h-8 text-white" fallback="Wrench" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-black text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {index + 1}
                </span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}