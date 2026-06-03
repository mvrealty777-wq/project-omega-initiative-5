const cards = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/987e5a97-e8af-440e-9e38-9a91fa41da8e.jpg",
    title: "Строительство под ключ",
    text: "Берём на себя весь цикл: проект, материалы, монтаж, отделка, оборудование. Вам не нужно ни о чём беспокоиться.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e2a81b72-7f5b-4c2a-85d5-788303de8cc9.jpg",
    title: "Дизайн и 3D-визуализация",
    text: "Разрабатываем уникальный дизайн-проект с детальной 3D-визуализацией. Вы увидите результат ещё до начала работ.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/60a4a4f4-163f-4897-9ac7-5d0f5308be21.jpg",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на все виды работ, материалы и оборудование. Гарантийное и постгарантийное обслуживание.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/7bde4507-c7cf-4f9f-ac8a-72ee406957fe.jpg",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/60a2c11b-58e5-4b6c-b192-6db6f7ab73ca.jpg",
    title: "Премиум оборудование",
    text: "Официальный партнёр Harvia, TYLÖ, EOS, HygroMatik, ASTRAL. Используем только сертифицированные материалы и оборудование.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/6111f315-b10f-4ad1-a1dc-d19ee1b1c843.jpg",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

export function EquipmentBrandsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Гарантируем лучшую цену <br className="hidden sm:block" />
            <span className="text-primary">на оборудование</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Уже более 10 лет мы работаем с ведущими брендами: Harvia, TYLÖ, EOS, Jacuzzi, ASTRAL, SAWO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
      </div>
    </section>
  )
}