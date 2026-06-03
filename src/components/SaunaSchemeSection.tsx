import { useState } from "react"

interface Point {
  n: number
  label: string
  x: number // % по горизонтали
  y: number // % по вертикали
}

// Координаты точек подобраны под сгенерированную схему сауны
const points: Point[] = [
  { n: 1, label: "Фольга", x: 7, y: 70 },
  { n: 2, label: "Вата", x: 9, y: 48 },
  { n: 3, label: "Мембрана", x: 13, y: 37 },
  { n: 4, label: "Вагонка на стенах и потолке", x: 26, y: 15 },
  { n: 5, label: "Спинка", x: 27, y: 37 },
  { n: 6, label: "Полки", x: 34, y: 66 },
  { n: 7, label: "Решётки на пол", x: 35, y: 80 },
  { n: 8, label: "Потолочные галтели", x: 60, y: 18 },
  { n: 9, label: "Дверь", x: 62, y: 49 },
  { n: 10, label: "Гималайская соль", x: 56, y: 24 },
  { n: 11, label: "Натуральный камень", x: 10, y: 57 },
  { n: 12, label: "Термозащитная подставка", x: 27, y: 80 },
  { n: 13, label: "Дровяная печь", x: 29, y: 72 },
  { n: 14, label: "Облицовка для печи", x: 29, y: 59 },
  { n: 15, label: "Бак для воды", x: 23, y: 49 },
  { n: 16, label: "Дымоход", x: 22, y: 29 },
  { n: 17, label: "Электрическая печь", x: 53, y: 70 },
  { n: 18, label: "Камень для печи", x: 50, y: 48 },
  { n: 19, label: "Оптоволоконная подсветка", x: 44, y: 18 },
  { n: 20, label: "Аксессуары", x: 40, y: 55 },
  { n: 21, label: "Термометр", x: 41, y: 37 },
  { n: 22, label: "Заглушка вентиляционного отверстия", x: 33, y: 28 },
  { n: 23, label: "Освещение", x: 52, y: 41 },
]

export function SaunaSchemeSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <div className="section-badge mb-4">Оборудование и материалы</div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-2 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Выбор оборудования и <span className="text-primary">материалов для сауны</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Всё оборудование и материалы у нас в продаже! Наведите на номер — увидите, что где находится.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8 items-start">
          {/* Схема с точками */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-white">
            <img
              src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/fb7ddfb1-3243-489d-9d99-6c58acd421c0.jpg"
              alt="Схема устройства сауны"
              className="w-full h-full object-cover"
            />
            {points.map((p) => (
              <button
                key={p.n}
                type="button"
                onMouseEnter={() => setActive(p.n)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(p.n)}
                onBlur={() => setActive(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full font-black text-xs transition-all duration-200 cursor-pointer"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: active === p.n ? 30 : 24,
                  height: active === p.n ? 30 : 24,
                  background: active === p.n ? 'hsl(145 63% 30%)' : 'rgba(255,255,255,0.95)',
                  color: active === p.n ? '#fff' : 'hsl(145 63% 30%)',
                  border: '2px solid hsl(145 63% 30%)',
                  boxShadow: active === p.n ? '0 0 0 5px hsla(145,63%,30%,0.25)' : '0 2px 6px rgba(0,0,0,0.3)',
                  zIndex: active === p.n ? 20 : 10,
                }}
                aria-label={`${p.n}. ${p.label}`}
              >
                {p.n}
              </button>
            ))}
          </div>

          {/* Легенда */}
          <div className="grid grid-cols-1 gap-1.5">
            {points.map((p) => (
              <button
                key={p.n}
                type="button"
                onMouseEnter={() => setActive(p.n)}
                onMouseLeave={() => setActive(null)}
                className={`flex items-center gap-3 text-left rounded-lg px-3 py-2 border transition-all ${
                  active === p.n
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-border bg-white hover:border-primary/40'
                }`}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-colors"
                  style={{
                    background: active === p.n ? 'hsl(145 63% 30%)' : 'hsl(145 63% 32% / 0.12)',
                    color: active === p.n ? '#fff' : 'hsl(145 63% 30%)',
                  }}
                >
                  {p.n}
                </span>
                <span className="text-sm font-medium text-foreground/80">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
