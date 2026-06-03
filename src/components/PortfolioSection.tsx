import { ArrowRight, Plus } from "lucide-react"

const projects = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    title: "Традиционный хаммам",
    description: "Традиционный хаммам со звёздным небом",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
    title: "Хаммам с классическими турецкими арками",
    description: "Подсветка и звёздное небо. Генератор морского климата. Душ впечатлений.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/372589d9-db8d-4b45-8a44-f9e720673402.jpg",
    title: "Хаммам и сауна Brooms в отеле Азимут",
    description: "SPA-комплекс в отеле АЗИМУТ с хаммамом и душем Vichy",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
    title: "Хаммам в морском стиле",
    description: "Бирюзовая мозаика, золотые декоративные элементы и подсветка. Морская тематика.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/b14cf6dd-6668-414b-916f-634fa3822073.jpg",
    title: "Хаммам с массажным столом",
    description: "Мраморный чебек, фиолетовая подсветка и зона для массажа. Премиум-отделка.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
    title: "Хаммам в деревянном доме",
    description: "Влагостойкая отделка, кессонный свод и синяя мозаика. Интеграция в деревянный дом.",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Более чем <span className="text-primary">400 выполненных</span> объектов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Показываем реальные кейсы, а не скопированные картинки из интернета. Оставьте заявку или позвоните нам по телефону{" "}
            <a href="tel:88003026753" className="text-primary font-semibold hover:underline">8 800 302-67-53</a>{" "}
            для консультации. Мы профессионалы и фанаты своего дела 😎
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                <a
                  href="#contact"
                  className="flex items-center justify-between mt-5 pt-4 border-t border-border text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                >
                  Подробное описание проекта
                  <span className="w-7 h-7 rounded-full flex items-center justify-center transition-all group-hover/link:bg-primary group-hover/link:text-white"
                    style={{ background: 'hsl(145 63% 32% / 0.1)', color: 'hsl(145 63% 32%)' }}>
                    <Plus className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-green inline-flex mx-auto text-base">
            Посмотреть все объекты и получить расчёт
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
