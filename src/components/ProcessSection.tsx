import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import type { ProcessStep } from "@/data/serviceContent"
import { LeadDialog } from "@/components/LeadDialog"

const defaultSteps: ProcessStep[] = [
  {
    icon: "PhoneCall",
    number: "01",
    title: "Заявка и консультация",
    duration: "15 минут",
    description: "Оставляете заявку — мы перезваниваем в течение 15 минут. Обсуждаем пожелания, площадь, бюджет и сроки.",
  },
  {
    icon: "PencilRuler",
    number: "02",
    title: "Выезд и проект",
    duration: "3–5 дней",
    description: "Бесплатно выезжаем на замер. Разрабатываем проект, подбираем материалы и согласовываем фиксированную смету.",
  },
  {
    icon: "Hammer",
    number: "03",
    title: "Строительство",
    duration: "30–45 дней",
    description: "Возводим объект строго по проекту и смете. Регулярно присылаем фотоотчёты — вы всегда в курсе хода работ.",
  },
  {
    icon: "KeyRound",
    number: "04",
    title: "Сдача под ключ",
    duration: "1–2 дня",
    description: "Проводим пуско-наладку, обучаем работе с оборудованием и передаём гарантийные документы. Объект готов.",
  },
]

interface Props {
  badge?: string
  title?: string
  titleAccent?: string
  steps?: ProcessStep[]
}

export function ProcessSection({ badge, title, titleAccent, steps: stepsProp }: Props = {}) {
  const steps = stepsProp ?? defaultSteps
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(165deg, hsl(220 27% 10%), hsl(220 32% 7%))' }}>
      {/* Decorative glows */}
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'hsl(145 63% 42%)' }} />
      <div className="absolute -bottom-40 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'hsl(160 70% 45%)' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-5 mx-auto text-green-300 border border-green-400/20"
            style={{ background: 'hsl(145 63% 42% / 0.12)' }}>
            {badge ?? "Как мы работаем"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance">
            {title ?? "От заявки до готовой"}<br />
            <span className="text-green-400">{titleAccent ?? "сауны — 4 шага"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          {/* Glowing connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px z-0"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(145 63% 50% / 0.5), transparent)' }} />

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 sm:p-7 border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.07] hover:border-green-400/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Big ghost number */}
              <span
                className="absolute top-3 right-5 text-6xl font-black leading-none select-none pointer-events-none font-heading"
                style={{ color: 'hsl(0 0% 100% / 0.06)' }}
              >
                {step.number}
              </span>

              {/* Icon badge */}
              <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(145 63% 42%), hsl(150 70% 26%))',
                  boxShadow: '0 8px 24px -4px hsl(145 63% 40% / 0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}>
                <Icon name={step.icon} className="w-7 h-7 text-white" fallback="Check" />
              </div>

              {/* Arrow between (desktop) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-9 -right-3.5 z-20 w-6 h-6 text-green-400/70" />
              )}

              <div className="text-xs font-black tracking-widest text-green-400/80 mb-2 uppercase font-heading">
                Шаг {step.number}
              </div>
              <h3 className="font-bold text-lg text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">{step.description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full self-start text-green-300 border border-green-400/20"
                style={{ background: 'hsl(145 63% 42% / 0.12)' }}>
                <Icon name="Clock" className="w-3.5 h-3.5" fallback="Clock" />
                {step.duration}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <LeadDialog source="Секция «Процесс»" title="Бесплатная консультация" submitText="Получить консультацию">
            <button className="btn-green text-base mx-auto inline-flex">
              Начать прямо сейчас — бесплатная консультация
              <ArrowRight className="w-4 h-4" />
            </button>
          </LeadDialog>
        </div>
      </div>
    </section>
  )
}