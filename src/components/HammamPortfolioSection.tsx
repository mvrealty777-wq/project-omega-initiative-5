import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

const portfolioCases = [
  {
    img: CDN + "b14cf6dd-6668-414b-916f-634fa3822073.jpg",
    city: "Санкт-Петербург",
    area: "6 м²",
    works: "Гидроизоляция, лежак, купол, мозаика ручной укладки, монтаж парогенератора",
    term: "45 дней",
    equipment: "Парогенератор 9 кВт HygroMatik",
    budget: "от 1 000 000 ₽",
    title: "Хаммам в частном доме",
  },
  {
    img: CDN + "8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    city: "Москва",
    area: "14 м²",
    works: "Турецкие арки, звёздное небо, анатомический лежак, мозаика, генератор морского климата",
    term: "58 дней",
    equipment: "Парогенератор 15 кВт TYLÖ + генератор морского климата",
    budget: "от 2 000 000 ₽",
    title: "Классический хаммам с куполом",
  },
  {
    img: CDN + "4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
    city: "Санкт-Петербург",
    area: "10 м²",
    works: "Белый мрамор, золотые вставки, RGB-подсветка, купол, чебек с подогревом",
    term: "50 дней",
    equipment: "Парогенератор 12 кВт HygroMatik, RGB-контроллер",
    budget: "от 1 500 000 ₽",
    title: "Турецкая баня с золотым декором",
  },
  {
    img: CDN + "d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
    city: "Ленинградская область",
    area: "8 м²",
    works: "Морская тематика, бирюзовая мозаика, анатомический лежак, душ Виши",
    term: "45 дней",
    equipment: "Парогенератор 9 кВт + душ Виши",
    budget: "от 1 200 000 ₽",
    title: "Хаммам в морском стиле",
  },
  {
    img: CDN + "ee57d73f-708f-424e-8c6a-8829eb0e1bce.jpg",
    city: "Санкт-Петербург",
    area: "22 м²",
    works: "Хаммам + купель + зона отдыха, травертин, полный термальный цикл",
    term: "70 дней",
    equipment: "Парогенератор 18 кВт, купель с гидромассажем",
    budget: "от 3 000 000 ₽",
    title: "Комплекс: хаммам + зона охлаждения",
  },
  {
    img: CDN + "300aee80-ed49-410c-b117-9d48406ecb27.jpg",
    city: "Москва (отель)",
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
