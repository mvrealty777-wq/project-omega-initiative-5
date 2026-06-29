import { CheckCircle2, ArrowRight } from "lucide-react"
import { LeadDialog } from "@/components/LeadDialog"

const CDN = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/"

interface SlugConfig {
  badge: string
  title: string
  accent: string
  subtitle: string
  points: string[]
  image: string
  imageAlt: string
  stat: string
  statLabel: string
  cta: string
}

const configs: Record<string, SlugConfig> = {
  hammam: {
    badge: "Хаммамы под ключ",
    title: "Строим хаммамы",
    accent: "любой сложности",
    subtitle: "Берёмся за объекты от компактного хаммама в квартире до роскошного SPA-комплекса. Полностью отвечаем за результат — от проекта до первого пара.",
    points: [
      "Хаммамы от 4 до 100 м² в квартирах, домах и отелях",
      "Купол, мозаика, чебек и парогенератор в одном договоре",
      "Работаем с частными клиентами и коммерческими объектами",
      "Гидроизоляция и вентиляция с гарантией 10 лет",
    ],
    image: CDN + "783b38dd-5f3d-43c6-ad97-fa1bbde4f1f1.jpg",
    imageAlt: "Готовый хаммам под ключ",
    stat: "350+",
    statLabel: "хаммамов сдано",
    cta: "Обсудить проект хаммама",
  },
  sauna: {
    badge: "Сауны под ключ",
    title: "Строим сауны и бани",
    accent: "под ваш бюджет",
    subtitle: "Финские сауны, русские бани, стеклянные и инфракрасные — реализуем любой проект от компактной дачной парной до коммерческой сауны для SPA.",
    points: [
      "Финские, русские, стеклянные и ИК-сауны под ключ",
      "Кедр, липа, абаши — подберём дерево под ваш запрос",
      "Монтаж каменки, вентиляции и пароизоляции за один выезд",
      "Реставрация и реконструкция существующих парных",
    ],
    image: CDN + "50fc1069-3681-4e9a-846c-a81b8e4d6f0a.jpg",
    imageAlt: "Готовая финская сауна под ключ",
    stat: "500+",
    statLabel: "саун и бань сдано",
    cta: "Обсудить проект сауны",
  },
  pool: {
    badge: "Бассейны под ключ",
    title: "Строим бассейны",
    accent: "любой формы и глубины",
    subtitle: "Проектируем и строим бассейны для квартир, домов, отелей и SPA. Чаша, отделка, фильтрация и автоматика — всё в одних руках.",
    points: [
      "Бассейны от 3 до 500 м³ в помещениях и на улице",
      "Мозаика, плитка, лайнер — любая облицовка чаши",
      "Фильтрация, подогрев и автоматическая химия воды",
      "Подводная подсветка, гидромассаж и противоток",
    ],
    image: CDN + "b2547f5c-3ad1-4287-acc3-ef15b0ca7754.jpg",
    imageAlt: "Готовый бассейн под ключ",
    stat: "150+",
    statLabel: "бассейнов сдано",
    cta: "Обсудить проект бассейна",
  },
  "salt-cave": {
    badge: "Зоны впечатлений",
    title: "Создаём зоны",
    accent: "для тела и разума",
    subtitle: "Соляные комнаты, флоатинг, криосауны и паровые бани — проектируем и строим пространства для глубокого расслабления и оздоровления.",
    points: [
      "Соляные комнаты с гималайской солью под ключ",
      "Флоат-камеры и зоны сенсорной депривации",
      "Криосауны и контрастные зоны для wellness-центров",
      "Разработка концепции и дизайн-проект в подарок",
    ],
    image: CDN + "b3cdb57a-d5df-4afb-a319-eaa6ca068479.jpg",
    imageAlt: "Соляная пещера под ключ",
    stat: "80+",
    statLabel: "зон впечатлений",
    cta: "Обсудить проект",
  },
  "infrared-sauna": {
    badge: "ИК-сауны под ключ",
    title: "Монтируем ИК-сауны",
    accent: "за 5–7 дней",
    subtitle: "Инфракрасные кабины из кедра и липы с карбоновыми излучателями — устанавливаем в любом помещении без строительных работ и шума.",
    points: [
      "ИК-сауны под размер любого помещения",
      "Кедр, канадский хемлок, липа — на ваш выбор",
      "Хромотерапия, аудиосистема и сенсорное управление",
      "Монтаж за 1 день без пыли и строительного мусора",
    ],
    image: CDN + "322abac6-3fe8-4681-87ff-128948412ea3.jpg",
    imageAlt: "Инфракрасная сауна под ключ",
    stat: "200+",
    statLabel: "ИК-саун установлено",
    cta: "Обсудить проект ИК-сауны",
  },
  "bath-complex": {
    badge: "Банные комплексы",
    title: "Строим комплексы",
    accent: "для отдыха и бизнеса",
    subtitle: "Банные комплексы под ключ: сауна + хаммам + бассейн + зона отдыха. Проектируем и строим от фундамента до автоматики управления.",
    points: [
      "Комплексы от 30 м² для частных домов и отелей",
      "Сауна, хаммам, купель и комната отдыха в одном проекте",
      "Автоматизация: один пульт управляет всем комплексом",
      "Работаем с девелоперами и гостиничными сетями",
    ],
    image: CDN + "588ee655-d51e-41bb-836a-8f956187e938.jpg",
    imageAlt: "Банный комплекс под ключ",
    stat: "60+",
    statLabel: "комплексов сдано",
    cta: "Обсудить банный комплекс",
  },
  cooling: {
    badge: "Зоны охлаждения",
    title: "Монтируем зоны",
    accent: "контрастных процедур",
    subtitle: "Купели, ледяные фонтаны, снежные комнаты и душ впечатлений — завершаем термальный цикл и усиливаем оздоровительный эффект парной.",
    points: [
      "Купели из нержавейки с охлаждением воды до +8°C",
      "Ледяные фонтаны и генераторы снега для spa",
      "Душ впечатлений с 5 режимами: дождь, тропик, контраст",
      "Интеграция в существующий банный комплекс",
    ],
    image: CDN + "638b23f2-8aac-46d6-994c-17dae7823a47.jpg",
    imageAlt: "Зона охлаждения под ключ",
    stat: "120+",
    statLabel: "зон охлаждения",
    cta: "Обсудить зону охлаждения",
  },
  equipment: {
    badge: "Оборудование",
    title: "Подбираем оборудование",
    accent: "с гарантией и монтажом",
    subtitle: "Электрокаменки, парогенераторы, дровяные печи и автоматика — поставляем напрямую от брендов и монтируем силами собственных мастеров.",
    points: [
      "Harvia, EOS, SAWO, TYLÖ, HygroMatik — официальный дилер",
      "Подбор мощности под объём и тип парной",
      "Монтаж, пусконаладка и гарантийное обслуживание",
      "Замена и модернизация существующего оборудования",
    ],
    image: CDN + "7b5ee4cd-1771-4b4d-a188-43838701e352.jpg",
    imageAlt: "Оборудование для бань и саун",
    stat: "1000+",
    statLabel: "единиц оборудования",
    cta: "Подобрать оборудование",
  },
  "salt-cave-room": {
    badge: "Соляные пещеры",
    title: "Строим соляные пещеры",
    accent: "для здоровья и бизнеса",
    subtitle: "Галокамеры из гималайской и каменной соли с галогенератором — создаём атмосферу настоящей соляной пещеры в любом помещении.",
    points: [
      "Соляные пещеры от 4 до 50 м² под ключ",
      "Гималайская и белая каменная соль на выбор",
      "Профессиональный галогенератор с авторежимами",
      "LED-подсветка и климат-контроль в комплекте",
    ],
    image: CDN + "b3cdb57a-d5df-4afb-a319-eaa6ca068479.jpg",
    imageAlt: "Соляная пещера под ключ",
    stat: "90+",
    statLabel: "соляных пещер",
    cta: "Обсудить проект пещеры",
  },
}

const defaultConfig: SlugConfig = {
  badge: "Наш подход",
  title: "Готовы реализовать проекты",
  accent: "любой сложности",
  subtitle: "Берёмся за объекты любого масштаба — от компактной сауны на даче до банного комплекса для отеля. Полностью отвечаем за результат: проектируем, строим и сдаём под ключ.",
  points: [
    "Хаммамы, сауны, бани и бассейны под ключ",
    "Работаем с частными и коммерческими объектами",
    "Реставрация и реконструкция существующих парных",
    "Собственная команда мастеров без подрядчиков",
  ],
  image: CDN + "b6c32134-97f3-415b-a900-6e3820b49444.jpg",
  imageAlt: "Премиальная сауна под ключ",
  stat: "400+",
  statLabel: "объектов сдано",
  cta: "Обсудить ваш проект",
}

interface Props {
  slug?: string
}

export function ReadySection({ slug }: Props = {}) {
  const cfg = (slug && configs[slug]) ? configs[slug] : defaultConfig

  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="section-badge mb-5">{cfg.badge}</div>
            <h2
              className="text-4xl sm:text-5xl font-black text-foreground mb-5 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {cfg.title} <span className="text-primary">{cfg.accent}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              {cfg.subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {cfg.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>

            <LeadDialog source={`Секция «Готовы реализовать» — ${slug ?? "главная"}`} title={cfg.cta} submitText={cfg.cta}>
              <button className="btn-green inline-flex">
                {cfg.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </LeadDialog>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={cfg.image}
                alt={cfg.imageAlt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-6 py-4 border border-border hidden sm:block">
              <p className="text-3xl font-black text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>{cfg.stat}</p>
              <p className="text-xs text-muted-foreground">{cfg.statLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
