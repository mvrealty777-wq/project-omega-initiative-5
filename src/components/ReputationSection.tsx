import Icon from "@/components/ui/icon"

interface Client {
  name: string
  type: string
  icon: string
  /** Стиль логотипа-вордмарка */
  font?: string
  letterSpacing?: string
  uppercase?: boolean
  accent?: string
}

const clients: Client[] = [
  { name: "AZIMUT", type: "Hotels · Сеть отелей", icon: "Building2", uppercase: true, letterSpacing: "0.18em", accent: "#0B4DA2" },
  { name: "Park Inn", type: "by Radisson", icon: "Hotel", accent: "#E11D48" },
  { name: "Radisson", type: "Hotel Group", icon: "BedDouble", letterSpacing: "0.04em", accent: "#1E3A8A" },
  { name: "Helvetia", type: "Отель, Санкт-Петербург", icon: "Landmark", accent: "#B8860B" },
  { name: "Поместье", type: "Загородный клуб", icon: "TreePine", accent: "#15803D" },
  { name: "Лесной", type: "База отдыха", icon: "Trees", accent: "#166534" },
  { name: "Mriya Resort", type: "СПА-курорт", icon: "Waves", letterSpacing: "0.06em", accent: "#0E7490" },
  { name: "Balchug", type: "Wellness-клуб", icon: "Sparkles", uppercase: true, letterSpacing: "0.14em", accent: "#6D28D9" },
]

export function ReputationSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Нам доверяют</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Проверенная <span className="text-primary">репутация</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Нам доверяют крупные отели, рестораны и spa-комплексы. Среди наших заказчиков —
            известные гостиничные сети и частные клиенты по всей России.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center text-center h-32 sm:h-36 px-4 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{ background: `${client.accent}14` }}
              >
                <Icon name={client.icon} className="w-5 h-5" style={{ color: client.accent }} fallback="Building" />
              </span>
              <span
                className="text-lg font-black leading-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: client.accent,
                  letterSpacing: client.letterSpacing,
                  textTransform: client.uppercase ? 'uppercase' : 'none',
                }}
              >
                {client.name}
              </span>
              <span className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{client.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
