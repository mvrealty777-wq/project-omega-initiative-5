import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { CheckCircle, ChevronRight, ChevronLeft, Send } from "lucide-react"
import { sendLead } from "@/lib/sendLead"
import { MessengerPicker, messengerLabel } from "@/components/MessengerPicker"
import type { QuizConfig, QuizOption } from "@/data/quizData"

interface Props {
  quiz: QuizConfig
  children: React.ReactNode
}

export function QuizDialog({ quiz, children }: Props) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [contact, setContact] = useState({ name: "", phone: "" })
  const [useMessenger, setUseMessenger] = useState(false)
  const [messenger, setMessenger] = useState("telegram")
  const [sent, setSent] = useState(false)

  const questions = quiz.questions
  const isContactStep = step === questions.length
  const progress = Math.round((step / (questions.length + 1)) * 100)

  const currentQ = !isContactStep ? questions[step] : null

  const toggleAnswer = (questionId: string, optionId: string, multiple?: boolean) => {
    setAnswers((prev) => {
      const current = prev[questionId] ?? []
      if (multiple) {
        return {
          ...prev,
          [questionId]: current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId],
        }
      }
      return { ...prev, [questionId]: [optionId] }
    })
  }

  const canNext = currentQ
    ? (answers[currentQ.id]?.length ?? 0) > 0
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
        const selected = answers[q.id] ?? []
        const labels = q.options.filter((o) => selected.includes(o.id)).map((o) => o.label)
        return labels.length ? `${q.question}: ${labels.join(", ")}` : null
      })
      .filter(Boolean)
      .join("\n")

    setSent(true)
    sendLead({
      name: contact.name,
      phone: contact.phone,
      source: `Квиз — ${quiz.title}`,
      messenger: useMessenger ? messengerLabel(messenger) : undefined,
      comment: summary,
    })
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) {
      setTimeout(() => {
        setStep(0)
        setAnswers({})
        setContact({ name: "", phone: "" })
        setUseMessenger(false)
        setSent(false)
      }, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden gap-0">
        {sent ? (
          <div className="text-center py-14 px-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "hsl(145 63% 32% / 0.12)" }}
            >
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3
              className="text-2xl font-black text-foreground mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Заявка принята!
            </h3>
            <p className="text-muted-foreground">
              {useMessenger
                ? `Напишем вам в ${messengerLabel(messenger)} в течение 15 минут с персональным расчётом.`
                : "Перезвоним в течение 15 минут и подготовим персональный расчёт."}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className={`bg-gradient-to-r ${quiz.color} px-6 pt-6 pb-5 text-white`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={quiz.icon} size={20} className="text-white" fallback="HelpCircle" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/70 uppercase tracking-wide">Квиз</div>
                  <div className="font-bold text-base leading-tight">{quiz.title}</div>
                </div>
              </div>

              {/* Progress bar */}
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
            <div className="px-6 py-5">
              {!isContactStep && currentQ ? (
                <div className="animate-fade-in-up">
                  <h3
                    className="text-lg font-black text-foreground mb-4 leading-snug"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {currentQ.question}
                  </h3>
                  {currentQ.multiple && (
                    <p className="text-xs text-muted-foreground mb-3">Можно выбрать несколько</p>
                  )}
                  <div className="grid grid-cols-2 gap-2.5">
                    {currentQ.options.map((opt: QuizOption) => {
                      const selected = answers[currentQ.id]?.includes(opt.id)
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            toggleAnswer(currentQ.id, opt.id, currentQ.multiple)
                            if (!currentQ.multiple) setTimeout(handleNext, 200)
                          }}
                          className={`flex items-center gap-2.5 rounded-xl border-2 px-3.5 py-3 text-left transition-all text-sm font-medium ${
                            selected
                              ? "border-primary bg-primary/8 text-primary shadow-sm"
                              : "border-border bg-white text-foreground hover:border-primary/40 hover:bg-secondary/30"
                          }`}
                        >
                          {opt.icon && (
                            <Icon
                              name={opt.icon}
                              size={16}
                              className={selected ? "text-primary flex-shrink-0" : "text-muted-foreground flex-shrink-0"}
                              fallback="Circle"
                            />
                          )}
                          <span className="leading-snug">{opt.label}</span>
                          {selected && !currentQ.multiple && (
                            <CheckCircle className="w-4 h-4 text-primary ml-auto flex-shrink-0" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {currentQ.multiple && (
                    <button
                      onClick={handleNext}
                      disabled={!canNext}
                      className="btn-green w-full justify-center mt-4 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Продолжить
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                /* Contact step */
                <div className="animate-fade-in-up space-y-3">
                  <h3
                    className="text-lg font-black text-foreground mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Отлично! Куда отправить расчёт?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Подготовим персональное предложение на основе ваших ответов.
                  </p>
                  <Input
                    value={contact.name}
                    onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Ваше имя"
                    className="h-12 rounded-xl"
                  />
                  <Input
                    type="tel"
                    required
                    value={contact.phone}
                    onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="Телефон *"
                    className="h-12 rounded-xl"
                  />
                  <MessengerPicker
                    enabled={useMessenger}
                    onEnabledChange={setUseMessenger}
                    value={messenger}
                    onValueChange={setMessenger}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={contact.phone.length < 5}
                    className="btn-green w-full justify-center text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {useMessenger
                      ? `Написать в ${messengerLabel(messenger)}`
                      : "Получить расчёт"}
                  </button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки данных
                  </p>
                </div>
              )}
            </div>

            {/* Footer nav */}
            {step > 0 && !isContactStep && (
              <div className="px-6 pb-5">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Назад
                </button>
              </div>
            )}
            {isContactStep && (
              <div className="px-6 pb-5">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Назад
                </button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
