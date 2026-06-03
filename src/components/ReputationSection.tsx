import Icon from "@/components/ui/icon"

const clients = [
  { name: "AZIMUT Hotels", type: "Сеть отелей" },
  { name: "Park Inn", type: "by Radisson" },
  { name: "Radisson", type: "Hotel Group" },
  { name: "Helvetia", type: "Отель, СПб" },
  { name: "Поместье", type: "Загородный клуб" },
  { name: "Лесной", type: "База отдыха" },
  { name: "Mriya Resort", type: "СПА-курорт" },
  { name: "Balchug", type: "Wellness-клуб" },
]

export function ReputationSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="section-badge mb-5 mx-auto">Нам доверяют</div>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Проверенная <span className="text-primary">репутация</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Нам доверяют крупные отели, рестораны и spa-комплексы. Среди наших заказчиков —
            известные гостиничные сети и частные клиенты по всей России.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center text-center h-32 px-4 bg-gray-50 rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors"
                style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                <Icon name="Building2" className="w-6 h-6 text-primary" fallback="Building" />
              </div>
              <span
                className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5">{client.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}