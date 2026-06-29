import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

const portfolioCases = [
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/f2861c41-8229-4af6-8a85-9b30511eb880.jpg",
    city: "Санкт-Петербург",
    area: "6 м²",
    works: "Золотая мозаика, арочный купол, анатомический лежак, мозаика ручной укладки, монтаж парогенератора",
    term: "45 дней",
    equipment: "Парогенератор 9 кВт HygroMatik",
    budget: "от 1 000 000 ₽",
    title: "Хаммам с золотым куполом",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/90ead80c-b0c2-49c2-8257-f9d3f1b1e974.jpg",
    city: "Москва",
    area: "10 м²",
    works: "Оникс, золотые вставки, звёздный потолок, анатомический лежак, мозаика",
    term: "50 дней",
    equipment: "Парогенератор 12 кВт HygroMatik",
    budget: "от 1 500 000 ₽",
    title: "Хаммам с ониксом и звёздным небом",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/982cc73c-cc78-4f90-bbe1-75ee48c58d5a.jpg",
    city: "Санкт-Петербург",
    area: "8 м²",
    works: "Синяя мозаика, восточные арки, звёздный купол, зелёный мрамор, подсветка",
    term: "45 дней",
    equipment: "Парогенератор 9 кВт + RGB-контроллер",
    budget: "от 1 200 000 ₽",
    title: "Турецкий хаммам в восточном стиле",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/cadc3d5e-4952-48f0-a2a8-b5a37efe37de.jpg",
    city: "Москва",
    area: "12 м²",
    works: "Синяя мозаика, мраморный чебек, восточные ниши с подсветкой, арки",
    term: "55 дней",
    equipment: "Парогенератор 12 кВт TYLÖ",
    budget: "от 1 800 000 ₽",
    title: "Классический хаммам с мраморным чебеком",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/98ae3dfd-65f2-4318-9c8b-433f68ae3dcb.jpg",
    city: "Санкт-Петербург",
    area: "14 м²",
    works: "Стеклянные двери, деревянные полоки, каменные стены, хромотерапия, печь с камнями",
    term: "40 дней",
    equipment: "Печь Harvia 9 кВт, хромотерапия",
    budget: "от 1 400 000 ₽",
    title: "Финская сауна с панорамным стеклом",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/92796291-681c-4f7e-8d59-c1027c50c1a2.jpg",
    city: "Ленинградская область",
    area: "16 м²",
    works: "Деревянные полоки, каменная отделка, стеклянная перегородка, душевая зона",
    term: "50 дней",
    equipment: "Печь Harvia 12 кВт + душ",
    budget: "от 1 600 000 ₽",
    title: "Сауна + душевая в частном доме",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/f1bcd008-2326-4a40-8e94-8d0c4ca1bc5d.jpg",
    city: "Москва (отель)",
    area: "22 м²",
    works: "Стеклянная сауна, LED-подсветка, арт-печать на стене, купель, душевая кабина",
    term: "65 дней",
    equipment: "Парогенератор 18 кВт, печь Harvia, LED-контроллер",
    budget: "от 2 500 000 ₽",
    title: "Дизайнерская сауна с арт-панно",
  },
  {
    img: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/a1db02d4-8c72-4a5a-b8b1-5032a9fec061.jpg",
    city: "Москва",
    area: "40 м²",
    works: "Хаммам + финская сауна + бассейн, автоматизация, коммерческая эксплуатация",
    term: "90 дней",
    equipment: "Парогенератор 24 кВт, печь Harvia, система автоматизации",
    budget: "индивидуально",
    title: "Банный комплекс для SPA-центра",
  },
]

type Case = typeof portfolioCases[0]

function PortfolioCard({ c }: { c: Case }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-lg bg-primary text-white">
          Хаммам
        </span>
        <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-lg bg-black/60 text-white">
          {c.area}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-foreground mb-1 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {c.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{c.city}</p>
        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div className="bg-secondary/50 rounded-lg p-2">
            <span className="text-muted-foreground block">Срок</span>
            <span className="font-semibold text-foreground">{c.term}</span>
          </div>
          <div className="bg-secondary/50 rounded-lg p-2">
            <span className="text-muted-foreground block">Бюджет</span>
            <span className="font-semibold text-foreground">{c.budget}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-xs text-primary font-semibold hover:underline mt-auto"
        >
          {open ? "Скрыть детали" : "Подробнее"}
          {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
        {open && (
          <div className="mt-3 space-y-1.5 text-xs text-muted-foreground border-t border-border pt-3">
            <p><span className="font-semibold text-foreground">Работы:</span> {c.works}</p>
            <p><span className="font-semibold text-foreground">Оборудование:</span> {c.equipment}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function HammamPortfolioSection() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="section-badge mb-5 mx-auto">Наши работы</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Реальные <span className="text-primary">кейсы хаммамов</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
            Площадь, сроки, оборудование и бюджет каждого объекта
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCases.map((c, i) => (
            <PortfolioCard key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}