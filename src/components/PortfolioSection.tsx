import { ArrowRight, MapPin, Clock } from "lucide-react"

const projects = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
    title: "Финская сауна на даче",
    location: "Подмосковье, Истринский район",
    duration: "45 дней",
    category: "Частный объект",
    description: "Классическая финская сауна 6×4 м из профилированного бруса с предбанником и моечной. Печь Harvia, вагонка из абаши, стеклянная дверь.",
    tags: ["Брус", "Harvia", "Абаши", "Под ключ"],
    badge: "bg-orange-100 text-orange-700",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/b14cf6dd-6668-414b-916f-634fa3822073.jpg",
    title: "Хамам в загородном доме",
    location: "Рублёво-Успенское шоссе",
    duration: "60 дней",
    category: "Частный объект",
    description: "Турецкий хамам 12 м² с мозаичной облицовкой, мраморным чебеком и системой влажного пара. Парогенератор Clio, кессонный свод со звёздным небом.",
    tags: ["Мозаика", "Мрамор", "Clio", "Хамам"],
    badge: "bg-blue-100 text-blue-700",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/edb9fa31-5b0f-4d77-8ed5-d57eab34adc3.jpg",
    title: "Банный комплекс для отеля",
    location: "Тверская область, отель «Лесной»",
    duration: "90 дней",
    category: "Коммерческий объект",
    description: "Банный комплекс 80 м² для загородного отеля: финская сауна, хамам, ледяная купель и зона отдыха с баром. Проектирование и сертификация.",
    tags: ["Сауна + Хамам", "Купель", "Коммерция"],
    badge: "bg-purple-100 text-purple-700",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/9f6b88e0-865f-4356-b88d-21ef416aadc7.jpg",
    title: "Русская баня из бревна",
    location: "Тверская область",
    duration: "30 дней",
    category: "Частный объект",
    description: "Традиционная рубленая баня из оцилиндрованного бревна ∅200 мм. Кирпичная печь-каменка, просторный предбанник, купель из лиственницы.",
    tags: ["Бревно", "Кирпичная печь", "Купель"],
    badge: "bg-green-100 text-green-700",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <div className="section-badge mb-4">Наши объекты</div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-balance"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Построенные <span className="text-primary">проекты</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Каждый проект — уникальное решение под запрос клиента. За 10 лет сдали более 200 объектов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.badge}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-lg text-foreground leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Сдан за {project.duration}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary font-medium border border-primary/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-green-outline inline-flex mx-auto">
            Обсудить ваш проект
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}