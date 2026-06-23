import { Star, Quote, ExternalLink } from "lucide-react"
import type { ServiceTestimonial } from "@/data/serviceExtras"

const defaultTestimonials = [
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
  {
    name: "Дмитрий П.",
    role: "Управляющий SPA-комплекса",
    avatar: "ДП",
    stars: 5,
    quote: "Заказывали хамам с морским климатом для нашего spa. Подсветка, звёздное небо, генератор пара — всё работает безупречно уже второй год. Сервисное обслуживание тоже на высоте.",
  },
]

interface Props {
  title?: string
  subtitle?: string
  items?: ServiceTestimonial[]
}

export function TestimonialsSection({ title, subtitle, items }: Props = {}) {
  const testimonials = items ?? defaultTestimonials
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Отзывы</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground text-balance mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {title ?? (<>Что говорят <span className="text-primary">наши клиенты</span></>)}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            {subtitle ?? "Более 400 реализованных объектов — и каждый клиент оценил результат."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 fill-current" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-base text-foreground/80 leading-relaxed mb-6 flex-1">
                «{t.quote}»
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-base text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Яндекс Бизнес */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://yandex.ru/maps/org/geniusspa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 px-6 py-4"
          >
            <span className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0"
              style={{ fontFamily: 'Montserrat, sans-serif', background: 'linear-gradient(135deg, #FF4433, #CC0000)' }}>
              Я
            </span>
            <span className="text-left">
              <span className="flex items-center gap-2 font-bold text-base text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Все отзывы на Яндекс&nbsp;Бизнес
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </span>
                Рейтинг 5,0 — реальные отзывы клиентов
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}