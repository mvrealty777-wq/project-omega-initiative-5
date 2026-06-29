import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { MessengerPicker, messengerLabel } from "@/components/MessengerPicker"
import Icon from "@/components/ui/icon"
import { Venok } from "@/components/icons/Venok"
import { CheckCircle, ChevronRight, Send } from "lucide-react"
import type { ServiceData } from "@/data/servicesData"
import { getQuizBySlug } from "@/data/quizData"
import type { QuizOption } from "@/data/quizData"
import { sendLead } from "@/lib/sendLead"

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

const benefits = [
  { icon: "Wallet", text: "Бесплатный расчёт сметы", from: "hsl(145 63% 42%)", to: "hsl(145 70% 28%)" },
  { icon: "Box", text: "Дизайн-проект и 3D-визуализация", from: "hsl(210 80% 55%)", to: "hsl(220 80% 42%)" },
  { icon: "FileSignature", text: "Фиксированная цена и сроки в договоре", from: "hsl(38 92% 55%)", to: "hsl(28 90% 45%)" },
  { icon: "ShieldCheck", text: "Строим по ГОСТам и нормам пожарной безопасности", from: "hsl(0 75% 58%)", to: "hsl(355 75% 45%)" },
]

export function HammamHeroSection({ service }: { service: ServiceData }) {
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
