import type { ServiceCase } from "@/data/serviceExtras"

interface Props {
  title: string
  subtitle: string
  cases: ServiceCase[]
}

export function ServiceCasesSection({ title, subtitle, cases }: Props) {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Наши работы</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-lg ${c.categoryColor}`}>
                  {c.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}