import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Venok } from "@/components/icons/Venok"
import Icon from "@/components/ui/icon"
import { CheckCircle, Send } from "lucide-react"
import { sendLead } from "@/lib/sendLead"
import type { ServiceData } from "@/data/servicesData"
import { QuizDialog } from "@/components/QuizDialog"
import { getQuizBySlug } from "@/data/quizData"

const benefits = [
  { text: "Бесплатный расчёт сметы", icon: "Wallet", from: "hsl(145 63% 42%)", to: "hsl(145 70% 28%)" },
  { text: "Дизайн-проект и 3D-визуализация", icon: "Box", from: "hsl(210 80% 55%)", to: "hsl(220 80% 42%)" },
  { text: "Фиксированная цена и сроки в договоре", icon: "FileSignature", from: "hsl(38 92% 55%)", to: "hsl(28 90% 45%)" },
  { text: "Строим по ГОСТам и нормам пожарной безопасности", icon: "ShieldCheck", from: "hsl(0 75% 58%)", to: "hsl(355 75% 45%)" },
]

interface Props {
  service: ServiceData
  /** Переопределение заголовка (для страниц подуслуг) */
  titleOverride?: string
  subtitleOverride?: string
  /** Дополнительная крошка между «Главная» и текущим пунктом */
  parentCrumb?: { label: string; to: string }
}

export function ServiceHero({ service, titleOverride, subtitleOverride, parentCrumb }: Props) {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sent, setSent] = useState(false)
  const quiz = getQuizBySlug(service.slug)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    sendLead({
      name: formData.name,
      phone: formData.phone,
      source: `Заявка с направления — ${titleOverride ?? service.cardTitle}`,
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={service.image} alt={service.heroTitle} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span>/</span>
          {parentCrumb && (
            <>
              <Link to={parentCrumb.to} className="hover:text-white transition-colors">{parentCrumb.label}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-white/90">{titleOverride ?? service.menuLabel}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — headline */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 mb-5"
              style={{ background: 'rgba(74,222,128,0.12)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Под ключ по всей России
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5 animate-fade-in-up"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {(() => {
                const title = (titleOverride ?? service.heroTitle).toUpperCase()
                const subtitle = subtitleOverride ?? service.heroSubtitle
                const idx = title.indexOf("ПОД КЛЮЧ")
                if (idx === -1) return <>{title}{subtitle && <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-bold">{subtitle}</span>}</>
                return (
                  <>
                    {title.slice(0, idx)}
                    <span className="text-green-400">«ПОД КЛЮЧ»</span>
                    {subtitle && <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-bold">{subtitle}</span>}
                  </>
                )
              })()}
            </h1>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg animate-fade-in-up animate-delay-200">
              {[
                { number: "400+", label: "объектов сдано" },
                { number: "10+", label: "лет опыта" },
                { number: "5 лет", label: "гарантия" },
              ].map((item) => (
                <div key={item.label} className="relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-2 py-3.5 sm:py-4 text-center overflow-hidden">
                  <Venok className="absolute inset-0 w-full h-full text-green-400/25 px-1.5 py-1.5" />
                  <div className="relative">
                    <div className="text-xl sm:text-3xl font-black text-green-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.number}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/75 mt-0.5 leading-tight">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div className="lg:justify-self-end w-full max-w-md animate-fade-in-up animate-delay-200">
            <div className="bg-white rounded-2xl shadow-2xl p-7">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Заявка принята!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Перезвоним в течение 15 минут и подготовим расчёт сметы.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-foreground mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Хотите быстро<br />просчитать проект?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5">
                    Вы получите просчёт в 3-х различных вариантах по цене
                  </p>

                  <ul className="space-y-3 mb-6">
                    {benefits.map((b) => (
                      <li key={b.text} className="flex items-center gap-3 text-sm font-medium text-foreground/85">
                        <span
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${b.from}, ${b.to})`,
                            boxShadow: `0 4px 10px -2px ${b.to}55, inset 0 1px 0 rgba(255,255,255,0.35)`,
                          }}
                        >
                          <Icon name={b.icon} className="w-5 h-5 text-white" fallback="Check" />
                        </span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="svc-hero-name" className="text-sm font-medium text-foreground">Имя</label>
                      <Input id="svc-hero-name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Ваше имя" className="h-11 rounded-xl border-border mt-1" />
                    </div>
                    <div>
                      <label htmlFor="svc-hero-phone" className="text-sm font-medium text-foreground">Телефон *</label>
                      <Input id="svc-hero-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                        placeholder="+7 900 123-45-67" className="h-11 rounded-xl border-border mt-1" />
                    </div>
                    <button type="submit" className="btn-green w-full justify-center text-sm">
                      <Send className="w-4 h-4" />
                      Отправить заявку и получить смету
                    </button>
                  </form>
                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки данных
                  </p>
                  {quiz && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground text-center mb-2.5">
                        Хотите точнее? Ответьте на несколько вопросов
                      </p>
                      <QuizDialog quiz={quiz}>
                        <button className="btn-green-outline w-full justify-center text-sm">
                          <Icon name="ClipboardList" className="w-4 h-4" fallback="List" />
                          Ответить на вопросы — получить расчёт
                        </button>
                      </QuizDialog>
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