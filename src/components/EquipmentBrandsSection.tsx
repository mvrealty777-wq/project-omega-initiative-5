import { ShieldCheck } from "lucide-react"

const brands = ["HARVIA", "TYLÖ", "HygroMatik", "SAWO", "EOS", "KLAFS"]

export function EquipmentBrandsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 section-badge mb-5">
            <ShieldCheck className="w-4 h-4" />
            Официальные поставщики
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Гарантируем лучшую цену <span className="text-primary">на оборудование</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Работаем напрямую с заводами и официальными дистрибьюторами. Печи, парогенераторы
            и автоматику ведущих мировых брендов поставляем дешевле, чем в розницу.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center h-20 bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span
                className="text-lg font-black text-foreground/70 tracking-wide"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}