import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Андрей К.",
    role: "Частный клиент, Подмосковье",
    avatar: "АК",
    stars: 5,
    quote: "Заказали финскую сауну под ключ на дачном участке. Всё сделали точно в срок, без лишних вопросов. Качество отделки — выше ожиданий. Печь работает идеально, пар мягкий. Рекомендую!",
  },
  {
    name: "Ирина В.",
    role: "Частный клиент, Рублёвка",
    avatar: "ИВ",
    stars: 5,
    quote: "Строили хамам в нашем загородном доме. Команда GeniusSPA — настоящие профессионалы: подсказали по материалам, помогли с проектом, уложились в смету. Результат превзошёл все ожидания.",
  },
  {
    name: "Михаил С.",
    role: "Владелец отеля «Лесной»",
    avatar: "МС",
    stars: 5,
    quote: "Обратились за банным комплексом для нашего загородного отеля. Сауна, хамам, купель — всё под ключ за 3 месяца. Гости в восторге, загрузка выросла на 30%. Профессионалы своего дела!",
  },
  {
    name: "Сергей Н.",
    role: "Частный клиент, Тверская обл.",
    avatar: "СН",
    stars: 5,
    quote: "Построили русскую баню из бревна. Сначала сомневался, что успеют к дачному сезону, но ребята всё сделали за месяц. Баня топится на загляденье, соседи уже завидуют. Спасибо!",
  },
  {
    name: "Екатерина М.",
    role: "Частный клиент, Москва",
    avatar: "ЕМ",
    stars: 5,
    quote: "Очень понравилось, что с нами работал один менеджер от начала до конца. Никакой путаницы, всё чётко: проект, смета, сроки, приёмка. Хамам получился как в турецком отеле — шикарно.",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let raf: number
    let pos = 0
    const speed = 0.5
    const tick = () => {
      pos += speed
      if (pos >= el.scrollWidth / 2) pos = 0
      el.scrollLeft = pos
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-12">
        <div className="text-center">
          <div className="section-badge mb-5 mx-auto">Отзывы</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-balance mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Что говорят <span className="text-primary">наши клиенты</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Более 400 реализованных объектов — и каждый клиент оценил результат.
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-white rounded-2xl p-7 border border-border shadow-sm"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-6 min-h-[80px]">
              «{t.quote}»
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}