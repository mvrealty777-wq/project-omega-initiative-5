import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const visualTypes = ["Сауны", "Турецкой бани", "Соляной комнаты", "Комнаты отдыха", "и др."]

const advantages = [
  { icon: "Gift", title: "Правки бесплатно", text: "Дорабатываем визуализацию, пока вы не будете довольны результатом" },
  { icon: "Sparkles", title: "Фотореалистичность", text: "3D-визуализация, неотличимая от настоящей фотографии объекта" },
  { icon: "ScanEye", title: "Высокая детализация", text: "Прорабатываем материалы, свет и каждую деталь интерьера" },
]

export function Project3DSection() {
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-12">
          <div className="section-badge mb-4 mx-auto">3D-визуализация</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-3 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Разработка <span className="text-primary">3D-проекта</span> сауны или хамама
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Увидьте будущий объект ещё до начала строительства — реалистично и со всеми вашими пожеланиями.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left — image + text */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-6">
              <img
                src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/fe5bc93c-a4a8-46c7-b15d-149884af6a38.jpg"
                alt="3D-визуализация проекта сауны"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                Многие клиенты, прежде чем начинать строительство, хотят сначала увидеть то, что
                получится в итоге — максимально реалистично и с учётом всех пожеланий.
              </p>
              <p>
                Наши специалисты помогут осуществить всё задуманное. На основании ваших пожеланий и
                технических особенностей строительства мы создадим 3D-визуализацию будущего объекта.
              </p>
              <p>
                Благодаря этому можно заранее представить, как будет выглядеть объект, и внести правки
                до начала работ — исключив дорогую переделку.
              </p>
            </div>

            {/* Типы визуализаций */}
            <div className="mt-5">
              <p className="text-sm font-bold text-foreground mb-2.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Возможны визуализации:
              </p>
              <div className="flex flex-wrap gap-2">
                {visualTypes.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-border shadow-sm text-foreground/70">
                    <Icon name="Check" className="w-3.5 h-3.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Услуга доступна как частным клиентам, так и организациям, занимающимся строительством и отделкой.
              </p>
            </div>
          </div>

          {/* Right — advantages + form */}
          <div className="flex flex-col gap-5">
            {/* Преимущества */}
            <div className="grid grid-cols-1 gap-3">
              {advantages.map((a) => (
                <div key={a.title} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}>
                    <Icon name={a.icon} className="w-6 h-6 text-white" fallback="Check" />
                  </span>
                  <div>
                    <p className="font-bold text-base text-foreground mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{a.title}</p>
                    <p className="text-sm text-muted-foreground leading-snug">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Форма */}
            <div className="rounded-2xl p-6 sm:p-7 text-white shadow-xl mt-auto"
              style={{ background: 'linear-gradient(135deg, hsl(145 63% 30%), hsl(150 70% 18%))' }}>
              {sent ? (
                <div className="flex items-center gap-4 py-2">
                  <Icon name="CircleCheckBig" className="w-10 h-10 text-green-300 flex-shrink-0" fallback="Check" />
                  <div>
                    <p className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Заявка принята!</p>
                    <p className="text-white/80 text-sm">Свяжемся с вами и обсудим проект.</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Закажите 3D-проект
                  </p>
                  <p className="text-white/80 text-sm mb-5">
                    Оставьте контакты — рассчитаем стоимость визуализации вашего объекта
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input name="name" value={formData.name} onChange={handleChange}
                      placeholder="Ваше имя"
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <Input name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                      placeholder="Телефон *"
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <button type="submit" className="w-full h-12 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Icon name="Box" className="w-5 h-5" fallback="Send" />
                      Получить 3D-проект
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
