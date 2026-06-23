import { useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import { faqSchema } from "@/lib/schema"
import type { FaqItem } from "@/data/serviceFaq"

const defaultFaqs: FaqItem[] = [
  {
    icon: "Wallet",
    q: "Сколько стоит построить хаммам или сауну под ключ?",
    a: "Стоимость зависит от площади, типа отделки и оборудования. Баня или сауна — от 800 000 ₽, турецкий хаммам — от 1 200 000 ₽. Точную цену называем после бесплатного выезда и замера и фиксируем её в договоре — никаких доплат в процессе.",
  },
  {
    icon: "Clock",
    q: "Сколько времени занимает строительство?",
    a: "Сауна или баня — в среднем 30–45 дней, хаммам — 45–60 дней, банный комплекс для отеля — от 90 дней. Точные сроки прописываем в договоре и строго их соблюдаем — за 10 лет не сорвали ни одной сдачи.",
  },
  {
    icon: "MapPin",
    q: "Вы работаете только по Москве?",
    a: "Нет, мы строим по всей России. Выезжаем в любой регион — от проектирования до сдачи объекта под ключ. Консультация и расчёт сметы — бесплатно, звоните 8 800 302-67-53.",
  },
  {
    icon: "Package",
    q: "Что входит в строительство «под ключ»?",
    a: "Полный цикл: проектирование и 3D-визуализация, подбор и закупка материалов, все строительные и отделочные работы, монтаж инженерных систем, установка печей и парогенераторов, пуско-наладка и обучение работе с оборудованием.",
  },
  {
    icon: "ShieldCheck",
    q: "Какая гарантия на работы?",
    a: "Даём письменную гарантию 5 лет на конструктив и оборудование. Все объекты строим по ГОСТам и нормам пожарной безопасности. При необходимости оперативно устраняем любые замечания.",
  },
  {
    icon: "PencilRuler",
    q: "Можно ли получить дизайн-проект перед началом работ?",
    a: "Да. Мы разрабатываем дизайн-проект и 3D-визуализацию, чтобы вы заранее увидели будущий объект. Вы получаете просчёт в 3-х различных вариантах по цене и выбираете оптимальный.",
  },
]

interface Props {
  items?: FaqItem[]
}

export function FaqSection({ items }: Props = {}) {
  const faqs = items ?? defaultFaqs
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute("data-faq-jsonld", "true")
    script.text = JSON.stringify(faqSchema(faqs.map((f) => ({ q: f.q, a: f.a }))))
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [faqs])

  return (
    <section id="faq" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* Left — heading + graphic CTA */}
          <div className="lg:sticky lg:top-24">
            <div className="section-badge mb-5">Вопросы и ответы</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Частые <span className="text-primary">вопросы</span>
            </h2>
            <p className="text-muted-foreground text-base mb-6">
              Собрали ответы на главные вопросы о стоимости, сроках и гарантии.
            </p>

            {/* Графика — карточка с иконкой и CTA */}
            <div className="relative rounded-2xl p-6 text-white overflow-hidden shadow-xl"
              style={{ background: 'linear-gradient(135deg, hsl(145 63% 30%), hsl(150 70% 18%))' }}>
              <Icon name="MessageCircleQuestion" className="absolute -right-4 -bottom-4 w-28 h-28 text-white/10" fallback="HelpCircle" />
              <div className="relative">
                <span className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  <Icon name="Headset" className="w-6 h-6 text-white" fallback="Phone" />
                </span>
                <p className="font-black text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Не нашли ответ?
                </p>
                <p className="text-white/80 text-sm mb-4">
                  Позвоните — бесплатно ответим на любой вопрос и рассчитаем смету.
                </p>
                <a href="tel:88003026753" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <Icon name="Phone" className="w-4 h-4" />
                  8 800 302-67-53
                </a>
              </div>
            </div>
          </div>

          {/* Right — compact accordion with icons */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-border px-4 sm:px-5 shadow-sm data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger
                  className="text-left font-bold text-sm sm:text-base text-foreground hover:no-underline py-4 gap-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                      <Icon name={faq.icon} className="w-4.5 h-4.5 text-primary" fallback="HelpCircle" />
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pl-12">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}