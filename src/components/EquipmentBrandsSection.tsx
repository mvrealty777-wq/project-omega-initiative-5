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
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/60a2c11b-58e5-4b6c-b192-6db6f7ab73ca.jpg",
    icon: "Award",
    title: "Премиум оборудование",
    text: "Официальный партнёр Harvia, TYLÖ, EOS, HygroMatik, ASTRAL. Используем только сертифицированные материалы и оборудование.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/6111f315-b10f-4ad1-a1dc-d19ee1b1c843.jpg",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

const brands = ["Harvia", "TYLÖ", "EOS", "Jacuzzi", "ASTRAL", "SAWO", "HygroMatik"]

export function EquipmentBrandsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="section-badge mb-5 mx-auto">Оборудование и сервис</div>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4"
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
        <div className="mt-10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-white"
          style={{ background: 'linear-gradient(135deg, hsl(145 63% 32%), hsl(145 70% 22%))' }}>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/15 items-center justify-center flex-shrink-0">
              <Icon name="BadgePercent" className="w-7 h-7 text-white" fallback="Tag" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Нашли дешевле? Сделаем ещё выгоднее
              </p>
              <p className="text-sm sm:text-base text-white/80 mt-1">
                Прямые поставки от заводов-производителей по всей России
              </p>
            </div>
          </div>
          <a href="#contact" className="bg-white text-primary font-bold px-6 py-3.5 rounded-xl whitespace-nowrap hover:bg-white/90 transition-colors shadow-lg flex-shrink-0"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Узнать цену
          </a>
        </div>
      </div>
    </section>
  )
}