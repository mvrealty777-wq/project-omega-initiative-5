import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { MessengerIcon } from "@/components/icons/MessengerIcon"
import { sendLead } from "@/lib/sendLead"

const gallery = [
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/2ad12f49-973d-4ff5-88da-a09246609324.jpg", tag: "Сауна" },
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d2e669bd-fe0e-4164-a322-0cb4c8574471.jpg", tag: "Хаммам" },
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/020640aa-1aee-464d-85b9-f2e4be664dfa.jpg", tag: "3D-чертёж" },
]

const visualTypes = ["Сауны", "Турецкой бани", "Соляной комнаты", "Комнаты отдыха", "и др."]

const advantages = [
  { icon: "Gift", title: "Правки бесплатно", desc: "Меняем проект, пока он не понравится" },
  { icon: "Sparkles", title: "Фотореализм", desc: "Видно реальный результат заранее" },
  { icon: "ScanEye", title: "Высокая детализация", desc: "Точные размеры и материалы" },
]

const stats = [
  { value: "3D", label: "Фотореализм" },
  { value: "∞", label: "Правок бесплатно" },
  { value: "2–4", label: "Дня на проект" },
]

export function Project3DSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    sendLead({
      name: formData.name,
      phone: formData.phone,
      source: "Заказ 3D-проекта",
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(165deg, hsl(220 27% 11%), hsl(222 32% 7%))' }}>
      <div className="absolute -top-28 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'hsl(145 63% 42%)' }} />
      <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'hsl(200 70% 50%)' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-9 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-5 mx-auto text-green-300 border border-green-400/20"
            style={{ background: 'hsl(145 63% 42% / 0.12)' }}>
            3D-визуализация
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Разработка <span className="text-green-400">3D-проекта</span> сауны или хамама
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed mb-7">
            Увидьте будущий объект ещё до начала строительства — реалистично и со всеми вашими пожеланиями.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm text-center min-w-[110px]">
                <div className="text-2xl sm:text-3xl font-black text-green-400 leading-none mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.value}</div>
                <div className="text-[11px] text-white/55 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Карточка блока */}
        <div className="bg-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left — галерея примеров */}
          <div className="p-4 sm:p-5 lg:p-6"
            style={{ background: 'linear-gradient(160deg, hsl(150 30% 96%), hsl(150 20% 92%))' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-3 aspect-[4/3] ring-1 ring-black/5">
              <img src={gallery[active].src} alt={`3D-проект — ${gallery[active].tag}`} loading="lazy" className="w-full h-full object-cover" />
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
                  <img src={img.src} alt={img.tag} loading="lazy" className="w-full h-full object-cover" />
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

            {/* Преимущества */}
            <div className="space-y-2.5 mb-6">
              {advantages.map((a) => (
                <div key={a.title} className="flex items-center gap-3.5 rounded-2xl bg-secondary/40 border border-border p-3 hover:border-primary/30 hover:bg-secondary/60 transition-all duration-300">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: 'linear-gradient(135deg, hsl(145 63% 40%), hsl(150 70% 24%))', boxShadow: '0 4px 12px -2px hsl(145 63% 40% / 0.45)' }}>
                    <Icon name={a.icon} className="w-5 h-5 text-white" fallback="Check" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{a.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Форма */}
            <div className="relative rounded-2xl p-5 sm:p-6 text-white shadow-xl mt-auto overflow-hidden"
              style={{ background: 'linear-gradient(135deg, hsl(145 63% 30%), hsl(150 72% 16%))' }}>
              {/* Декоративные элементы */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

              {sent ? (
                <div className="relative flex items-center gap-3 py-1">
                  <Icon name="CircleCheckBig" className="w-9 h-9 text-green-300 flex-shrink-0" fallback="Check" />
                  <div>
                    <p className="font-bold text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Заявка принята!</p>
                    <p className="text-white/80 text-sm">Свяжемся и обсудим проект.</p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Icon name="Box" className="w-6 h-6 text-white" fallback="Sparkles" />
                    </span>
                    <div>
                      <p className="text-lg sm:text-xl font-black leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Закажите 3D-проект
                      </p>
                      <p className="text-white/70 text-xs">Бесплатно рассчитаем и покажем визуализацию</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 mt-4">
                    <Input name="name" value={formData.name} onChange={handleChange}
                      placeholder="Ваше имя"
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <Input name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                      placeholder="Телефон *"
                      className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <button type="submit" className="h-12 px-5 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 shadow-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Icon name="Send" className="w-5 h-5" fallback="Send" />
                      Заказать
                    </button>
                  </form>

                  {/* Мессенджеры */}
                  <div className="flex items-center flex-wrap gap-2 mt-4 pt-4 border-t border-white/15">
                    <span className="text-sm text-white/75">Или напишите нам:</span>
                    <a href="https://wa.me/79602319672" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
                      style={{ background: '#25D366' }}>
                      <MessengerIcon id="whatsapp" fill className="w-5 h-5 rounded-md" />
                      WhatsApp
                    </a>
                    <a href="https://t.me/+79602319672" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
                      style={{ background: '#27A7E7' }}>
                      <MessengerIcon id="telegram" fill className="w-5 h-5 rounded-md" />
                      Telegram
                    </a>
                    <a href="https://max.ru/+79602319672" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }}>
                      <MessengerIcon id="max" fill className="w-5 h-5 rounded-md" />
                      МАКС
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}