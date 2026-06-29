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
