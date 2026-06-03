import { ArrowRight, Clock } from "lucide-react"

const steps = [
  {
    emoji: "📋",
    number: "01",
    title: "Заявка и консультация",
    duration: "15 минут",
    description: "Оставляете заявку — мы перезваниваем в течение 15 минут. Обсуждаем ваши пожелания, площадь, бюджет и сроки.",
  },
  {
    emoji: "📐",
    number: "02",
    title: "Выезд и проект",
    duration: "3–5 дней",
    description: "Бесплатно выезжаем на замер. Разрабатываем проект, подбираем материалы и оборудование, согласовываем фиксированную смету.",
  },
  {
    emoji: "🏗️",
    number: "03",
    title: "Строительство",
    duration: "30–45 дней",
    description: "Возводим объект строго по проекту и смете. Регулярно отправляем фотоотчёты с объекта — вы всегда знаете, как идёт работа.",
  },
  {
    emoji: "🎉",
    number: "04",
    title: "Сдача под ключ",
    duration: "1–2 дня",
    description: "Проводим пуско-наладку, обучаем вас работе с оборудованием и передаём все гарантийные документы. Объект готов к использованию.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto">Как мы работаем</div>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground text-balance"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            От заявки до готовой<br />
            <span className="text-primary">сауны — 4 шага</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group h-full">
              {/* Step circle */}
              <div
                className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-md border-2 border-white bg-white group-hover:scale-110 transition-transform duration-300"
                style={{ boxShadow: '0 4px 20px hsl(145 63% 32% / 0.15)' }}
              >
                {step.emoji}
              </div>

              {/* Arrow between (desktop) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-7 -right-3 z-20 w-5 h-5 text-primary" />
              )}

              <div
                className="text-xs font-black tracking-widest text-primary/60 mb-2 uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Шаг {step.number}
              </div>
              <h3
                className="font-bold text-base text-foreground mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mt-auto"
                style={{ background: 'hsl(145 63% 32% / 0.1)', color: 'hsl(145 63% 28%)' }}>
                <Clock className="w-3.5 h-3.5" />
                {step.duration}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a href="#contact" className="btn-green text-base mx-auto inline-flex">
            Начать прямо сейчас — бесплатная консультация
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}