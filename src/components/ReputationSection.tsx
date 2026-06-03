const clients = [
  "AZIMUT Hotels",
  "Park Inn",
  "Radisson",
  "Helvetia",
  "Поместье",
  "Лесной",
]

export function ReputationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="section-badge mb-5 mx-auto">Нам доверяют</div>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Проверенная <span className="text-primary">репутация</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Нам доверяют крупные отели, рестораны и spa-комплексы. Среди наших заказчиков —
            известные гостиничные сети и частные клиенты по всей России.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center text-center h-24 px-3 bg-gray-50 rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span
                className="text-sm font-bold text-foreground/60"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}