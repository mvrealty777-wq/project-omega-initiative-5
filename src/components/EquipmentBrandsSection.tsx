import Icon from "@/components/ui/icon"
import { LeadDialog } from "@/components/LeadDialog"

interface Props {
  slug?: string
}

// ── Base cards (default / sauna context) ──────────────────────────────────────
const defaultCards = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/033178db-5e79-4aec-b186-7d77bb86a892.jpg",
    icon: "Hammer",
    title: "Строительство под ключ",
    text: "Берём на себя весь цикл: проект, материалы, монтаж, отделка, оборудование. Вам не нужно ни о чём беспокоиться.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e81a9bb5-78db-4658-9428-b84d20ab1011.jpg",
    icon: "Box",
    title: "Дизайн и 3D-визуализация",
    text: "Разрабатываем уникальный дизайн-проект с детальной 3D-визуализацией. Вы увидите результат ещё до начала работ.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/09c8d356-2430-44e5-8306-455f9975a670.jpg",
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на все виды работ, материалы и оборудование. Гарантийное и постгарантийное обслуживание.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/56eeb1e9-8225-495f-9198-98a6b444bb21.jpg",
    icon: "MapPin",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/1a3ddb93-6269-4317-9e18-b58d210c901e.jpg",
    icon: "Award",
    title: "Премиум оборудование",
    text: "Официальный партнёр Harvia, TYLÖ, EOS, HygroMatik, ASTRAL. Используем только сертифицированные материалы и оборудование.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d596455c-d3b0-42da-8561-a00382738d8f.jpg",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

// ── Hammam-specific card overrides (slots 0, 1, 4 replaced) ──────────────────
const hammamCards = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/033178db-5e79-4aec-b186-7d77bb86a892.jpg",
    icon: "CloudFog",
    title: "Парогенераторы HygroMatik / TYLÖ",
    text: "Профессиональные парогенераторы с системой ароматерапии и автоматикой климата. Официальные поставки без наценок.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e81a9bb5-78db-4658-9428-b84d20ab1011.jpg",
    icon: "Gem",
    title: "Мрамор и мозаика Bisazza",
    text: "Натуральный мрамор и мозаика Bisazza ручной выкладки. Поставляем напрямую с заводов — по заводским ценам.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/09c8d356-2430-44e5-8306-455f9975a670.jpg",
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на все виды работ, материалы и оборудование. Гарантийное и постгарантийное обслуживание.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/56eeb1e9-8225-495f-9198-98a6b444bb21.jpg",
    icon: "MapPin",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/1a3ddb93-6269-4317-9e18-b58d210c901e.jpg",
    icon: "Lightbulb",
    title: "Подсветка и климат-контроль",
    text: "Системы «Звёздное небо», RGB-подсветка, умное управление микроклиматом. Полная интеграция под ключ.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d596455c-d3b0-42da-8561-a00382738d8f.jpg",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

// ── Sauna-specific card overrides ─────────────────────────────────────────────
const saunaCards = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/033178db-5e79-4aec-b186-7d77bb86a892.jpg",
    icon: "Flame",
    title: "Печи Harvia / EOS / SAWO",
    text: "Официальный партнёр ведущих производителей печей. Дровяные, электрические, газовые — любой мощности и форматов.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e81a9bb5-78db-4658-9428-b84d20ab1011.jpg",
    icon: "TreePine",
    title: "Вагонка и натуральное дерево",
    text: "Абаш, липа, кедр, осина — поставляем сертифицированные пиломатериалы напрямую с деревообрабатывающих предприятий.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/09c8d356-2430-44e5-8306-455f9975a670.jpg",
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на все виды работ, материалы и оборудование. Гарантийное и постгарантийное обслуживание.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/56eeb1e9-8225-495f-9198-98a6b444bb21.jpg",
    icon: "MapPin",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/1a3ddb93-6269-4317-9e18-b58d210c901e.jpg",
    icon: "Gem",
    title: "Камни и банные аксессуары",
    text: "Жадеит, талькохлорит, габбро-диабаз и полный комплект банных аксессуаров от ведущих поставщиков.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d596455c-d3b0-42da-8561-a00382738d8f.jpg",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

// ── Pool-specific card overrides ──────────────────────────────────────────────
const poolCards = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/033178db-5e79-4aec-b186-7d77bb86a892.jpg",
    icon: "Filter",
    title: "Фильтрация Astral / Hayward",
    text: "Профессиональные системы водоподготовки и фильтрации. Официальные поставки напрямую от производителей.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e81a9bb5-78db-4658-9428-b84d20ab1011.jpg",
    icon: "Thermometer",
    title: "Системы подогрева воды",
    text: "Тепловые насосы, электрические и газовые нагреватели ведущих брендов. Экономичный и стабильный нагрев.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/09c8d356-2430-44e5-8306-455f9975a670.jpg",
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на все виды работ, материалы и оборудование. Гарантийное и постгарантийное обслуживание.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/56eeb1e9-8225-495f-9198-98a6b444bb21.jpg",
    icon: "MapPin",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/1a3ddb93-6269-4317-9e18-b58d210c901e.jpg",
    icon: "Lightbulb",
    title: "Подводная подсветка",
    text: "Профессиональные LED-системы подводного освещения. Контроллеры, RGB-режимы, управление со смартфона.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d596455c-d3b0-42da-8561-a00382738d8f.jpg",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания и ремонта. Быстрое реагирование на любые запросы клиентов.",
  },
]

const brands = ["Harvia", "TYLÖ", "EOS", "Jacuzzi", "ASTRAL", "SAWO", "HygroMatik"]

const bannerStats = [
  { value: "10+ лет", label: "Прямые контракты с заводами" },
  { value: "0 наценок", label: "Заводская цена без посредников" },
  { value: "Официальная гарантия", label: "На всё оборудование" },
]

function getContent(slug?: string): { title: JSX.Element; subtitle: string; cards: typeof defaultCards } {
  switch (slug) {
    case "hammam":
      return {
        title: (
          <>
            Оборудование для хаммама —{" "}
            <span className="text-primary">лучшая цена</span>
          </>
        ),
        subtitle: "Прямые поставки парогенераторов, мрамора и отделочных материалов — без посредников и переплат.",
        cards: hammamCards,
      }
    case "sauna":
      return {
        title: (
          <>
            Оборудование для сауны —{" "}
            <span className="text-primary">лучшая цена</span>
          </>
        ),
        subtitle: "Печи, вагонка, камни и аксессуары напрямую от производителей. Более 10 лет прямых контрактов.",
        cards: saunaCards,
      }
    case "pool":
      return {
        title: (
          <>
            Оборудование для бассейна —{" "}
            <span className="text-primary">лучшая цена</span>
          </>
        ),
        subtitle: "Фильтрация, подогрев, подсветка и автоматика — официальные поставки без переплат.",
        cards: poolCards,
      }
    default:
      return {
        title: (
          <>
            Гарантируем лучшую цену{" "}
            <br className="hidden sm:block" />
            <span className="text-primary">на оборудование</span>
          </>
        ),
        subtitle: "Уже более 10 лет мы работаем напрямую с ведущими брендами — без посредников и наценок.",
        cards: defaultCards,
      }
  }
}

export function EquipmentBrandsSection({ slug }: Props) {
  const { title, subtitle, cards } = getContent(slug)

  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        {/* Заголовок */}
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Оборудование и сервис</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Brand chips */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-4 sm:px-5 py-2 rounded-full bg-white border border-border shadow-sm text-sm sm:text-base font-bold text-foreground/70 font-heading hover:border-primary/40 hover:text-foreground transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Карточки */}
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
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Нижний баннер — переработанный ── */}
        <div className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl text-white bg-gradient-to-br from-green-700 to-green-900">
          {/* Декоративные элементы фона */}
          <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-6 right-40 w-20 h-20 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute bottom-8 right-20 w-10 h-10 rounded-full border border-white/10 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Левая часть — текст + кнопка */}
            <div className="p-7 sm:p-10 flex flex-col justify-center gap-5">
              <div>
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-3"
                >
                  Нашли дешевле?
                  <br />
                  <span className="text-green-300">Скажите нам</span> — снизим цену
                </p>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-sm">
                  Прямые поставки от заводов-производителей по всей России. Если вы нашли дешевле —
                  мы сделаем цену ещё выгоднее.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <LeadDialog source="Секция «Бренды» — нашли дешевле" title="Узнать цену" submitText="Узнать цену">
                  <button className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors shadow-lg text-sm font-heading">
                    <Icon name="BadgePercent" className="w-4 h-4" fallback="Tag" />
                    Узнать цену
                  </button>
                </LeadDialog>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Icon name="Clock" className="w-4 h-4 text-green-300 flex-shrink-0" fallback="Timer" />
                  Ответим за 15 минут
                </div>
              </div>
            </div>

            {/* Правая часть — 3 стат-карточки */}
            <div className="p-7 sm:p-10 flex flex-col justify-center gap-4">
              {bannerStats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4 bg-white/[0.08] border border-white/[0.12]"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.12]">
                    <Icon
                      name={
                        stat.value === "10+ лет"
                          ? "Factory"
                          : stat.value === "0 наценок"
                          ? "BadgePercent"
                          : "ShieldCheck"
                      }
                      className="w-5 h-5 text-green-300"
                      fallback="Check"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-black text-white leading-none font-heading">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5 leading-snug">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}