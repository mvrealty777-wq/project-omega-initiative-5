import { CheckCircle2, ArrowRight } from "lucide-react"
import { LeadDialog } from "@/components/LeadDialog"

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

interface Content {
  badge: string
  title: string
  titleAccent: string
  subtitle: string
  points: string[]
  image: string
  imageAlt: string
  stat: string
  statLabel: string
}

const contentMap: Record<string, Content> = {
  hammam: {
    badge: "Наш подход",
    title: "Готовы реализовать хаммам",
    titleAccent: "любой сложности",
    subtitle: "Беремся за объекты любого масштаба — от компактной турецкой парной в квартире до spa-комплекса для отеля. Полностью отвечаем за результат.",
    points: [
      "Хаммамы в квартирах, домах, коттеджах и коммерческих объектах",
      "Мозаика, мрамор, купол, звёздное небо — любой дизайн",
      "Реставрация и реконструкция существующих хаммамов",
      "Собственная команда мастеров без субподрядчиков",
    ],
    image: CDN + "8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    imageAlt: "Хаммам под ключ",
    stat: "400+",
    statLabel: "хаммамов сдано",
  },
  sauna: {
    badge: "Наш подход",
    title: "Строим сауны и бани",
    titleAccent: "любой сложности",
    subtitle: "Финские сауны, русские бани, паровые комнаты — от дачного варианта до банного комплекса. Проектируем и строим под ключ.",
    points: [
      "Финские сауны, русские бани, паровые комнаты под ключ",
      "Работаем с частными и коммерческими объектами",
      "Реставрация и реконструкция существующих парных",
      "Собственная команда мастеров без субподрядчиков",
    ],
    image: CDN + "bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
    imageAlt: "Сауна под ключ",
    stat: "400+",
    statLabel: "объектов сдано",
  },
  pool: {
    badge: "Наш подход",
    title: "Строим бассейны",
    titleAccent: "любой сложности",
    subtitle: "Композитные и бетонные бассейны для частных домов, отелей и фитнес-центров. Полный цикл — от проекта до пуска воды.",
    points: [
      "Композитные и бетонные бассейны под ключ",
      "Крытые, открытые и infinity-бассейны",
      "Система фильтрации, подогрев, гидромассаж",
      "Собственная команда без субподрядчиков",
    ],
    image: CDN + "11121246-eb64-4c70-9ba6-30cd19046423.jpg",
    imageAlt: "Бассейн под ключ",
    stat: "100+",
    statLabel: "бассейнов сдано",
  },
  "salt-cave": {
    badge: "Наш подход",
    title: "Создаём зоны впечатлений",
    titleAccent: "любой сложности",
    subtitle: "Соляные комнаты, флоат-студии, криосауны и паровые бани — от одной кабины до wellness-комплекса.",
    points: [
      "Соляные комнаты, флоатинг, криосауны под ключ",
      "Для частных клиентов и коммерческих SPA",
      "Профессиональное оборудование и монтаж",
      "Обучение персонала и сервисное сопровождение",
    ],
    image: CDN + "0c3708ac-d30b-4718-9b87-d5deeb7b94a1.jpg",
    imageAlt: "Соляная комната",
    stat: "50+",
    statLabel: "зон создано",
  },
  "infrared-sauna": {
    badge: "Наш подход",
    title: "Изготавливаем ИК-сауны",
    titleAccent: "под любой размер",
    subtitle: "Инфракрасные кабины под размер помещения или ниши. Быстрый монтаж, минимальные требования к помещению.",
    points: [
      "ИК-кабины готовые и изготовленные под размер",
      "Монтаж за 1 день, подключение к стандартной розетке",
      "Кедр, липа, канадский хемлок на выбор",
      "Гарантия 5 лет на кабину и излучатели",
    ],
    image: CDN + "d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg",
    imageAlt: "Инфракрасная сауна",
    stat: "200+",
    statLabel: "кабин установлено",
  },
}

const defaultContent: Content = {
  badge: "Наш подход",
  title: "Готовы реализовать проекты",
  titleAccent: "любой сложности",
  subtitle: "Берёмся за объекты любого масштаба — от компактной сауны на даче до банного комплекса для отеля. Полностью отвечаем за результат.",
  points: [
    "Хаммамы, сауны, бани и бассейны под ключ",
    "Работаем с частными и коммерческими объектами",
    "Реставрация и реконструкция существующих парных",
    "Собственная команда мастеров без подрядчиков",
  ],
  image: CDN + "b6c32134-97f3-415b-a900-6e3820b49444.jpg",
  imageAlt: "Строительство под ключ",
  stat: "400+",
  statLabel: "объектов сдано",
}

interface Props {
  slug?: string
}

export function ReadySection({ slug }: Props) {
  const c = (slug && contentMap[slug]) ? contentMap[slug] : defaultContent

  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="section-badge mb-5">{c.badge}</div>
            <h2
              className="text-4xl sm:text-5xl font-black text-foreground mb-5 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {c.title} <span className="text-primary">{c.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">{c.subtitle}</p>

            <ul className="space-y-3 mb-8">
              {c.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>

            <LeadDialog source={`Секция «Готовы реализовать» — ${slug ?? 'общая'}`} title="Обсудить ваш проект" submitText="Обсудить проект">
              <button className="btn-green inline-flex">
                Обсудить ваш проект
                <ArrowRight className="w-4 h-4" />
              </button>
            </LeadDialog>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={c.image}
                alt={c.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-6 py-4 border border-border hidden sm:block">
              <p className="text-3xl font-black text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>{c.stat}</p>
              <p className="text-xs text-muted-foreground">{c.statLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
