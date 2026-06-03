import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { CheckCircle, Ruler } from "lucide-react"

export function SurveyorCtaSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 mb-5"
              style={{ background: 'rgba(74,222,128,0.12)' }}>
              <Ruler className="w-4 h-4" />
              Бесплатно
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Оформите заявку на консультацию <br className="hidden sm:block" />
              либо выезд специалиста-замерщика на ваш объект
            </h2>
            <p className="text-white/60 leading-relaxed">
              Замерщик приедет в удобное время, оценит объект и подготовит точный расчёт сметы.
              Никаких обязательств — консультация и выезд полностью бесплатны.
            </p>
          </div>

          {/* Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl p-7 text-foreground">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Заявка отправлена!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Перезвоним и согласуем удобное время для выезда замерщика.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Вызвать замерщика
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Оставьте контакты — перезвоним в течение 15 минут
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input name="name" value={formData.name} onChange={handleChange}
                      placeholder="Ваше имя" className="h-11 rounded-xl border-border" />
                    <Input name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                      placeholder="+7 900 123-45-67" className="h-11 rounded-xl border-border" />
                    <button type="submit" className="btn-green w-full justify-center text-sm">
                      Заказать выезд замерщика
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
