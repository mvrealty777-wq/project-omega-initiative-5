import { useState } from "react"
import { LeadDialog } from "@/components/LeadDialog"
import { ArrowRight } from "lucide-react"

interface SchemePoint {
  id: number
  x: number   // % от ширины
  y: number   // % от высоты
  label: string
  description: string
  side: "left" | "right"
}

interface SchemeConfig {
  image: string
  title: string
  subtitle: string
  points: SchemePoint[]
}

const schemes: Record<string, SchemeConfig> = {
  hammam: {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    title: "Из чего состоит хаммам",
    subtitle: "Каждый элемент влияет на атмосферу и долговечность",
    points: [
      { id: 1, x: 22, y: 18, label: "Кессонный свод", description: "Купол с фибероптикой — имитация звёздного неба, меняет цвет с пульта", side: "left" },
      { id: 2, x: 72, y: 22, label: "Мозаичная облицовка", description: "Стеклянная или натуральная мозаика — водостойкая, долговечная, задаёт стиль", side: "right" },
      { id: 3, x: 50, y: 55, label: "Чебек (лежак)", description: "Анатомический мраморный лежак с подогревом до 50°C — сердце хаммама", side: "right" },
      { id: 4, x: 15, y: 60, label: "Парогенератор", description: "Скрытый в техническом помещении, подаёт пар через форсунки", side: "left" },
      { id: 5, x: 80, y: 65, label: "Мраморный пол", description: "Тёплый мраморный пол с подогревом — комфорт и роскошь", side: "right" },
      { id: 6, x: 40, y: 80, label: "Подсветка", description: "Скрытая RGB-подсветка периметра — задаёт настроение и цвет", side: "left" },
    ],
  },
  sauna: {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
    title: "Из чего состоит финская сауна",
    subtitle: "Правильный монтаж каждого слоя — залог 20 лет безупречной работы",
    points: [
      { id: 1, x: 20, y: 15, label: "Пароизоляция + вагонка", description: "Алюминиевая пароизоляция под вагонкой защищает конструкцию от влаги", side: "left" },
      { id: 2, x: 75, y: 20, label: "Потолок и освещение", description: "Термостойкое LED-освещение в потолке, оптоволоконные вставки", side: "right" },
      { id: 3, x: 18, y: 50, label: "Электрокаменка", description: "Harvia, EOS, SAWO — мощность подбирается под объём парной (1 кВт / м³)", side: "left" },
      { id: 4, x: 65, y: 48, label: "Многоуровневые полки", description: "Полки из абаши или липы — не обжигают, не выделяют смолу даже при 100°C", side: "right" },
      { id: 5, x: 50, y: 72, label: "Вентиляционный канал", description: "Приток снизу от печи — тяга обеспечивает свежий воздух и правильный прогрев", side: "left" },
      { id: 6, x: 78, y: 80, label: "Решётки на пол", description: "Деревянные решётки защищают пол и создают безопасное хождение", side: "right" },
    ],
  },
  pool: {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg",
    title: "Из чего состоит бассейн",
    subtitle: "Профессиональная инженерия обеспечивает чистоту и долговечность",
    points: [
      { id: 1, x: 20, y: 20, label: "Чаша и гидроизоляция", description: "Бетонная чаша с двухслойной гидроизоляцией — основа долговечности бассейна", side: "left" },
      { id: 2, x: 75, y: 18, label: "Мозаичная облицовка", description: "Стеклянная мозаика или плитка — красиво, безопасно, легко моется", side: "right" },
      { id: 3, x: 15, y: 55, label: "Система фильтрации", description: "Насос + фильтр + скиммер — очищает весь объём воды за 4–6 часов", side: "left" },
      { id: 4, x: 78, y: 50, label: "Подогрев воды", description: "Теплообменник или электронагреватель поддерживает комфортную температуру 28–30°C", side: "right" },
      { id: 5, x: 35, y: 82, label: "Донный слив", description: "Правильный уклон чаши и донный слив — ключ к чистоте воды", side: "left" },
      { id: 6, x: 70, y: 78, label: "Подводная подсветка", description: "LED прожекторы в нишах чаши — безопасно, красиво, 50 000 часов работы", side: "right" },
    ],
  },
  "salt-cave-room": {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/0c3708ac-d30b-4718-9b87-d5deeb7b94a1.jpg",
    title: "Из чего состоит соляная пещера",
    subtitle: "Каждый элемент влияет на терапевтический эффект",
    points: [
      { id: 1, x: 18, y: 22, label: "Гималайская соль", description: "Блоки розовой соли 5–10 см — источник отрицательных ионов, подсвечиваются изнутри", side: "left" },
      { id: 2, x: 78, y: 20, label: "Соляное покрытие пола", description: "Насыпная каменная соль на полу усиливает галотерапевтический эффект", side: "right" },
      { id: 3, x: 15, y: 60, label: "Галогенератор", description: "Распыляет микрочастицы соли в воздух — главный инструмент галотерапии", side: "left" },
      { id: 4, x: 75, y: 55, label: "Тёплая подсветка", description: "LED за блоками соли создаёт мягкий янтарный свет — расслабляет и успокаивает", side: "right" },
      { id: 5, x: 50, y: 78, label: "Лежаки и кресла", description: "Специальные деревянные лежаки — сеанс длится 40–60 минут лёжа или сидя", side: "left" },
    ],
  },
  cooling: {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/29ac4107-cc4b-49ff-980f-8534b208a073.jpg",
    title: "Из чего состоит зона охлаждения",
    subtitle: "Контраст температур — основа оздоровительного эффекта",
    points: [
      { id: 1, x: 20, y: 25, label: "Купель из нержавейки", description: "Полированная нержавеющая сталь 3 мм — гигиенично, долговечно, легко чистить", side: "left" },
      { id: 2, x: 75, y: 22, label: "Система охлаждения", description: "Чиллер охлаждает воду до +8°C — 30-секундное погружение после парной", side: "right" },
      { id: 3, x: 18, y: 60, label: "Ледяной фонтан", description: "Генератор льда — лёд рассыпают по телу после хаммама для контраста", side: "left" },
      { id: 4, x: 72, y: 58, label: "Гидромассаж", description: "Форсунки со сжатым воздухом и водой — массажный эффект в купели", side: "right" },
      { id: 5, x: 45, y: 80, label: "Душ впечатлений", description: "Тропический, контрастный, ароматический — несколько режимов одним нажатием", side: "left" },
    ],
  },
}

interface Props {
  slug: string
}

export function EquipmentSchemeSection({ slug }: Props) {
  const scheme = schemes[slug]
  const [active, setActive] = useState<number | null>(null)

  if (!scheme) return null

  const activePoint = scheme.points.find((p) => p.id === active)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(220 25% 9%), hsl(220 30% 6%))" }}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 mb-5"
            style={{ background: "rgba(74,222,128,0.10)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Состав и технологии
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {scheme.title}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">{scheme.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-12 items-start">
          {/* Scheme image with points */}
          <div className="relative rounded-3xl overflow-hidden select-none"
            style={{ aspectRatio: "16/10" }}>
            {/* Image */}
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />

            {/* Points */}
            {scheme.points.map((point) => {
              const isActive = active === point.id
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActive(isActive ? null : point.id)}
                  className="absolute group"
                  style={{ left: `${point.x}%`, top: `${point.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  {/* Pulsing ring */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-40"
                      style={{ background: "hsl(145 63% 50%)", margin: "-4px" }} />
                  )}
                  {/* Dot */}
                  <span className={`relative flex w-7 h-7 sm:w-8 sm:h-8 rounded-full items-center justify-center border-2 font-black text-xs transition-all duration-200 shadow-lg ${
                    isActive
                      ? "border-green-400 text-gray-900 scale-125 shadow-green-400/40"
                      : "border-white/80 text-white hover:border-green-400 hover:scale-110"
                  }`}
                    style={{
                      background: isActive
                        ? "hsl(145 63% 50%)"
                        : "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {point.id}
                  </span>

                  {/* Inline tooltip (mobile / hover) */}
                  {isActive && (
                    <span className={`absolute z-20 w-48 sm:w-56 bg-white rounded-xl shadow-2xl p-3 text-left pointer-events-none
                      ${point.side === "left" ? "left-10" : "right-10"} top-0`}
                      style={{ marginTop: "-4px" }}
                    >
                      <span className="block text-xs font-black text-foreground mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {point.label}
                      </span>
                      <span className="block text-[11px] text-muted-foreground leading-snug">
                        {point.description}
                      </span>
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Points list */}
          <div className="flex flex-col gap-3">
            {scheme.points.map((point) => {
              const isActive = active === point.id
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActive(isActive ? null : point.id)}
                  className={`group flex items-start gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-200 border ${
                    isActive
                      ? "border-green-500/40 shadow-lg shadow-green-900/20"
                      : "border-white/8 hover:border-white/20"
                  }`}
                  style={{
                    background: isActive
                      ? "hsl(145 63% 32% / 0.15)"
                      : "rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Number badge */}
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-sm transition-colors ${
                    isActive ? "text-gray-900" : "text-white"
                  }`}
                    style={{
                      background: isActive
                        ? "hsl(145 63% 50%)"
                        : "rgba(255,255,255,0.12)",
                    }}
                  >
                    {point.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm mb-0.5 transition-colors ${
                      isActive ? "text-green-400" : "text-white/90 group-hover:text-white"
                    }`} style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {point.label}
                    </p>
                    <p className={`text-xs leading-relaxed transition-all duration-200 ${
                      isActive ? "text-white/70 max-h-20" : "text-white/40 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:text-white/60"
                    }`}>
                      {point.description}
                    </p>
                  </div>

                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                    isActive
                      ? "border-green-400 bg-green-400/20"
                      : "border-white/20 group-hover:border-white/40"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? "bg-green-400" : "bg-white/30"
                    }`} />
                  </span>
                </button>
              )
            })}

            {/* CTA */}
            <div className="mt-2 pt-2">
              <LeadDialog
                source={`Схема оборудования — ${slug}`}
                title="Получить полную смету"
                description="Укажите контакты — подготовим расчёт с учётом всех элементов именно для вашего объекта."
                submitText="Получить смету"
              >
                <button className="btn-green w-full justify-center text-sm">
                  Получить расчёт с составом работ
                  <ArrowRight className="w-4 h-4" />
                </button>
              </LeadDialog>
            </div>
          </div>
        </div>

        {/* Active point description (bottom, mobile fallback) */}
        {activePoint && (
          <div className="mt-6 lg:hidden rounded-2xl border border-green-500/30 p-5"
            style={{ background: "hsl(145 63% 32% / 0.12)" }}>
            <p className="font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {activePoint.label}
            </p>
            <p className="text-white/70 text-sm leading-relaxed">{activePoint.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}
