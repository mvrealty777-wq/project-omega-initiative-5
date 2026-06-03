import Icon from "@/components/ui/icon"

const products = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/464b6011-7ae6-43b3-97fc-325294ff8f77.jpg",
    title: "Вагонка для сауны",
    text: "Кедр, липа, абаши, термоосина. Шлифованная евровагонка для стен и потолка парной.",
    badge: "от 950 ₽/м²",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/9eeff464-1ea6-4fef-80b2-b76f3650b20d.jpg",
    title: "Электрокаменка",
    text: "Электрические печи Harvia, EOS, SAWO с пультом управления для саун от 3 до 20 м².",
    badge: "от 28 000 ₽",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bf2b4d3f-4b20-4fbe-9f62-a8f6c145ec49.jpg",
    title: "Дровяная печь",
    text: "Чугунные и стальные печи-каменки для бани и сауны со стеклянной дверцей и баком.",
    badge: "от 32 000 ₽",
  },
]

const features = [
  { icon: "BadgeCheck", text: "Только сертифицированное оборудование" },
  { icon: "Truck", text: "Доставка и монтаж по всей России" },
  { icon: "Wallet", text: "Прямые поставки — лучшая цена" },
]

export function EquipmentChoiceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-badge mb-4 mx-auto">Оборудование и материалы</div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Выбор оборудования и <span className="text-primary">материалов для сауны</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Всё оборудование и материалы у нас в продаже! Подберём комплектацию под ваш проект и бюджет.
          </p>
        </div>

        {/* Карточки товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {products.map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="relative h-48 sm:h-52 overflow-hidden bg-secondary/40">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full text-primary bg-white shadow-md" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {p.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества + CTA */}
        <div className="mt-7 rounded-2xl border border-border bg-white shadow-sm p-5 sm:p-6 flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 flex-1">
            {features.map((f) => (
              <span key={f.text} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Icon name={f.icon} className="w-5 h-5 text-primary flex-shrink-0" fallback="Check" />
                {f.text}
              </span>
            ))}
          </div>
          <a href="#contact" className="btn-green whitespace-nowrap flex-shrink-0">
            Подобрать оборудование
            <Icon name="ArrowRight" className="w-4 h-4" fallback="ChevronRight" />
          </a>
        </div>
      </div>
    </section>
  )
}
