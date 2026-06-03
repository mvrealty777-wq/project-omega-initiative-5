import { ArrowRight, CheckCircle, Star } from "lucide-react"

const stats = [
  { value: "10+", label: "лет опыта" },
  { value: "200+", label: "объектов сдано" },
  { value: "5 лет", label: "гарантия" },
  { value: "100%", label: "под ключ" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-green-50 to-transparent" />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'hsl(145 63% 32% / 0.07)', top: '10%', right: '5%' }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: 'hsl(145 63% 32% / 0.06)', bottom: '10%', left: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <div className="section-badge mb-6 animate-fade-in-up">
              <Star className="w-3.5 h-3.5" />
              Строительство саун и хамамов под ключ
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 animate-fade-in-up animate-delay-100 text-foreground"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Строим сауны<br />
              и хамамы,{" "}
              <span className="relative text-primary">
                которые нравятся
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                  <path d="M0 3C75 1 225 5 300 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-200">
              Проектируем и строим финские сауны, русские бани и турецкие хамамы для частных домов и коммерческих объектов. Полный цикл работ — от эскиза до сдачи.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animate-delay-200">
              <a href="#contact" className="btn-green text-base">
                Получить расчёт бесплатно
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="btn-green-outline text-base">
                Наши объекты
              </a>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              {[
                "Бесплатный выезд на замер",
                "Гарантия 5 лет",
                "Фиксированная смета",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — visual */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(145 30% 15%) 0%, hsl(145 20% 8%) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem',
                  lineHeight: 1,
                }}
              >
                🌲
              </div>
              <div className="absolute inset-0 img-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Финская сауна</p>
                <p className="text-white/80 text-sm">Подмосковье — сдано за 45 дней</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                  🏆
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Топ-1 в Москве</p>
                  <p className="text-xs text-muted-foreground">по отзывам клиентов</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'hsl(145 63% 32% / 0.12)' }}>
                  ⚡
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Срок 30–90 дней</p>
                  <p className="text-xs text-muted-foreground">от замера до сдачи</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border animate-fade-in-up animate-delay-300">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-primary mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
