import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"
import { MessengerPicker, messengerLabel } from "@/components/MessengerPicker"
import { sendLead } from "@/lib/sendLead"
import { CheckCircle, ChevronRight, ChevronLeft, Send } from "lucide-react"

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

interface Option {
  id: string
  label: string
  icon?: string
}

interface Question {
  id: string
  question: string
  options?: Option[]
  multiple?: boolean
  type?: "text" | "options"
}

const questions: Question[] = [
  {
    id: "location",
    question: "Где нужен хаммам?",
    options: [
      { id: "apartment", label: "Квартира", icon: "Building" },
      { id: "house", label: "Дом / коттедж", icon: "Home" },
      { id: "spa", label: "СПА / фитнес / отель", icon: "Building2" },
      { id: "other", label: "Другое", icon: "HelpCircle" },
    ],
  },
  {
    id: "area",
    question: "Какой размер помещения?",
    options: [
      { id: "xs", label: "До 4 м²", icon: "Minimize2" },
      { id: "s", label: "4–8 м²", icon: "Square" },
      { id: "m", label: "8–15 м²", icon: "Maximize2" },
      { id: "l", label: "Больше 15 м²", icon: "LayoutGrid" },
      { id: "unknown", label: "Не знаю", icon: "HelpCircle" },
    ],
  },
  {
    id: "scope",
    question: "Что нужно?",
    multiple: true,
    options: [
      { id: "project", label: "Проект", icon: "FileText" },
      { id: "turnkey", label: "Строительство под ключ", icon: "Hammer" },
      { id: "equipment", label: "Оборудование", icon: "Settings" },
      { id: "finish", label: "Отделка", icon: "Paintbrush" },
      { id: "consult", label: "Консультация", icon: "MessageCircle" },
    ],
  },
  {
    id: "stage",
    question: "На каком этапе объект?",
    options: [
      { id: "planning", label: "Только планируем", icon: "Lightbulb" },
      { id: "ready", label: "Помещение готово", icon: "CheckCircle2" },
      { id: "renovation", label: "Идёт ремонт", icon: "Hammer" },
      { id: "redo", label: "Нужно переделать старый хаммам", icon: "RefreshCw" },
    ],
  },
  {
    id: "city",
    question: "В каком городе объект?",
    type: "text",
  },
  {
    id: "timeline",
    question: "Когда планируете начать?",
    options: [
      { id: "now", label: "Срочно", icon: "Zap" },
      { id: "month", label: "В течение месяца", icon: "Calendar" },
      { id: "quarter", label: "1–3 месяца", icon: "CalendarDays" },
      { id: "later", label: "Позже", icon: "Clock" },
    ],
  },
]

export function HammamQuizBlock() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [textAnswers, setTextAnswers] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ name: "", phone: "", comment: "" })
  const [useMessenger, setUseMessenger] = useState(false)
  const [messenger, setMessenger] = useState("telegram")
  const [sent, setSent] = useState(false)

  const isContactStep = step === questions.length
  const progress = Math.round(((step) / (questions.length + 1)) * 100)
  const currentQ = !isContactStep ? questions[step] : null

  const toggleAnswer = (qId: string, optId: string, multiple?: boolean) => {
    setAnswers((prev) => {
      const cur = prev[qId] ?? []
      if (multiple) {
        return { ...prev, [qId]: cur.includes(optId) ? cur.filter((id) => id !== optId) : [...cur, optId] }
      }
      return { ...prev, [qId]: [optId] }
    })
  }

  const canNext = currentQ
    ? currentQ.type === "text"
      ? (textAnswers[currentQ.id] ?? "").length >= 2
      : (answers[currentQ.id]?.length ?? 0) > 0
    : contact.phone.length >= 5

  const handleNext = () => {
    if (step < questions.length) setStep((s) => s + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep((s) => s - 1)
  }

  const handleSubmit = () => {
    const summary = questions
      .map((q) => {
        if (q.type === "text") {
          const val = textAnswers[q.id]
          return val ? `${q.question}: ${val}` : null
        }
        const labels = q.options?.filter((o) => (answers[q.id] ?? []).includes(o.id)).map((o) => o.label) ?? []
        return labels.length ? `${q.question}: ${labels.join(", ")}` : null
      })
      .filter(Boolean)
      .join("\n")

    setSent(true)
    sendLead({
      name: contact.name,
      phone: contact.phone,
      source: "Хаммам — Квиз на странице",
      messenger: useMessenger ? messengerLabel(messenger) : undefined,
      comment: [summary, contact.comment].filter(Boolean).join("\n\n"),
    })
  }

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="section-badge mb-5 mx-auto">Расчёт стоимости</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Рассчитайте стоимость{" "}
            <span className="text-primary">хаммама под ключ</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
            Ответьте на 6 вопросов — подготовим точный расчёт под ваш объект в течение 15 минут
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-border bg-white">
          {/* Left — image */}
          <div className="relative hidden lg:block">
            <img
              src={CDN + "8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg"}
              alt="Хаммам под ключ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-lg font-bold leading-snug mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                400+ хаммамов построено<br />по всей России
              </p>
              <ul className="space-y-2">
                {["Гарантия 5 лет на работы", "Фиксированная цена в договоре", "Срок от 30 дней"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — quiz */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-6 pb-5 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Landmark" size={20} className="text-white" fallback="Droplets" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/70 uppercase tracking-wide">Квиз</div>
                  <div className="font-bold text-base leading-tight">Рассчитать стоимость хаммама</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-white/70 whitespace-nowrap flex-shrink-0">
                  {isContactStep ? "Последний шаг" : `${step + 1} из ${questions.length}`}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-6 flex-1 flex flex-col">
              {sent ? (
                <div className="text-center py-10 flex-1 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 bg-primary/10">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Заявка принята!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {useMessenger
                      ? `Напишем в ${messengerLabel(messenger)} в течение 15 минут с расчётом.`
                      : "Перезвоним в течение 15 минут и подготовим расчёт."}
                  </p>
                </div>
              ) : !isContactStep && currentQ ? (
                <div className="animate-fade-in-up flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-black text-foreground mb-4 leading-snug" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {currentQ.question}
                  </h3>
                  {currentQ.multiple && <p className="text-xs text-muted-foreground mb-3">Можно выбрать несколько</p>}

                  {currentQ.type === "text" ? (
                    <Input
                      autoFocus
                      value={textAnswers[currentQ.id] ?? ""}
                      onChange={(e) => setTextAnswers((p) => ({ ...p, [currentQ.id]: e.target.value }))}
                      onKeyDown={(e) => { if (e.key === "Enter" && canNext) handleNext() }}
                      placeholder="Введите город..."
                      className="h-11 rounded-xl text-base mb-4"
                    />
                  ) : (
                    <div className={`grid gap-2 mb-4 ${currentQ.options && currentQ.options.length === 5 ? "grid-cols-1" : "grid-cols-2"}`}>
                      {currentQ.options?.map((opt) => {
                        const selected = answers[currentQ.id]?.includes(opt.id)
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              toggleAnswer(currentQ.id, opt.id, currentQ.multiple)
                              if (!currentQ.multiple) setTimeout(handleNext, 220)
                            }}
                            className={`flex items-center gap-2.5 rounded-xl border-2 px-3.5 py-3 text-left transition-all text-sm font-medium ${
                              selected
                                ? "border-primary bg-primary/8 text-primary shadow-sm"
                                : "border-border bg-white text-foreground hover:border-primary/40 hover:bg-secondary/30"
                            }`}
                          >
                            {opt.icon && (
                              <Icon name={opt.icon} size={16} className={selected ? "text-primary flex-shrink-0" : "text-muted-foreground flex-shrink-0"} fallback="Circle" />
                            )}
                            <span className="leading-snug">{opt.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {(currentQ.multiple || currentQ.type === "text") && (
                    <button
                      onClick={handleNext}
                      disabled={!canNext}
                      className="btn-green w-full justify-center text-sm disabled:opacity-40 disabled:cursor-not-allowed mt-auto"
                    >
                      Продолжить <ChevronRight className="w-4 h-4" />
                    </button>
                  )}

                  {step > 0 && (
                    <button onClick={handleBack} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-3 mx-auto">
                      <ChevronLeft className="w-3.5 h-3.5" /> Назад
                    </button>
                  )}
                </div>
              ) : (
                <div className="animate-fade-in-up space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-black text-foreground mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Отлично! Куда отправить расчёт?
                  </h3>
                  <p className="text-sm text-muted-foreground">Подготовим персональное предложение на основе ваших ответов.</p>
                  <Input
                    value={contact.name}
                    onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Ваше имя"
                    className="h-11 rounded-xl"
                  />
                  <Input
                    type="tel"
                    required
                    value={contact.phone}
                    onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="Телефон *"
                    className="h-11 rounded-xl"
                  />
                  <MessengerPicker
                    enabled={useMessenger}
                    onEnabledChange={setUseMessenger}
                    value={messenger}
                    onValueChange={setMessenger}
                  />
                  <Textarea
                    value={contact.comment}
                    onChange={(e) => setContact((p) => ({ ...p, comment: e.target.value }))}
                    placeholder="Комментарий (необязательно)"
                    className="rounded-xl resize-none"
                    rows={2}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={contact.phone.length < 5}
                    className="btn-green w-full justify-center text-sm disabled:opacity-40 disabled:cursor-not-allowed mt-auto"
                  >
                    <Send className="w-4 h-4" />
                    {useMessenger ? `Написать в ${messengerLabel(messenger)}` : "Получить расчёт"}
                  </button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                  <button onClick={handleBack} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mx-auto">
                    <ChevronLeft className="w-3.5 h-3.5" /> Назад
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
