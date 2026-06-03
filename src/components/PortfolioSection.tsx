import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    title: "Королевский день",
    category: "Программа дня",
    emoji: "👑",
    duration: "4 часа",
    description:
      "Полное погружение в роскошь: ароматический пилинг, обёртывание с морскими водорослями, стоун-массаж и уход для лица. Идеально для особых поводов или когда хочется подарить себе настоящий праздник.",
    tags: ["Стоун-терапия", "Обёртывание", "Уход для лица", "Пилинг"],
  },
  {
    title: "Антистресс-ритуал",
    category: "Топ продаж",
    emoji: "🌿",
    duration: "2 часа",
    description:
      "Программа, специально созданная для снятия накопленного стресса. Массаж головы и воротниковой зоны, ароматерапия с эфирными маслами и расслабляющий массаж всего тела.",
    tags: ["Массаж головы", "Ароматерапия", "Воротниковая зона"],
  },
  {
    title: "Тайский ритуал",
    category: "Экзотика",
    emoji: "🪷",
    duration: "90 минут",
    description:
      "Аутентичный тайский массаж в исполнении сертифицированных мастеров. Работа с энергетическими меридианами, растяжка и акупрессура для полного обновления тела.",
    tags: ["Тайский массаж", "Акупрессура", "Растяжка"],
  },
  {
    title: "Шоколадное СПА",
    category: "Популярно у пар",
    emoji: "🍫",
    duration: "2.5 часа",
    description:
      "Роскошный ритуал на основе натурального какао: шоколадный пилинг, обёртывание с горьким шоколадом и питательный массаж. Кожа становится бархатистой, а настроение — великолепным.",
    tags: ["Шоколад", "Обёртывание", "Питательный массаж"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
            Авторские программы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Наши СПА-программы
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждая программа — это продуманный ритуал, сочетающий несколько техник для максимального результата. Выберите своё идеальное путешествие к себе.
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
