import Icon from "@/components/ui/icon"

const categories = [
  { icon: "Flame", title: "Печи и каменки", text: "Электрические и дровяные печи Harvia, EOS, SAWO" },
  { icon: "CloudFog", title: "Парогенераторы", text: "Профессиональные парогенераторы для хамама" },
  { icon: "Lightbulb", title: "Освещение", text: "Влагостойкая подсветка, фибероптика, RGB" },
  { icon: "Armchair", title: "Полки и лежаки", text: "Абаши, липа, термодревесина, мрамор" },
  { icon: "Gem", title: "Соль и мозаика", text: "Гималайская соль, мозаика Bisazza, мрамор" },
  { icon: "Settings2", title: "Автоматика", text: "Пульты управления, датчики, климат-контроль" },
  { icon: "Droplets", title: "Купели и души", text: "Душ впечатлений, обливные устройства, купели" },
  { icon: "Wind", title: "Вентиляция", text: "Системы вентиляции и рекуперации воздуха" },
]

export function EquipmentChoiceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/f72b1241-0f67-4cdd-bcc5-fccadb542983.jpg"
                alt="Оборудование и материалы для сауны"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Плашка наличия */}
            <div className="absolute -bottom-5 left-5 right-5 sm:right-auto bg-white rounded-2xl shadow-xl px-5 py-4 border border-border flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                <Icon name="PackageCheck" className="w-6 h-6 text-primary" fallback="Check" />
              </span>
              <div>
                <p className="font-black text-foreground leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>Всё в наличии</p>
                <p className="text-xs text-muted-foreground">Со склада и под заказ по лучшей цене</p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="section-badge mb-4">Оборудование и материалы</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Выбор оборудования и <span className="text-primary">материалов для сауны</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-7">
              Всё оборудование и материалы у нас в продаже! Подберём комплектацию под ваш проект и бюджет —
              от печей и парогенераторов до отделочных материалов и автоматики.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((c) => (
                <div key={c.title} className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                    <Icon name={c.icon} className="w-5 h-5 text-primary" fallback="Check" />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-foreground leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-green mt-7 inline-flex">
              Подобрать оборудование
              <Icon name="ArrowRight" className="w-4 h-4" fallback="ChevronRight" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
