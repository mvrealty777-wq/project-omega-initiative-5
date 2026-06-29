import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
import { HammamQuizBlock } from "@/components/HammamQuizBlock"
import { FaqSection } from "@/components/FaqSection"
import { ReadySection } from "@/components/ReadySection"
import { HammamCompositionSection } from "@/components/HammamCompositionSection"
import { LeadDialog } from "@/components/LeadDialog"
import { Input } from "@/components/ui/input"
import { MessengerPicker, messengerLabel } from "@/components/MessengerPicker"
import Icon from "@/components/ui/icon"
import { Venok } from "@/components/icons/Venok"
import { ArrowRight, CheckCircle, CheckCircle2, ChevronDown, ChevronUp, ChevronRight, Send } from "lucide-react"
import type { ServiceData } from "@/data/servicesData"
import { getServiceExtra } from "@/data/serviceExtras"
import { getServiceFaq } from "@/data/serviceFaq"
import { getQuizBySlug } from "@/data/quizData"
import type { QuizOption } from "@/data/quizData"
import { sendLead } from "@/lib/sendLead"
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

const benefits = [
  { icon: "Wallet", text: "Бесплатный расчёт сметы", from: "hsl(145 63% 42%)", to: "hsl(145 70% 28%)" },
  { icon: "Box", text: "Дизайн-проект и 3D-визуализация", from: "hsl(210 80% 55%)", to: "hsl(220 80% 42%)" },
  { icon: "FileSignature", text: "Фиксированная цена и сроки в договоре", from: "hsl(38 92% 55%)", to: "hsl(28 90% 45%)" },
  { icon: "ShieldCheck", text: "Строим по ГОСТам и нормам пожарной безопасности", from: "hsl(0 75% 58%)", to: "hsl(355 75% 45%)" },
]

function HammamHero({ service }: { service: ServiceData }) {
  const quiz = getQuizBySlug("hammam")!
  const questions = quiz.questions
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [contact, setContact] = useState({ name: "", phone: "" })
  const [useMessenger, setUseMessenger] = useState(false)
  const [messenger, setMessenger] = useState("telegram")
  const [sent, setSent] = useState(false)

  const isContactStep = step === questions.length
  const progress = Math.round((step / (questions.length + 1)) * 100)
  const currentQ = !isContactStep ? questions[step] : null

  const toggleAnswer = (qId: string, optId: string, multiple?: boolean) => {
    setAnswers((prev) => {
      const cur = prev[qId] ?? []
      if (multiple) return { ...prev, [qId]: cur.includes(optId) ? cur.filter((id) => id !== optId) : [...cur, optId] }
      return { ...prev, [qId]: [optId] }
    })
  }

  const canNext = currentQ ? (answers[currentQ.id]?.length ?? 0) > 0 : contact.phone.length >= 5
  const handleNext = () => { if (step < questions.length) setStep((s) => s + 1) }
  const handleBack = () => { if (step > 0) setStep((s) => s - 1) }

  const handleSubmit = () => {
    const summary = questions
      .map((q) => {
        const labels = q.options.filter((o) => (answers[q.id] ?? []).includes(o.id)).map((o) => o.label)
        return labels.length ? `${q.question}: ${labels.join(", ")}` : null
      })
      .filter(Boolean).join("\n")
    setSent(true)
    sendLead({ name: contact.name, phone: contact.phone, source: "Хаммам — Квиз в Hero", messenger: useMessenger ? messengerLabel(messenger) : undefined, comment: summary })
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={CDN + "8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg"} alt="Хаммам под ключ" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-white/90">Хаммам под ключ</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 mb-5 bg-green-400/10 border border-green-400/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Под ключ по всей России
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5 animate-fade-in-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ХАММАМ или САУНА{" "}
              <span className="text-green-400">«ПОД КЛЮЧ»</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-bold">
                Строительство и отделка хаммамов по всей России
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-100">
              Полный комплекс услуг — от проектирования до выполнения отделочных работ и установки оборудования 👌
            </p>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg animate-fade-in-up animate-delay-200">
              {[{ number: "400+", label: "объектов сдано" }, { number: "10+", label: "лет опыта" }, { number: "5 лет", label: "гарантия" }].map((item) => (
                <div key={item.label} className="relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-2 py-3.5 sm:py-4 text-center overflow-hidden">
                  <Venok className="absolute inset-0 w-full h-full text-green-400/25 px-1.5 py-1.5" />
                  <div className="relative">
                    <div className="text-xl sm:text-3xl font-black text-green-400 font-heading">{item.number}</div>
                    <div className="text-[10px] sm:text-xs text-white/75 mt-0.5 leading-tight">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quiz card */}
          <div className="lg:justify-self-end w-full max-w-lg animate-fade-in-up animate-delay-200">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {!sent && (
                <div className="px-7 pt-7 pb-0">
                  <h2 className="text-xl font-black text-foreground mb-1">
                    Хотите быстро<br />просчитать проект?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Вы получите просчёт в 3-х различных вариантах по цене
                  </p>
                  <ul className="space-y-2.5 mb-4">
                    {benefits.map((b) => (
                      <li key={b.text} className="flex items-center gap-3 text-sm font-medium text-foreground/85">
                        <span className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                          style={{ background: `linear-gradient(135deg, ${b.from}, ${b.to})`, boxShadow: `0 4px 10px -2px ${b.to}55, inset 0 1px 0 rgba(255,255,255,0.35)` }}>
                          <Icon name={b.icon} className="w-4 h-4 text-white" fallback="Check" />
                        </span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border pt-3 mb-0">
                    <p className="text-xs text-muted-foreground text-center mb-2">Ответьте на 5 вопросов — рассчитаем стоимость</p>
                  </div>
                </div>
              )}
              {sent ? (
                <div className="text-center py-14 px-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/10">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Заявка принята!</h3>
                  <p className="text-muted-foreground text-sm">
                    {useMessenger ? `Напишем в ${messengerLabel(messenger)} в течение 15 минут.` : "Перезвоним в течение 15 минут."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-5 pb-4 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Landmark" size={18} className="text-white" fallback="Droplets" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wide">Квиз</div>
                        <div className="font-bold text-sm leading-tight">Рассчитать стоимость хаммама</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                      <span className="text-xs text-white/70 whitespace-nowrap flex-shrink-0">
                        {isContactStep ? "Последний шаг" : `${step + 1} из ${questions.length}`}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    {!isContactStep && currentQ ? (
                      <div>
                        <h3 className="text-sm font-black text-foreground mb-3 leading-snug">{currentQ.question}</h3>
                        {currentQ.multiple && <p className="text-xs text-muted-foreground mb-2">Можно выбрать несколько</p>}
                        <div className="grid grid-cols-2 gap-2">
                          {currentQ.options.map((opt: QuizOption) => {
                            const selected = answers[currentQ.id]?.includes(opt.id)
                            return (
                              <button key={opt.id} type="button"
                                onClick={() => { toggleAnswer(currentQ.id, opt.id, currentQ.multiple); if (!currentQ.multiple) setTimeout(handleNext, 200) }}
                                className={`flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left transition-all text-xs font-medium ${selected ? "border-primary bg-primary/8 text-primary shadow-sm" : "border-border bg-white text-foreground hover:border-primary/40"}`}>
                                {opt.icon && <Icon name={opt.icon} size={14} className={selected ? "text-primary flex-shrink-0" : "text-muted-foreground flex-shrink-0"} fallback="Circle" />}
                                <span className="leading-snug">{opt.label}</span>
                              </button>
                            )
                          })}
                        </div>
                        {currentQ.multiple && (
                          <button onClick={handleNext} disabled={!canNext} className="btn-green w-full justify-center mt-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                            Продолжить <ChevronRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        <h3 className="text-base font-black text-foreground mb-1">Отлично! Куда отправить расчёт?</h3>
                        <p className="text-xs text-muted-foreground mb-2">Подготовим персональное предложение.</p>
                        <Input value={contact.name} onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))} placeholder="Ваше имя" className="h-10 rounded-xl" />
                        <Input type="tel" required value={contact.phone} onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))} placeholder="Телефон *" className="h-10 rounded-xl" />
                        <MessengerPicker enabled={useMessenger} onEnabledChange={setUseMessenger} value={messenger} onValueChange={setMessenger} />
                        <button onClick={handleSubmit} disabled={contact.phone.length < 5} className="btn-green w-full justify-center text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                          <Send className="w-4 h-4" />
                          {useMessenger ? `Написать в ${messengerLabel(messenger)}` : "Получить расчёт"}
                        </button>
                        <p className="text-[11px] text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки данных</p>
                      </div>
                    )}
                  </div>
                  {step > 0 && !isContactStep && (
                    <div className="px-6 pb-4">
                      <button onClick={handleBack} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        ← Назад
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <HammamHero service={service} />

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

        {/* === Из чего состоит хаммам === */}
        <HammamCompositionSection />

        {/* === 7. ПОРТФОЛИО === */}
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

        {/* === 8. ГАЛЕРЕЯ РАБОТ (из serviceExtras) === */}
        {extra && (
          <ServiceCasesSection title={extra.casesTitle} subtitle={extra.casesSubtitle} cases={extra.cases} />
        )}

        {/* === Готовы реализовать === */}
        <ReadySection slug="hammam" />

        {/* === 9. 3D-ПРОЕКТ === */}
        <Project3DSection slug="hammam" />

        {/* === 10. ВИДЕО === */}
        <VideoWorksSection />

        {/* === 11. БРЕНДЫ === */}
        <EquipmentBrandsSection slug="hammam" />

        {/* === 12. ОТЗЫВЫ === */}
        {extra && (
          <TestimonialsSection
            title={extra.testimonialsTitle}
            subtitle={extra.testimonialsSubtitle}
            items={extra.testimonials}
          />
        )}

        {/* === 13. КВИЗ === */}
        <HammamQuizBlock />

        {/* === 14. FAQ === */}
        <FaqSection items={faqItems} />

        <ContactSection />
        <Footer />
        <FloatingContacts />
      </div>
    </main>
  )
}