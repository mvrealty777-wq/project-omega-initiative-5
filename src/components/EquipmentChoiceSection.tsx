import Icon from "@/components/ui/icon"
import type { ChoiceProduct, ChoiceFeature } from "@/data/serviceContent"

const defaultProducts: ChoiceProduct[] = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/988d1b04-f34f-4a60-b1c2-5dd6af04601f.jpg",
    title: "Вагонка для сауны",
    text: "Кедр, липа, абаши, термоосина. Шлифованная евровагонка для стен и потолка парной.",
    badge: "от 950 ₽/м²",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/1a3ddb93-6269-4317-9e18-b58d210c901e.jpg",
    title: "Электрокаменка Harvia",
    text: "Электрические печи Harvia, EOS, SAWO с пультом управления для саун от 3 до 20 м².",
    badge: "от 28 000 ₽",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/05a9a2bb-2085-4374-b403-d1377edd33ce.jpg",
    title: "Дровяная печь",
    text: "Чугунные и стальные печи-каменки для бани и сауны со стеклянной дверцей и баком.",
    badge: "от 32 000 ₽",
  },
]

const defaultFeatures: ChoiceFeature[] = [
  { icon: "BadgeCheck", text: "Только сертифицированное оборудование" },
  { icon: "Truck", text: "Доставка и монтаж по всей России" },
  { icon: "Wallet", text: "Прямые поставки — лучшая цена" },
]

interface Props {
  title?: string
  titleAccent?: string
  subtitle?: string
  cta?: string
  products?: ChoiceProduct[]
  features?: ChoiceFeature[]
}

export function EquipmentChoiceSection({ title, titleAccent, subtitle, cta, products: productsProp, features: featuresProp }: Props = {}) {
  const products = productsProp ?? defaultProducts
  const features = featuresProp ?? defaultFeatures
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-badge mb-4 mx-auto">Оборудование и материалы</div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {title ?? "Выбор оборудования и"} <span className="text-primary">{titleAccent ?? "материалов для сауны"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            {subtitle ?? "Всё оборудование и материалы у нас в продаже! Подберём комплектацию под ваш проект и бюджет."}
          </p>
        </div>

        {/* Карточки товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {products.map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="relative h-48 sm:h-52 overflow-hidden bg-secondary/40">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full text-primary bg-white shadow-md" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {p.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества + CTA */}
        <div className="mt-7 rounded-2xl border border-border bg-white shadow-sm p-5 sm:p-6 flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 flex-1">
            {features.map((f) => (
              <span key={f.text} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Icon name={f.icon} className="w-5 h-5 text-primary flex-shrink-0" fallback="Check" />
                {f.text}
              </span>
            ))}
          </div>
          <a href="#contact" className="btn-green whitespace-nowrap flex-shrink-0">
            {cta ?? "Подобрать оборудование"}
            <Icon name="ArrowRight" className="w-4 h-4" fallback="ChevronRight" />
          </a>
        </div>
      </div>
    </section>
  )
}