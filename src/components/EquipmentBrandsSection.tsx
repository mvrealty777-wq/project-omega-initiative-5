import Icon from "@/components/ui/icon"

const cards = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/987e5a97-e8af-440e-9e38-9a91fa41da8e.jpg",
    icon: "Hammer",
    title: "Строительство под ключ",
    text: "Берём на себя весь цикл: проект, материалы, монтаж, отделка, оборудование. Вам не нужно ни о чём беспокоиться.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e2a81b72-7f5b-4c2a-85d5-788303de8cc9.jpg",
    icon: "Box",
    title: "Дизайн и 3D-визуализация",
    text: "Разрабатываем уникальный дизайн-проект с детальной 3D-визуализацией. Вы увидите результат ещё до начала работ.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/60a4a4f4-163f-4897-9ac7-5d0f5308be21.jpg",
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на все виды работ, материалы и оборудование. Гарантийное и постгарантийное обслуживание.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/7bde4507-c7cf-4f9f-ac8a-72ee406957fe.jpg",
    icon: "MapPin",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/1d9a93e6-0139-47b7-9767-5d834fcaa6ed.jpg",
    icon: "Award",
    title: "Премиум оборудование",
    text: "Официальный партнёр Harvia, TYLÖ, EOS, HygroMatik, ASTRAL. Используем только сертифицированные материалы и оборудование.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/f72b1241-0f67-4cdd-bcc5-fccadb542983.jpg",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

const brands = ["Harvia", "TYLÖ", "EOS", "Jacuzzi", "ASTRAL", "SAWO", "HygroMatik"]

export function EquipmentBrandsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="section-badge mb-5 mx-auto">Оборудование и сервис</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Гарантируем лучшую цену <br className="hidden sm:block" />
            <span className="text-primary">на оборудование</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Уже более 10 лет мы работаем напрямую с ведущими брендами — без посредников и наценок.
          </p>
        </div>

        {/* Brand chips */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-4 sm:px-5 py-2 rounded-full bg-white border border-border shadow-sm text-sm sm:text-base font-bold text-foreground/70"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 shadow-md">
                  <Icon name={card.icon} className="w-6 h-6 text-primary" fallback="Check" />
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom guarantee banner */}
        <div className="mt-10 relative rounded-3xl p-7 sm:p-10 overflow-hidden text-white shadow-2xl"
          style={{ background: 'linear-gradient(135deg, hsl(145 63% 30%), hsl(150 70% 18%))' }}>
          {/* Декоративные круги */}
          <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute top-6 right-8 w-24 h-24 rounded-full border border-white/10" />

          <div className="relative flex flex-col lg:flex-row items-center gap-7 lg:gap-10">
            {/* Большой бейдж со скидкой */}
            <div className="flex-shrink-0 relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex flex-col items-center justify-center shadow-xl">
                <Icon name="BadgePercent" className="w-8 h-8 text-primary mb-0.5" fallback="Tag" />
                <span className="text-primary font-black text-sm leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>ЛУЧШАЯ</span>
                <span className="text-primary font-black text-sm leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>ЦЕНА</span>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Нашли дешевле? Сделаем ещё выгоднее
              </p>
              <p className="text-sm sm:text-base text-white/80 mb-5">
                Прямые поставки от заводов-производителей по всей России
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2.5">
                {[
                  { icon: "Factory", label: "Заводские цены" },
                  { icon: "ShieldCheck", label: "Официальная гарантия" },
                  { icon: "Truck", label: "Доставка по РФ" },
                ].map((f) => (
                  <span key={f.label} className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
                    <Icon name={f.icon} className="w-4.5 h-4.5 text-green-300" fallback="Check" />
                    {f.label}
                  </span>
                ))}
              </div>
            </div>

            <a href="#contact" className="bg-white text-primary font-bold px-7 py-4 rounded-xl whitespace-nowrap hover:bg-white/90 transition-colors shadow-lg flex-shrink-0 text-base"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Узнать цену
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}