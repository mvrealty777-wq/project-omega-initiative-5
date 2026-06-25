import { LeadDialog } from "@/components/LeadDialog"
import { Flame, Shield, Clock, ArrowRight } from "lucide-react"

const perks = [
  { icon: Flame, text: "3D-визуализация в подарок" },
  { icon: Shield, text: "Гарантия 5 лет на работы" },
  { icon: Clock, text: "Перезвоним за 15 минут" },
]

export function FinalCtaSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(145 63% 36%), transparent 70%)" }} />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 mb-6"
          style={{ background: "rgba(74,222,128,0.12)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Бесплатно — без обязательств
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Получите расчёт{" "}
          <span className="text-green-400">бесплатно</span>
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Оставьте заявку сегодня — получите 3D-визуализацию вашей сауны или хаммама в подарок и точную смету в трёх вариантах.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {perks.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-4 py-2.5">
              <Icon className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium text-white/90">{text}</span>
            </div>
          ))}
        </div>

        <LeadDialog
          source="Финальный CTA — получить расчёт бесплатно"
          title="Получить расчёт бесплатно"
          description="Оставьте контакты — перезвоним за 15 минут и подготовим расчёт в 3 вариантах + 3D-визуализацию в подарок."
          submitText="Получить расчёт бесплатно"
        >
          <button className="btn-green text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 mx-auto inline-flex">
            Получить расчёт бесплатно
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </LeadDialog>

        <p className="text-white/40 text-xs mt-5">
          Нажимая кнопку, вы соглашаетесь с политикой обработки данных
        </p>
      </div>
    </section>
  )
}