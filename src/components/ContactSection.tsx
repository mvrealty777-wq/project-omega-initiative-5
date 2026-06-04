import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Phone, Mail, CheckCircle, MessageCircle, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ time: "", phone: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, hsl(220 25% 11%), hsl(220 30% 7%))' }}>
      {/* Decorative glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'hsl(145 63% 40%)' }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'hsl(145 63% 50%)' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-center">
          {/* Left — manager */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/78493e82-414d-4da2-9529-452d6e1e37f8.png"
                alt="Александр, руководитель отдела продаж"
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover border-4 shadow-2xl"
                style={{ borderColor: 'hsl(145 63% 40%)' }}
              />
              <span className="absolute bottom-3 right-3 w-6 h-6 rounded-full border-4 animate-pulse"
                style={{ background: 'hsl(145 63% 45%)', borderColor: 'hsl(220 25% 11%)' }} />
            </div>
            <p className="mt-5 text-xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Александр, руководитель отдела продаж
            </p>
            <p className="text-sm font-semibold mt-1" style={{ color: 'hsl(145 63% 50%)' }}>
              GeniusSPA
            </p>
          </div>

          {/* Right — content */}
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Давайте начнём наше знакомство с<br className="hidden sm:block" />{" "}
              <span style={{ color: 'hsl(145 63% 50%)' }}>бесплатной консультации</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Messengers */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(145 63% 50%)' }} />
                  <span className="text-white/90 font-medium">Пишите, мы онлайн:</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://wa.me/79810779725" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366] hover:scale-110 transition-transform shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://t.me/geniusspa" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#229ED9] hover:scale-110 transition-transform shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </a>
                  <a href="mailto:info@geniusspa.ru"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 hover:scale-110 transition-all shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(145 63% 50%)' }} />
                  <span className="text-white/90 font-medium">Звоните прямо сейчас:</span>
                </div>
                <a href="tel:+79810779725" className="flex items-center gap-2.5 group">
                  <Phone className="w-6 h-6" style={{ color: 'hsl(145 63% 50%)' }} />
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    +7 981 077 97 25
                  </span>
                </a>
              </div>
            </div>

            {/* Callback form */}
            <div className="rounded-2xl p-6 sm:p-7 border border-white/10"
              style={{ background: 'hsl(220 20% 15% / 0.6)', backdropFilter: 'blur(8px)' }}>
              {sent ? (
                <div className="flex items-center gap-4 py-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(145 63% 32% / 0.25)' }}>
                    <CheckCircle className="w-6 h-6" style={{ color: 'hsl(145 63% 55%)' }} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Заявка принята!
                    </p>
                    <p className="text-white/70 text-sm">Перезвоним вам в указанное время.</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-white/85 mb-4 text-base">
                    Или просто введите ваш телефон, мы перезвоним когда вам будет удобно
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="Удобное время для звонка"
                      className="h-14 rounded-xl bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary"
                    />
                    <Input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ваш номер телефона *"
                      className="h-14 rounded-xl bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary"
                    />
                    <button type="submit" className="btn-green h-14 px-8 justify-center whitespace-nowrap text-base flex-shrink-0">
                      Перезвоните
                    </button>
                  </form>
                  <p className="text-white/40 text-xs mt-3">
                    Вы соглашаетесь с условиями обработки персональных данных
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