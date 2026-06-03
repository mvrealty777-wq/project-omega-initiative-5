import { CheckCircle2, ArrowRight } from "lucide-react"

const points = [
  "Хаммамы, сауны, бани и бассейны под ключ",
  "Работаем с частными и коммерческими объектами",
  "Реставрация и реконструкция существующих парных",
  "Собственная команда мастеров без подрядчиков",
]

export function ReadySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="section-badge mb-5">Наш подход</div>
            <h2
              className="text-4xl sm:text-5xl font-black text-foreground mb-5 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Готовы реализовать проекты <span className="text-primary">любой сложности</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Берёмся за объекты любого масштаба — от компактной сауны на даче до банного комплекса для отеля.
              Полностью отвечаем за результат: проектируем, строим и сдаём под ключ.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-green inline-flex">
              Обсудить ваш проект
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg"
                alt="Хаммам с классическими турецкими арками"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-6 py-4 border border-border hidden sm:block">
              <p className="text-3xl font-black text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>400+</p>
              <p className="text-xs text-muted-foreground">объектов сдано</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}