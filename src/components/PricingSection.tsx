import { Check, ArrowRight, Zap } from "lucide-react"

const pricingTiers = [
  {
    name: "Баня / Сауна",
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/987e5a97-e8af-440e-9e38-9a91fa41da8e.jpg",
    price: "от 800 000",
    sub: "Частный объект до 30 м²",
    features: [
      "Финская сауна или русская баня",
      "Площадь до 30 м²",
      "Брус или бревно на выбор",
      "Печь и вентиляция в комплекте",
      "Отделка под ключ",
      "Гарантия 5 лет",
    ],
    highlighted: false,
    cta: "Получить расчёт",
  },
  {
    name: "Хамам",
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    price: "от 1 200 000",
    sub: "Турецкий хамам до 20 м²",
    features: [
      "Турецкий хамам до 20 м²",
      "Мозаичная или мраморная отделка",
      "Парогенератор и инженерия",
      "Подогрев пола и чебека",
      "Кессонный свод",
      "Гарантия 5 лет",
    ],
    highlighted: true,
    badge: "Популярный выбор",
    cta: "Получить расчёт",
  },
  {
    name: "SPA Комплекс",
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/300aee80-ed49-410c-b117-9d48406ecb27.jpg",
    price: "По запросу",
    sub: "Коммерческий объект",
    features: [
      "Сауна + хамам + бассейн + купель",
      "Зона отдыха и раздевалки",
      "Проект и согласования",
      "Полная инженерия объекта",
      "Гарантийное обслуживание",
      "Работа с юрлицами, договор",
    ],
    highlighted: false,
    cta: "Обсудить проект",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Стоимость</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground text-balance mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Прозрачные цены без<br />
            <span className="text-primary">скрытых платежей</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Точная стоимость — после замера и консультации. Все цены фиксируются в договоре.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary shadow-2xl shadow-primary/15 bg-white lg:scale-105"
                  : "border-border shadow-sm bg-white hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Big image */}
              <div className="relative h-52 overflow-hidden">
                <img src={tier.image} alt={tier.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {tier.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1.5"
                    style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}
                  >
                    <Zap className="w-3 h-3" />
                    {tier.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="font-black text-2xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tier.name}
                  </h3>
                  <p className="text-sm text-white/80">{tier.sub}</p>
                </div>
              </div>

              {/* Price */}
              <div className={`px-7 py-5 border-b ${tier.highlighted ? 'border-primary/20' : 'border-border'}`}>
                <span className="text-3xl font-black text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {tier.price === "По запросу" ? (
                    <span className="text-2xl text-primary">{tier.price}</span>
                  ) : (
                    <>
                      {tier.price}
                      <span className="text-base font-normal text-muted-foreground ml-1">₽</span>
                    </>
                  )}
                </span>
              </div>

              {/* Features */}
              <div className="p-7 flex flex-col flex-1">
                <ul className="space-y-3 flex-1 mb-7">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-[15px] text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.highlighted ? (
                  <a href="#contact" className="btn-green text-sm text-center justify-center w-full">
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a href="#contact" className="btn-green-outline text-sm text-center justify-center w-full">
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Все цены ориентировочные. Точная стоимость — после{" "}
          <span className="text-primary font-semibold">бесплатного выезда и замера</span>.
        </p>
      </div>
    </section>
  )
}