import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const gallery = [
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/36d84774-a9b9-44bf-964e-4bda7bab7a1e.jpg", tag: "Сауна" },
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/a9216446-6746-4155-a352-9c5e9add83e2.jpg", tag: "Хаммам" },
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/af08db9a-9608-430f-93b9-d23036440b9a.jpg", tag: "Чертёж проекта" },
]

const visualTypes = ["Сауны", "Турецкой бани", "Соляной комнаты", "Комнаты отдыха", "и др."]

const advantages = [
  { icon: "Gift", title: "Правки бесплатно" },
  { icon: "Sparkles", title: "Фотореализм" },
  { icon: "ScanEye", title: "Высокая детализация" },
]

export function Project3DSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-badge mb-4 mx-auto">3D-визуализация</div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Разработка <span className="text-primary">3D-проекта</span> сауны или хамама
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Увидьте будущий объект ещё до начала строительства — реалистично и со всеми вашими пожеланиями.
          </p>
        </div>

        {/* Карточка блока */}
        <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left — галерея примеров */}
          <div className="p-4 sm:p-5 lg:p-6"
            style={{ background: 'linear-gradient(160deg, hsl(150 30% 96%), hsl(150 20% 92%))' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-3 aspect-[4/3] ring-1 ring-black/5">
              <img src={gallery[active].src} alt={`3D-проект — ${gallery[active].tag}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-md"
                style={{ background: 'hsl(145 63% 30% / 0.95)', backdropFilter: 'blur(4px)', fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Box" className="w-3.5 h-3.5" fallback="Sparkles" />
                3D-проект · {gallery[active].tag}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all ${active === i ? 'border-primary shadow-md scale-[1.02]' : 'border-transparent opacity-65 hover:opacity-100'}`}
                >
                  <img src={img.src} alt={img.tag} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 text-[10px] font-semibold text-white text-center py-0.5 bg-black/55">{img.tag}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center flex items-center justify-center gap-1.5">
              <Icon name="Images" className="w-3.5 h-3.5 text-primary" fallback="Image" />
              Примеры наших 3D-проектов
            </p>
          </div>

          {/* Right — текст + форма */}
          <div className="p-5 sm:p-7 lg:p-8 flex flex-col">
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              Многие клиенты хотят сначала увидеть результат — реалистично и с учётом всех пожеланий.
              На основании ваших идей и технических особенностей мы создадим визуализацию будущего объекта
              и внесём правки <span className="font-semibold text-foreground">до начала работ</span>, исключив дорогую переделку.
            </p>

            {/* Типы визуализаций */}
            <div className="flex flex-wrap gap-2 mb-5">
              {visualTypes.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-foreground/70">
                  <Icon name="Check" className="w-3.5 h-3.5 text-primary" />
                  {t}
                </span>
              ))}
            </div>

            {/* Преимущества — компактно в ряд */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {advantages.map((a) => (
                <div key={a.title} className="flex flex-col items-center text-center gap-1.5 rounded-xl bg-secondary/40 border border-border p-3">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}>
                    <Icon name={a.icon} className="w-5 h-5 text-white" fallback="Check" />
                  </span>
                  <p className="text-[11px] font-bold text-foreground leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{a.title}</p>
                </div>
              ))}
            </div>

            {/* Форма */}
            <div className="rounded-2xl p-5 sm:p-6 text-white shadow-lg mt-auto"
              style={{ background: 'linear-gradient(135deg, hsl(145 63% 30%), hsl(150 70% 18%))' }}>
              {sent ? (
                <div className="flex items-center gap-3 py-1">
                  <Icon name="CircleCheckBig" className="w-9 h-9 text-green-300 flex-shrink-0" fallback="Check" />
                  <div>
                    <p className="font-bold text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Заявка принята!</p>
                    <p className="text-white/80 text-sm">Свяжемся и обсудим проект.</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-lg sm:text-xl font-black mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Закажите 3D-проект
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                    <Input name="name" value={formData.name} onChange={handleChange}
                      placeholder="Ваше имя"
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <Input name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                      placeholder="Телефон *"
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <button type="submit" className="h-12 px-5 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Icon name="Box" className="w-5 h-5" fallback="Send" />
                      Заказать
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