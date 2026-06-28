import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CheckCircle, Phone } from "lucide-react"
import { sendLead } from "@/lib/sendLead"

interface Props {
  children: React.ReactNode
  source?: string
}

export function CallbackDialog({ children, source = "Кнопка «Перезвоните мне»" }: Props) {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    sendLead({ name, phone, source })
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) setTimeout(() => { setSent(false); setPhone(""); setName("") }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2">
              Заявка принята!
            </h3>
            <p className="text-muted-foreground text-sm">Перезвоним в течение 15 минут.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Перезвоним вам</DialogTitle>
              <DialogDescription>
                Оставьте номер — перезвоним в течение 15 минут
              </DialogDescription>
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
              <button type="submit" className="btn-green w-full justify-center text-sm">
                <Phone className="w-4 h-4" />
                Перезвоните мне
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
