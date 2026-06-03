import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

const contacts = [
  { icon: Phone, label: "Телефон", value: "8 800 302-67-53", sub: "Звонок бесплатный по России", href: "tel:88003026753" },
  { icon: Mail, label: "E-mail", value: "info@geniusspa.ru", sub: "Ответим в течение часа", href: "mailto:info@geniusspa.ru" },
  { icon: MapPin, label: "География", value: "По всей России", sub: "Выезжаем в любой регион", href: undefined },
  { icon: Clock, label: "Часы работы", value: "Ежедневно: 9:00–21:00", sub: "Без выходных", href: undefined },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto">Связаться с нами</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-balance mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Получите <span className="text-primary">бесплатный расчёт</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Оставьте заявку — перезвоним в течение 15 минут и обсудим ваш проект. Выезд на замер бесплатно.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Мы перезвоним вам в течение 15 минут. Спасибо!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Оставьте заявку на расчёт
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Ваше имя *</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Александр" required className="h-11 rounded-xl border-border" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Телефон *</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                        placeholder="+7 900 123-45-67" required className="h-11 rounded-xl border-border" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.ru" className="h-11 rounded-xl border-border" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Что хотите построить?</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange}
                      placeholder="Например: финская сауна 6×4 м, хамам 12 м², банный комплекс для отеля..."
                      rows={4} className="rounded-xl border-border resize-none" />
                  </div>
                  <button type="submit" className="btn-green w-full sm:w-auto justify-center text-base">
                    <Send className="w-4 h-4" />
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(145 63% 32% / 0.10)' }}
                >
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-sm text-foreground hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm text-foreground">{c.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Trust block */}
            <div
              className="rounded-2xl p-5 text-white"
              style={{ background: 'linear-gradient(135deg, hsl(145 63% 32%), hsl(145 70% 24%))' }}
            >
              <p className="font-bold text-sm mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Почему выбирают нас?
              </p>
              {[
                "Бесплатная консультация",
                "Выезд на замер без оплаты",
                "Фиксированная смета в договоре",
                "Гарантия 5 лет на объект",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/90 mb-1.5 last:mb-0">
                  <CheckCircle className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}