const cycleItems = [
  {
    emoji: "🎨",
    title: "Проектирование",
    text: "Разрабатываем индивидуальный проект и 3D-визуализацию под ваш участок, бюджет и пожелания. Вы заранее видите будущий объект.",
  },
  {
    emoji: "🧱",
    title: "Строительство",
    text: "Возводим конструкции из качественных материалов: финская древесина, турецкий мрамор, влагостойкие основания. Всё по ГОСТам.",
  },
  {
    emoji: "🔧",
    title: "Инженерные системы",
    text: "Монтируем вентиляцию, гидроизоляцию, подогрев пола, электрику и парогенераторы. Скрытые коммуникации, продуманные до мелочей.",
  },
  {
    emoji: "✨",
    title: "Отделка и запуск",
    text: "Выполняем финишную отделку, устанавливаем печи и оборудование, проводим пуско-наладку и передаём объект готовым к использованию.",
  },
]

export function FullCycleSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto">Полный цикл</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Выполним <span className="text-primary">полный цикл работ</span> 🛠️
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            От первого эскиза до запуска готового объекта — всё в одних руках. Вам не нужно искать
            подрядчиков, согласовывать этапы и контролировать качество. Мы берём это на себя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cycleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5"
                style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                {item.emoji}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
