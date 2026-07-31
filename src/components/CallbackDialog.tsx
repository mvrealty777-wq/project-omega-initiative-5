import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CheckCircle, Phone } from "lucide-react"
import { sendLead, isValidPhone } from "@/lib/sendLead"

interface Props {
  children: React.ReactNode
  source?: string
}

export function CallbackDialog({ children, source = "Кнопка «Перезвоните мне»" }: Props) {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidPhone(phone)) {
      setError("Введите корректный номер телефона")
      return
    }
    setError("")
    setSending(true)
    const ok = await sendLead({ name, phone, source })
    setSending(false)
    if (ok) {
      setSent(true)
    } else {
      setError("Не удалось отправить. Позвоните нам: 8 960 231-96-72")
    }
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) setTimeout(() => { setSent(false); setPhone(""); setName(""); setError("") }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "hsl(145 63% 32% / 0.12)" }}>
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Заявка принята!
            </h3>
            <p className="text-muted-foreground text-sm">Перезвоним в течение 15 минут.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "Montserrat, sans-serif" }}>
                Перезвоним вам
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3 mt-1">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="h-12 rounded-xl"
              />
              <Input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон *"
                className="h-12 rounded-xl"
              />
              {error && (
                <p className="text-sm text-red-600 font-medium text-center">{error}</p>
              )}
              <button type="submit" disabled={sending} className="btn-green w-full justify-center text-sm disabled:opacity-60">
                <Phone className="w-4 h-4" />
                {sending ? "Отправляем..." : "Перезвоните мне"}
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