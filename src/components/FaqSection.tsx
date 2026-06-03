import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Сколько стоит построить хаммам или сауну под ключ?",
    a: "Стоимость зависит от площади, типа отделки и оборудования. Баня или сауна — от 800 000 ₽, турецкий хаммам — от 1 200 000 ₽. Точную цену называем после бесплатного выезда и замера, и фиксируем её в договоре — никаких доплат в процессе.",
  },
  {
    q: "Сколько времени занимает строительство?",
    a: "Сауна или баня — в среднем 30–45 дней, хаммам — 45–60 дней, банный комплекс для отеля — от 90 дней. Точные сроки прописываем в договоре и строго их соблюдаем — за 10 лет не сорвали ни одной сдачи.",
  },
  {
    q: "Вы работаете только по Москве?",
    a: "Нет, мы строим по всей России. Выезжаем в любой регион — от проектирования до сдачи объекта под ключ. Консультация и расчёт сметы — бесплатно, звоните 8 800 302-67-53.",
  },
  {
    q: "Что входит в строительство «под ключ»?",
    a: "Полный цикл: проектирование и 3D-визуализация, подбор и закупка материалов, все строительные и отделочные работы, монтаж инженерных систем, установка печей и парогенераторов, пуско-наладка и обучение работе с оборудованием.",
  },
  {
    q: "Какая гарантия на работы?",
    a: "Даём письменную гарантию 5 лет на конструктив и оборудование. Все объекты строим по ГОСТам и нормам пожарной безопасности. При необходимости оперативно устраняем любые замечания.",
  },
  {
    q: "Можно ли получить дизайн-проект перед началом работ?",
    a: "Да. Мы разрабатываем дизайн-проект и 3D-визуализацию, чтобы вы заранее увидели будущий объект. Вы получаете просчёт в 3-х различных вариантах по цене и выбираете оптимальный.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="section-badge mb-5 mx-auto">Вопросы и ответы</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Частые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Не нашли ответ? Звоните{" "}
            <a href="tel:88003026753" className="text-primary font-semibold hover:underline">8 800 302-67-53</a>{" "}
            — ответим на любой вопрос.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger
                className="text-left font-bold text-base text-foreground hover:no-underline py-5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}