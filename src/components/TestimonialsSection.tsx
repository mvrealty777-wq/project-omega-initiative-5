import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Заказали финскую сауну под ключ на дачном участке. Всё сделали точно в срок, без лишних вопросов. Качество отделки — выше ожиданий. Печь работает идеально, пар мягкий. Рекомендую!",
    name: "Андрей К.",
    role: "Частный клиент, Подмосковье",
  },
  {
    quote:
      "Строили хамам в нашем загородном доме. Команда GeniusSPA — настоящие профессионалы: подсказали по материалам, помогли с проектом, уложились в смету. Результат превзошёл все ожидания.",
    name: "Ирина В.",
    role: "Частный клиент, Рублёвка",
  },
  {
    quote:
      "Обратились за банным комплексом для нашего загородного отеля. Сауна, хамам, купель — всё под ключ за 3 месяца. Гости в восторге, загрузка выросла на 30%. Профессионалы своего дела!",
    name: "Михаил С.",
    role: "Владелец отеля",
  },
  {
    quote:
      "Построили русскую баню из бревна. Сначала сомневался, что успеют к дачному сезону, но ребята всё сделали за месяц. Баня топится на загляденье, соседи уже завидуют. Спасибо!",
    name: "Сергей Н.",
    role: "Частный клиент, Тверская обл.",
  },
  {
    quote:
      "Очень понравилось, что с нами работал один менеджер от начала до конца. Никакой путаницы, всё чётко: проект, смета, сроки, приёмка. Хамам получился как в турецком отеле — шикарно.",
    name: "Екатерина М.",
    role: "Частный клиент, Москва",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Более 200 реализованных объектов — и каждый клиент оценил результат. Читайте отзывы тех, кто уже пользуется своей баней или хамамом.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}