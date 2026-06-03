import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    title: "Финская сауна на даче",
    category: "Частный объект",
    emoji: "🪵",
    duration: "Срок: 45 дней",
    description:
      "Классическая финская сауна 6×4 м из профилированного бруса с предбанником и моечной. Печь Harvia, вагонка из абаши, стеклянная дверь. Сдана под ключ в Подмосковье.",
    tags: ["Брус", "Финская сауна", "Harvia", "Под ключ"],
  },
  {
    title: "Хамам в загородном доме",
    category: "Частный объект",
    emoji: "🕌",
    duration: "Срок: 60 дней",
    description:
      "Турецкий хамам 12 м² с мозаичной облицовкой, мраморным чебеком и системой влажного пара. Парогенератор Clio, подогрев пола и стен, кессонный свод с эффектом «звёздного неба».",
    tags: ["Мозаика", "Мрамор", "Парогенератор", "Хамам"],
  },
  {
    title: "Банный комплекс для отеля",
    category: "Коммерческий объект",
    emoji: "🏨",
    duration: "Срок: 90 дней",
    description:
      "Банный комплекс 80 м² для загородного отеля: финская сауна, хамам, ледяная купель и зона отдыха с баром. Проектирование, строительство и сертификация объекта под ключ.",
    tags: ["Комплекс", "Коммерция", "Сауна + Хамам", "Купель"],
  },
  {
    title: "Русская баня из бревна",
    category: "Частный объект",
    emoji: "🔥",
    duration: "Срок: 30 дней",
    description:
      "Традиционная рубленая баня из оцилиндрованного бревна диаметром 200 мм. Кирпичная печь-каменка, просторный предбанник, купель из лиственницы. Построена в Тверской области.",
    tags: ["Бревно", "Кирпичная печь", "Купель", "Русская баня"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
            Наши объекты
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Построенные объекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждый проект — это уникальное решение под запрос клиента. Вот несколько примеров наших последних работ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                  {program.emoji}
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {program.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2 tracking-wide uppercase">{program.category}</p>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}