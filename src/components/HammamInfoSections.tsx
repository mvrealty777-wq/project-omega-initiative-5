import Icon from "@/components/ui/icon"
import { ArrowRight } from "lucide-react"
import { LeadDialog } from "@/components/LeadDialog"

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
  { image: "/img/3be05181-5308-4008-84a6-0ec4f3752e0a.webp", label: "Хаммам в квартире" },
  { image: "/img/46d08233-ac52-45d3-90d5-64f03b2339e4.webp", label: "Хаммам в доме" },
  { image: "/img/2c6499e2-dab2-48e2-b6fb-1f3c35b26dcb.webp", label: "Хаммам в коттедже" },
  { image: "/img/63c91419-2c88-48cc-9f5c-266189c6531c.webp", label: "Хаммам в SPA" },
  { image: "/img/b801265b-4c3d-48f5-90f1-f88410000916.webp", label: "Хаммам в фитнес-клубе" },
  { image: "/img/aee51d99-03f0-4f0f-ac8b-b8f6b75c4e52.webp", label: "Коммерческий хаммам" },
  { image: "/img/63e1e767-4594-4cea-ac62-219a55fb05e3.webp", label: "Маленький хаммам" },
  { image: "/img/5b932b55-ad78-4e33-9618-2a357b98d32b.webp", label: "Хаммам с лежаком" },
  { image: "/img/179d5466-8119-438c-983a-d987a9c24b1d.webp", label: "Хаммам с куполом" },
  { image: "/img/6d1fad22-aa36-4700-b383-fbd787a9be9a.webp", label: "Хаммам с мозаикой" },
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

export function HammamWhatIncludedSection() {
  return (
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
  )
}

export function HammamTypesSection() {
  return (
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
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[3/4] cursor-default">
              <img
                src={t.image}
                alt={t.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 p-3 font-bold text-sm text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HammamPricingSection() {
  return (
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
  )
}

export function HammamCostFactorsSection() {
  return (
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
  )
}

export function HammamBuildStepsSection() {
  return (
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
  )
}