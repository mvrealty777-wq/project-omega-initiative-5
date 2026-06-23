import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Venok } from "@/components/icons/Venok"
import { MessengerIcon } from "@/components/icons/MessengerIcon"
import Icon from "@/components/ui/icon"
import { CheckCircle, Send } from "lucide-react"
import { sendLead } from "@/lib/sendLead"

const messengers = [
  { id: "max", label: "МАКС" },
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" },
]

const benefits = [
  { text: "Бесплатный расчёт сметы", icon: "Wallet", from: "hsl(145 63% 42%)", to: "hsl(145 70% 28%)" },
  { text: "Дизайн-проект и 3D-визуализация", icon: "Box", from: "hsl(210 80% 55%)", to: "hsl(220 80% 42%)" },
  { text: "Фиксированная цена и сроки в договоре", icon: "FileSignature", from: "hsl(38 92% 55%)", to: "hsl(28 90% 45%)" },
  { text: "Строим по ГОСТам и нормам пожарной безопасности", icon: "ShieldCheck", from: "hsl(0 75% 58%)", to: "hsl(355 75% 45%)" },
]

export function HeroSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sent, setSent] = useState(false)
  const [useMessenger, setUseMessenger] = useState(false)
  const [messenger, setMessenger] = useState("telegram")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    sendLead({
      name: formData.name,
      phone: formData.phone,
      source: "Первый экран — расчёт проекта",
      messenger: useMessenger ? messengers.find((m) => m.id === messenger)?.label : undefined,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/5f204f42-4e24-4506-a5e0-18c24654a87c.jpg"
          alt="Строительство хаммама и сауны под ключ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — headline */}
          <div className="text-white">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5 animate-fade-in-up"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ХАММАМ или САУНА{" "}
              <span className="text-green-400">«ПОД КЛЮЧ»</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-bold">
                Строительство и отделка саун и бань по всей России
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-100">
              Полный комплекс услуг — от проектирования до выполнения отделочных работ и установки оборудования 👌
            </p>

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
                    {useMessenger
                      ? `Напишем вам в ${messengers.find((m) => m.id === messenger)?.label} в течение 15 минут и подготовим расчёт сметы.`
                      : "Перезвоним в течение 15 минут и подготовим расчёт сметы."}
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
                      <label htmlFor="hero-name" className="text-sm font-medium text-foreground">Имя</label>
                      <Input id="hero-name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Ваше имя" className="h-11 rounded-xl border-border mt-1" />
                    </div>
                    <div>
                      <label htmlFor="hero-phone" className="text-sm font-medium text-foreground">Телефон *</label>
                      <Input id="hero-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                        placeholder="+7 900 123-45-67" className="h-11 rounded-xl border-border mt-1" />
                    </div>

                    {/* Чекбокс «написать в мессенджер» + компактные значки рядом */}
                    <div className="rounded-xl bg-secondary/40 border border-border p-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <label className="flex items-center gap-2.5 cursor-pointer select-none">
                          <span className="relative flex-shrink-0">
                            <input
                              type="checkbox"
                              checked={useMessenger}
                              onChange={(e) => setUseMessenger(e.target.checked)}
                              className="peer sr-only"
                            />
                            <span className="w-5 h-5 rounded-md border-2 border-border flex items-center justify-center transition-colors peer-checked:bg-primary peer-checked:border-primary">
                              <Icon name="Check" className={`w-3.5 h-3.5 text-white transition-opacity ${useMessenger ? 'opacity-100' : 'opacity-0'}`} />
                            </span>
                          </span>
                          <span className="text-sm font-medium text-foreground leading-snug">
                            Напишите мне в мессенджер вместо звонка
                          </span>
                        </label>

                        {/* Компактные значки мессенджеров сразу после надписи */}
                        <div className="flex items-center gap-1.5">
                          {messengers.map((m) => {
                            const isActive = useMessenger && messenger === m.id
                            return (
                              <button
                                key={m.id}
                                type="button"
                                title={m.label}
                                aria-label={m.label}
                                onClick={() => { setUseMessenger(true); setMessenger(m.id) }}
                                className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                                  isActive
                                    ? 'border-primary ring-2 ring-primary/30 scale-105'
                                    : 'border-border bg-white hover:border-primary/40'
                                }`}
                              >
                                <MessengerIcon id={m.id} className="w-6 h-6" />
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn-green w-full justify-center text-sm">
                      <Send className="w-4 h-4" />
                      {useMessenger
                        ? `Написать в ${messengers.find((m) => m.id === messenger)?.label}`
                        : "Отправить заявку и получить смету"}
                    </button>
                  </form>
                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки данных
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}