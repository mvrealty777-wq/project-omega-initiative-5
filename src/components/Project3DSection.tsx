import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { MaxIcon } from "@/components/icons/MaxIcon"
import { sendLead } from "@/lib/sendLead"

interface Props {
  slug?: string
}

const gallery = [
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/36d84774-a9b9-44bf-964e-4bda7bab7a1e.jpg", tag: "Сауна" },
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/a9216446-6746-4155-a352-9c5e9add83e2.jpg", tag: "Хаммам" },
  { src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/806491d7-4ffe-4e9e-8c4e-71d22ac9af98.jpg", tag: "3D-чертёж сауны" },
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

const whatYouGet = [
  "Фотореалистичная визуализация",
  "Планировка с размерами",
  "Внесём любые правки бесплатно",
]

function getContent(slug?: string) {
  switch (slug) {
    case "hammam":
      return {
        title: <>Разработка <span className="text-green-400">3D-проекта</span> хаммама</>,
        subtitle: "Увидьте будущий хаммам ещё до начала работ — реалистично и со всеми вашими пожеланиями.",
      }
    case "sauna":
      return {
        title: <>Разработка <span className="text-green-400">3D-проекта</span> сауны</>,
        subtitle: "Увидьте будущую сауну ещё до начала работ — реалистично и со всеми вашими пожеланиями.",
      }
    case "pool":
      return {
        title: <>Разработка <span className="text-green-400">3D-проекта</span> бассейна</>,
        subtitle: "Увидьте будущий бассейн ещё до начала работ — реалистично и со всеми вашими пожеланиями.",
      }
    default:
      return {
        title: <>Разработка <span className="text-green-400">3D-проекта</span> вашего объекта</>,
        subtitle: "Увидьте результат до начала строительства — реалистично и с учётом всех ваших пожеланий.",
      }
  }
}

export function Project3DSection({ slug }: Props) {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState(0)

  const { title, subtitle } = getContent(slug)

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
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(165deg, hsl(220 27% 11%), hsl(222 32% 7%))" }}
    >
      {/* Декоративное свечение */}
      <div
        className="absolute -top-28 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "hsl(145 63% 42%)" }}
      />
      <div
        className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "hsl(200 70% 50%)" }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Шапка секции */}
        <div className="text-center mb-9 sm:mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-5 mx-auto text-green-300 border border-green-400/20"
            style={{ background: "hsl(145 63% 42% / 0.12)" }}
          >
            <Icon name="Box" size={14} fallback="Sparkles" />
            3D-визуализация
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed mb-7">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm text-center min-w-[110px]"
              >
                <div
                  className="text-2xl sm:text-3xl font-black text-green-400 leading-none mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-[11px] text-white/55 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Основная карточка */}
        <div className="bg-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Левая колонка — галерея */}
          <div
            className="p-4 sm:p-5 lg:p-6"
            style={{ background: "linear-gradient(160deg, hsl(150 30% 96%), hsl(150 20% 92%))" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-3 aspect-[4/3] ring-1 ring-black/5">
              <img
                src={gallery[active].src}
                alt={`3D-проект — ${gallery[active].tag}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span
                className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-md"
                style={{
                  background: "hsl(145 63% 30% / 0.95)",
                  backdropFilter: "blur(4px)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
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
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all ${
                    active === i
                      ? "border-primary shadow-md scale-[1.02]"
                      : "border-transparent opacity-65 hover:opacity-100"
                  }`}
                >
                  <img src={img.src} alt={img.tag} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 text-[10px] font-semibold text-white text-center py-0.5 bg-black/55">
                    {img.tag}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-3 text-center flex items-center justify-center gap-1.5">
              <Icon name="Images" className="w-3.5 h-3.5 text-primary" fallback="Image" />
              Примеры наших 3D-проектов
            </p>

            {/* Типы визуализаций */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              {visualTypes.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-border text-foreground/70"
                >
                  <Icon name="Check" className="w-3 h-3 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Правая колонка — преимущества + форма */}
          <div className="flex flex-col">
            {/* Преимущества */}
            <div className="p-5 sm:p-7 lg:p-8 flex flex-col gap-4">
              <p className="text-sm text-foreground/75 leading-relaxed">
                Многие клиенты хотят сначала увидеть результат — реалистично и с учётом всех пожеланий.
                Мы создадим визуализацию и внесём правки{" "}
                <span className="font-semibold text-foreground">до начала работ</span>, исключив дорогую переделку.
              </p>

              <div className="space-y-2.5">
                {advantages.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-3.5 rounded-2xl bg-secondary/40 border border-border p-3 hover:border-primary/30 hover:bg-secondary/60 transition-all duration-300"
                  >
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(145 63% 40%), hsl(150 70% 24%))",
                        boxShadow: "0 4px 12px -2px hsl(145 63% 40% / 0.45)",
                      }}
                    >
                      <Icon name={a.icon} className="w-5 h-5 text-white" fallback="Check" />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-sm font-bold text-foreground leading-tight"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {a.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Форма — карточка с header */}
            <div className="mt-auto mx-5 mb-5 sm:mx-7 sm:mb-7 lg:mx-8 lg:mb-8 rounded-2xl overflow-hidden shadow-xl border border-primary/20">
              {/* Зелёный header */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, hsl(145 63% 32%), hsl(150 70% 20%))",
                }}
              >
                <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Icon name="Box" className="w-5 h-5 text-white" fallback="Sparkles" />
                </span>
                <div>
                  <p
                    className="text-base font-black text-white leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Закажите 3D-проект
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">
                    Ответим в течение 15 минут и подготовим проект за 2–4 дня
                  </p>
                </div>
              </div>

              {/* Тело формы */}
              <div className="bg-white px-5 py-5">
                {sent ? (
                  /* Успех */
                  <div className="flex flex-col items-center text-center py-4 gap-3">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "hsl(145 63% 32% / 0.10)" }}
                    >
                      <Icon name="CircleCheck" className="w-7 h-7 text-primary" fallback="CheckCircle2" />
                    </div>
                    <div>
                      <p
                        className="text-base font-black text-foreground"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Заявка принята!
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Перезвоним в течение 15 минут и начнём работу над проектом.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Что получите */}
                    <ul className="space-y-2 mb-4">
                      {whatYouGet.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                          <Icon name="CheckCircle2" className="w-4 h-4 text-primary flex-shrink-0" fallback="Check" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="h-px bg-border mb-4" />

                    {/* Поля */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                          Ваше имя
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Как вас зовут?"
                          className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                          Телефон <span className="text-destructive">*</span>
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 (___) ___-__-__"
                          className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="h-12 w-full rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98] mt-1"
                        style={{
                          background: "linear-gradient(135deg, hsl(145 63% 38%), hsl(150 70% 22%))",
                          boxShadow: "0 4px 14px hsl(145 63% 30% / 0.45)",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        <Icon name="Send" className="w-4 h-4" fallback="Send" />
                        Заказать 3D-проект →
                      </button>

                      <p className="text-[11px] text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Мессенджеры */}
            <div className="flex items-center flex-wrap gap-2 px-5 pb-5 sm:px-7 sm:pb-7 lg:px-8 lg:pb-8 -mt-2">
              <span className="text-sm text-foreground/60">Или напишите нам:</span>
              <a
                href="https://t.me/geniusspa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "#27A7E7" }}
              >
                <Icon name="Send" className="w-4 h-4" fallback="MessageCircle" />
                Telegram
              </a>
              <a
                href="https://max.ru/geniusspa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #6366F1)" }}
              >
                <MaxIcon className="w-4 h-4" />
                МАКС
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
