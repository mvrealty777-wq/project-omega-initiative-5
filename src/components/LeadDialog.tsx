import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { CheckCircle, Send, ChevronLeft } from "lucide-react"
import { sendLead } from "@/lib/sendLead"
import { MessengerPicker, messengerLabel } from "@/components/MessengerPicker"

const OBJECT_TYPES = [
  { id: "hammam", label: "Хаммам", icon: "Landmark", color: "#7C3AED" },
  { id: "sauna", label: "Сауна / Баня", icon: "Flame", color: "#EA580C" },
  { id: "pool", label: "Бассейн", icon: "Waves", color: "#0891B2" },
  { id: "salt", label: "Соляная пещера", icon: "Gem", color: "#DB2777" },
  { id: "complex", label: "Банный комплекс", icon: "Building2", color: "#059669" },
  { id: "cooling", label: "Охлаждение / Купель", icon: "Snowflake", color: "#38BDF8" },
  { id: "infrared", label: "ИК-сауна", icon: "Sun", color: "#D97706" },
  { id: "other", label: "Другое", icon: "HelpCircle", color: "#6B7280" },
]

interface Props {
  children: React.ReactNode
  source: string
  title?: string
  description?: string
  submitText?: string
}

export function LeadDialog({ children, source, title, description, submitText }: Props) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<"object" | "form">("object")
  const [objectType, setObjectType] = useState("")
  const [data, setData] = useState({ name: "", phone: "" })
  const [useMessenger, setUseMessenger] = useState(false)
  const [messenger, setMessenger] = useState("telegram")
  const [sent, setSent] = useState(false)

  const selectedType = OBJECT_TYPES.find((t) => t.id === objectType)

  const handleSelectType = (id: string) => {
    setObjectType(id)
    setStep("form")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    sendLead({
      name: data.name,
      phone: data.phone,
      source,
      messenger: useMessenger ? messengerLabel(messenger) : undefined,
      comment: selectedType ? `Тип объекта: ${selectedType.label}` : undefined,
    })
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) {
      setTimeout(() => {
        setSent(false)
        setStep("object")
        setObjectType("")
        setData({ name: "", phone: "" })
        setUseMessenger(false)
      }, 250)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[460px] gap-0 p-0 overflow-hidden">

        {/* Успех */}
        {sent ? (
          <div className="text-center py-12 px-8">
            <DialogHeader className="sr-only">
              <DialogTitle>Заявка принята</DialogTitle>
              <DialogDescription>Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</DialogDescription>
            </DialogHeader>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "hsl(145 63% 32% / 0.12)" }}>
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2">
              Заявка принята!
            </h3>
            <p className="text-muted-foreground text-sm">
              {useMessenger
                ? `Напишем вам в ${messengerLabel(messenger)} в течение 15 минут.`
                : "Перезвоним в течение 15 минут и подготовим расчёт."}
            </p>
            {selectedType && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
                style={{ background: selectedType.color }}>
                <Icon name={selectedType.icon} size={16} className="text-white" fallback="Circle" />
                {selectedType.label}
              </div>
            )}
          </div>
        ) : step === "object" ? (
          /* Шаг 1 — выбор типа объекта */
          <div>
            <div className="px-6 pt-6 pb-4 border-b border-border">
              <DialogHeader className="sr-only">
                <DialogTitle>{title ?? "Получить расчёт"}</DialogTitle>
                <DialogDescription>Выберите тип объекта, который вы хотите построить.</DialogDescription>
              </DialogHeader>
              <h2 className="text-lg font-black text-foreground">
                {title ?? "Получить расчёт"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Что хотите построить?
              </p>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2">
              {OBJECT_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleSelectType(type.id)}
                  className="group flex items-center gap-3 rounded-xl border-2 border-border bg-white hover:border-primary/40 px-3.5 py-3 text-left transition-all hover:shadow-sm hover:-translate-y-0.5"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white transition-transform group-hover:scale-110"
                    style={{ background: type.color }}
                  >
                    <Icon name={type.icon} size={16} className="text-white" fallback="Circle" />
                  </span>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground text-center pb-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки данных
            </p>
          </div>
        ) : (
          /* Шаг 2 — контактная форма */
          <div>
            {/* Header с выбранным типом */}
            <div className="px-6 pt-5 pb-4 border-b border-border">
              <button
                type="button"
                onClick={() => setStep("object")}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-3 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Изменить выбор
              </button>
              <DialogHeader>
                <DialogTitle>
                  {selectedType ? (
                    <span className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: selectedType.color }}
                      >
                        <Icon name={selectedType.icon} size={14} className="text-white" fallback="Circle" />
                      </span>
                      {selectedType.label} — расчёт стоимости
                    </span>
                  ) : (title ?? "Получить расчёт")}
                </DialogTitle>
                <DialogDescription>
                  {description ?? "Оставьте контакты — перезвоним и подготовим бесплатный расчёт."}
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-4 space-y-3">
              <Input
                value={data.name}
                onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
                placeholder="Ваше имя"
                className="h-12 rounded-xl"
              />
              <Input
                type="tel"
                required
                value={data.phone}
                onChange={(e) => setData((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Телефон *"
                className="h-12 rounded-xl"
              />
              <MessengerPicker
                enabled={useMessenger}
                onEnabledChange={setUseMessenger}
                value={messenger}
                onValueChange={setMessenger}
              />
              <button type="submit" className="btn-green w-full justify-center text-sm">
                <Send className="w-4 h-4" />
                {useMessenger ? `Написать в ${messengerLabel(messenger)}` : (submitText ?? "Отправить заявку")}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки данных
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}