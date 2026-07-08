import Icon from "@/components/ui/icon"
import { LeadDialog } from "@/components/LeadDialog"
import { ShoppingCart } from "lucide-react"

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

const hammamCards = [
  {
    image: "/img/313bf9f3-4a91-4c30-a626-72bcdb662233.webp",
    icon: "Hammer",
    title: "Строительство под ключ",
    text: "Берём на себя весь цикл: проект, материалы, монтаж, мраморная отделка, парогенератор. Вам не нужно ни о чём беспокоиться.",
  },
  {
    image: "/img/a29dedde-0213-4624-9390-cdba4a77dc06.webp",
    icon: "Box",
    title: "Дизайн и 3D-визуализация",
    text: "Разрабатываем уникальный дизайн-проект хаммама с детальной 3D-визуализацией. Вы увидите результат ещё до начала работ.",
  },
  {
    image: "/img/124b4fc9-6320-4a77-8b37-3b76e25dda80.webp",
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    text: "Предоставляем полную гарантию на мраморную отделку, гидроизоляцию и парогенератор. Гарантийное обслуживание.",
  },
  {
    image: "/img/937c588d-b4c7-4263-afb5-07c4cec1b579.webp",
    icon: "MapPin",
    title: "Бесплатный выезд замерщика",
    text: "Специалист приедет к вам бесплатно по всей России, сделает точные замеры и оценит технические условия.",
  },
  {
    image: "/img/29ee3e1d-8698-4c42-91bc-8a93f08eedd7.webp",
    icon: "Award",
    title: "Премиум материалы",
    text: "Официальный партнёр HygroMatik, TYLÖ, Bisazza. Используем только натуральный мрамор и сертифицированную мозаику.",
  },
  {
    image: "/img/f93e558e-f553-4625-bcf8-aa84401e6afc.webp",
    icon: "Wrench",
    title: "Сервисный центр",
    text: "Собственный сервисный центр для обслуживания парогенераторов и климат-систем. Быстрое реагирование на запросы.",
  },
]

const brands = ["Harvia", "TYLÖ", "EOS", "Jacuzzi", "ASTRAL", "SAWO", "HygroMatik"]

interface Props {
  slug?: string
}

export function EquipmentBrandsSection({ slug }: Props = {}) {
  const cards = slug === "hammam" ? hammamCards : defaultCards
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Оборудование и сервис</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Гарантируем лучшую цену <br className="hidden sm:block" />
            <span className="text-primary">на оборудование</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Мы не только строим, но и продаём оборудование. Являемся официальными дилерами всех ведущих брендов — поставки напрямую с заводов без посредников и наценок.
          </p>
          <a
            href="https://vam-vdom.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
          >
            <ShoppingCart className="w-4 h-4" />
            Перейти в интернет-магазин
          </a>
        </div>

        {/* Brand chips */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
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
                  loading="lazy"
                  decoding="async"
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
        <div className="mt-8 relative rounded-3xl p-7 sm:p-10 overflow-hidden text-white shadow-2xl"
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

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://vam-vdom.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white whitespace-nowrap text-base transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)', fontFamily: 'Montserrat, sans-serif' }}
              >
                <ShoppingCart className="w-5 h-5" />
                В магазин
              </a>
              <LeadDialog source="Секция «Бренды»" title="Узнать цену" submitText="Узнать цену">
                <button className="bg-white text-primary font-bold px-7 py-4 rounded-xl whitespace-nowrap hover:bg-white/90 transition-colors shadow-lg text-base"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Узнать цену
                </button>
              </LeadDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}