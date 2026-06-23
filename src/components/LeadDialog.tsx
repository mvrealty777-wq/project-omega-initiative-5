import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { CheckCircle, Send } from "lucide-react"
import { sendLead } from "@/lib/sendLead"
import { MessengerPicker, messengerLabel } from "@/components/MessengerPicker"

interface Props {
  /** Кнопка-триггер (любой элемент) */
  children: React.ReactNode
  /** Название формы для письма */
  source: string
  title?: string
  description?: string
  submitText?: string
}

export function LeadDialog({ children, source, title, description, submitText }: Props) {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({ name: "", phone: "" })
  const [useMessenger, setUseMessenger] = useState(false)
  const [messenger, setMessenger] = useState("telegram")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    sendLead({
      name: data.name,
      phone: data.phone,
      source,
      messenger: useMessenger ? messengerLabel(messenger) : undefined,
    })
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) {
      setTimeout(() => {
        setSent(false)
        setData({ name: "", phone: "" })
        setUseMessenger(false)
      }, 200)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[440px]">
        {sent ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "hsl(145 63% 32% / 0.12)" }}>
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Заявка принята!
            </h3>
            <p className="text-muted-foreground text-sm">
              {useMessenger
                ? `Напишем вам в ${messengerLabel(messenger)} в течение 15 минут.`
                : "Перезвоним в течение 15 минут и подготовим расчёт."}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "Montserrat, sans-serif" }}>
                {title ?? "Получить расчёт"}
              </DialogTitle>
              <DialogDescription>
                {description ?? "Оставьте контакты — перезвоним и подготовим бесплатный расчёт."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
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
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
