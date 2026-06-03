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
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto">Полный цикл</div>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Выполним <span className="text-primary">полный цикл работ</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            От первого эскиза до запуска готового объекта — всё в одних руках. Вам не нужно искать
            подрядчиков, согласовывать этапы и контролировать качество. Мы берём это на себя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cycleItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute top-6 right-7 text-5xl font-black text-primary/10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}>
                <Icon name={item.icon} className="w-8 h-8 text-white" fallback="Wrench" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}