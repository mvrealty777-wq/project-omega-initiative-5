import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"
import { BanyaDecor } from "@/components/BanyaDecor"
import { ContactSection } from "@/components/ContactSection"
import { ServiceCasesSection } from "@/components/ServiceCasesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { VideoWorksSection } from "@/components/VideoWorksSection"
import { EquipmentBrandsSection } from "@/components/EquipmentBrandsSection"
import { Project3DSection } from "@/components/Project3DSection"
import { QuizSection } from "@/components/QuizSection"
import { FaqSection } from "@/components/FaqSection"
import { LeadDialog } from "@/components/LeadDialog"
import Icon from "@/components/ui/icon"
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"
import type { ServiceData } from "@/data/servicesData"
import { getServiceExtra } from "@/data/serviceExtras"
import { getServiceFaq } from "@/data/serviceFaq"
import { useSeo } from "@/hooks/useSeo"
import { organizationSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema"

interface Props {
  service: ServiceData
}

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

const whatIncluded = [
  "Замер помещения",
  "Проект и 3D-схема",
  "Расчёт мощности парогенератора",
  "Многослойная гидроизоляция",
  "Утепление и тёплый пол",
  "Формирование лежаков и купола",
  "Отделка плиткой и мозаикой",
  "Монтаж парогенератора",
  "Вентиляция и вытяжка",
  "Освещение и подсветка",
  "Запуск и пуско-наладка",
]

const hammamTypes = [
  { icon: "Home", label: "Хаммам в квартире" },
  { icon: "TreePine", label: "Хаммам в доме" },
  { icon: "Landmark", label: "Хаммам в коттедже" },
  { icon: "Sparkles", label: "Хаммам в SPA" },
  { icon: "Dumbbell", label: "Хаммам в фитнес-клубе" },
  { icon: "Building2", label: "Коммерческий хаммам" },
  { icon: "LayoutGrid", label: "Маленький хаммам" },
  { icon: "BedDouble", label: "Хаммам с лежаком" },
  { icon: "CircleDot", label: "Хаммам с куполом" },
  { icon: "Gem", label: "Хаммам с мозаикой" },
]

const pricingRows = [
  { service: "Проектирование хаммама", price: "от 30 000 ₽", note: "план + 3D + расчёт" },
  { service: "Хаммам под ключ малый (до 8 м²)", price: "от 700 000 ₽", note: "отделка, пар, свет" },
  { service: "Хаммам под ключ средний (8–20 м²)", price: "от 1 200 000 ₽", note: "полный комплекс" },
  { service: "Коммерческий хаммам", price: "индивидуально", note: "SPA, отели, фитнес" },
  { service: "Подбор и поставка парогенератора", price: "от 95 000 ₽", note: "HygroMatik, TYLÖ" },
  { service: "Монтаж парогенератора", price: "от 25 000 ₽", note: "с пуско-наладкой" },
]

const costFactors = [
  { icon: "Ruler", text: "Размер помещения" },
  { icon: "PencilRuler", text: "Форма и сложность конструкции" },
  { icon: "BedDouble", text: "Лежаки, купол, ниши" },
  { icon: "Gem", text: "Отделочный материал (мрамор, мозаика)" },
  { icon: "CloudFog", text: "Оборудование и мощность парогенератора" },
  { icon: "Wind", text: "Вентиляция и вытяжка" },
  { icon: "Droplets", text: "Тип гидроизоляции" },
  { icon: "MapPin", text: "Регион и удалённость объекта" },
  { icon: "Clock", text: "Сроки выполнения" },
  { icon: "Building2", text: "Частный или коммерческий объект" },
]

const buildSteps = [
  { n: "01", title: "Заявка", desc: "Оставляете заявку — перезваниваем за 15 минут" },
  { n: "02", title: "Консультация", desc: "Обсуждаем задачу, площадь, бюджет и стиль" },
  { n: "03", title: "Сбор данных", desc: "Уточняем параметры помещения удалённо или по фото" },
  { n: "04", title: "Замер", desc: "Бесплатный выезд замерщика или удалённый расчёт" },
  { n: "05", title: "Смета", desc: "Предварительная смета с фиксированными ценами" },
  { n: "06", title: "Проектирование", desc: "Проект, 3D-визуализация, чертежи и согласование" },
  { n: "07", title: "Оборудование", desc: "Подбор парогенератора, мозаики и арматуры" },
  { n: "08", title: "Договор", desc: "Подписываем договор с фиксированной ценой и сроками" },
  { n: "09", title: "Закупка", desc: "Закупаем материалы — контролируем качество" },
  { n: "10", title: "Монтаж", desc: "Гидроизоляция, конструктив, тёплый пол" },
  { n: "11", title: "Отделка", desc: "Мраморная облицовка, мозаика, купол, лежаки" },
  { n: "12", title: "Пуско-наладка", desc: "Запуск парогенератора, вентиляции и освещения" },
  { n: "13", title: "Сдача объекта", desc: "Принимаете объект, получаете гарантийные документы" },
]

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

function PortfolioCard({ c }: { c: typeof portfolioCases[0] }) {
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

export function HammamPageTemplate({ service }: Props) {
  const extra = getServiceExtra(service.slug)
  const faqItems = getServiceFaq(service.slug)
  const path = `/uslugi/${service.slug}`

  useSeo({
    title: "Хаммам под ключ в Санкт-Петербурге и по РФ | GeniusSPA",
    description: "Проектируем и строим хаммамы для квартир, домов, коттеджей, SPA и коммерческих объектов. Расчёт парогенератора, гидроизоляция, вентиляция, отделка. Цены от 700 000 ₽. Гарантия 5 лет.",
    image: service.image,
    keywords: "хаммам под ключ, строительство хаммама, турецкая баня, хаммам в квартире, хаммам в доме, хаммам СПб, хаммам цена",
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: "Главная", path: "/" },
        { name: "Хаммам под ключ", path },
      ]),
      serviceSchema({
        name: "Хаммам под ключ",
        description: "Проектируем и строим хаммамы для квартир, домов, коттеджей и SPA.",
        image: service.image,
        path,
      }),
    ],
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen banya-bg relative overflow-x-clip">
      <BanyaDecor />
      <div className="relative z-10">
        <Navbar />

        {/* === 1. HERO === */}
        <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={CDN + "8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg"}
              alt="Хаммам под ключ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm mb-6">
                <Icon name="Droplets" className="w-4 h-4" />
                Турецкие бани под ключ
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Хаммам под ключ в Санкт-Петербурге и по РФ
              </h1>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8">
                Проектируем и строим хаммамы для квартир, домов, коттеджей, СПА и коммерческих объектов. Рассчитываем парогенератор, гидроизоляцию, вентиляцию и отделку под ваше помещение.
              </p>
              <div className="flex flex-wrap gap-3">
                <LeadDialog source="Хаммам — Первый экран — Рассчитать" title="Рассчитать хаммам" submitText="Рассчитать стоимость">
                  <button className="btn-green text-base px-7 py-3.5">
                    Рассчитать хаммам
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </LeadDialog>
                <LeadDialog source="Хаммам — Первый экран — Смета" title="Получить смету на хаммам" submitText="Получить смету">
                  <button className="px-7 py-3.5 rounded-xl font-bold text-base text-white border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-200 flex items-center gap-2">
                    Получить смету
                  </button>
                </LeadDialog>
                <LeadDialog source="Хаммам — Первый экран — Консультация" title="Консультация специалиста" submitText="Жду звонка">
                  <button className="px-7 py-3.5 rounded-xl font-bold text-base text-white/80 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 flex items-center gap-2">
                    Консультация специалиста
                  </button>
                </LeadDialog>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Бесплатный замер",
                  "Фиксированная цена в договоре",
                  "Гарантия 5 лет",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === 2. ЧТО ВХОДИТ === */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="section-badge mb-5 mx-auto">Комплект услуг</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Что <span className="text-primary">входит в стоимость</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
                Строим хаммам «под ключ» — от замера до запуска парогенератора. Ничего дополнительно.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatIncluded.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-foreground text-sm leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === 3. КАКИЕ ХАММАМЫ СТРОИМ === */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="section-badge mb-5 mx-auto">Направления</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Какие <span className="text-primary">хаммамы строим</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {hammamTypes.map((t, i) => (
                <div key={i} className="group bg-white rounded-2xl p-5 border border-border shadow-sm hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3 cursor-default">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "hsl(145 63% 32% / 0.1)" }}>
                    <Icon name={t.icon} className="w-6 h-6 text-primary" fallback="Droplets" />
                  </span>
                  <span className="font-semibold text-sm text-foreground leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === 4. ЦЕНЫ === */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <div className="section-badge mb-5 mx-auto">Прозрачные цены</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Цены на <span className="text-primary">хаммам</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
                Указаны ориентировочные вилки. Точная стоимость — после бесплатного замера и фиксируется в договоре.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/40">
                    <th className="text-left px-6 py-4 text-sm font-bold text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>Услуга</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>Стоимость</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-foreground hidden sm:table-cell" style={{ fontFamily: "Montserrat, sans-serif" }}>Включает</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-secondary/20"}`}>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{row.service}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary whitespace-nowrap">{row.price}</td>
                      <td className="px-6 py-4 text-xs text-muted-foreground hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <LeadDialog source="Хаммам — Цены — Рассчитать" title="Рассчитать стоимость хаммама" submitText="Рассчитать">
                <button className="btn-green">
                  Рассчитать стоимость хаммама
                  <ArrowRight className="w-4 h-4" />
                </button>
              </LeadDialog>
            </div>
          </div>
        </section>

        {/* === 5. ОТ ЧЕГО ЗАВИСИТ СТОИМОСТЬ === */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="section-badge mb-5 mx-auto">Ценообразование</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
                От чего зависит <span className="text-primary">стоимость хаммама</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {costFactors.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-border shadow-sm flex flex-col items-center text-center gap-3">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(145 63% 32% / 0.1)" }}>
                    <Icon name={f.icon} className="w-5 h-5 text-primary" fallback="Info" />
                  </span>
                  <span className="text-sm font-medium text-foreground leading-tight">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === 6. ЭТАПЫ РАБОТ === */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="section-badge mb-5 mx-auto">Как мы работаем</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
                13 этапов от <span className="text-primary">заявки до сдачи</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {buildSteps.map((s, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm text-white" style={{ background: "linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))", fontFamily: "Montserrat, sans-serif" }}>
                    {s.n}
                  </span>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === 7. ПОРТФОЛИО === */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <div className="section-badge mb-5 mx-auto">Наши работы</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
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

        {/* === 8. ГАЛЕРЕЯ РАБОТ (из serviceExtras) === */}
        {extra && (
          <ServiceCasesSection title={extra.casesTitle} subtitle={extra.casesSubtitle} cases={extra.cases} />
        )}

        {/* === 9. 3D-ПРОЕКТ === */}
        <Project3DSection />

        {/* === 10. ВИДЕО === */}
        <VideoWorksSection />

        {/* === 11. БРЕНДЫ === */}
        <EquipmentBrandsSection />

        {/* === 12. ОТЗЫВЫ === */}
        {extra && (
          <TestimonialsSection
            title={extra.testimonialsTitle}
            subtitle={extra.testimonialsSubtitle}
            items={extra.testimonials}
          />
        )}

        {/* === 13. КВИЗ === */}
        <QuizSection />

        {/* === 14. FAQ === */}
        <FaqSection items={faqItems} />

        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}
