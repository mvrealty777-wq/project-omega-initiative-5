import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { CheckCircle, Send } from "lucide-react"

const benefits = [
  { text: "Бесплатный расчёт сметы", emoji: "💰" },
  { text: "Дизайн-проект и 3D-визуализация", emoji: "📊" },
  { text: "Фиксированная цена и сроки в договоре", emoji: "📝" },
  { text: "Строим по ГОСТам и нормам пожарной безопасности", emoji: "🔥" },
]

export function HeroSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg"
          alt="Хаммам со звёздным небом"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — headline */}
          <div className="text-white">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 animate-fade-in-up"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ХАММАМ или САУНА{" "}
              <span className="text-green-400">«ПОД КЛЮЧ»</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-bold">
                Строительство и отделка саун и бань по всей России
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-100">
              Полный комплекс услуг — от проектирования до выполнения отделочных работ и установки оборудования 👌
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-in-up animate-delay-200">
              {["Более 400 объектов", "10+ лет опыта", "Гарантия 5 лет"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
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

                  <ul className="space-y-2.5 mb-6">
                    {benefits.map((b) => (
                      <li key={b.text} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-base flex-shrink-0">{b.emoji}</span>
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
                    <button type="submit" className="btn-green w-full justify-center text-sm">
                      <Send className="w-4 h-4" />
                      Отправить заявку и получить смету
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
