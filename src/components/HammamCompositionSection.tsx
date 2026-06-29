import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HammamElement {
  id: number;
  icon: string;
  title: string;
  description: string;
  x: string;
  y: string;
}

const ELEMENTS: HammamElement[] = [
  {
    id: 1,
    icon: "Sparkles",
    title: "Купол / Потолок",
    description:
      "Кессонный купол с мозаичной отделкой и встроенной подсветкой «Звёздное небо»",
    x: "50%",
    y: "10%",
  },
  {
    id: 2,
    icon: "CloudFog",
    title: "Парогенератор",
    description:
      "Профессиональный генератор пара HygroMatik/TYLÖ с автоматикой и ароматерапией",
    x: "85%",
    y: "40%",
  },
  {
    id: 3,
    icon: "Gem",
    title: "Мраморные стены",
    description:
      "Натуральный мрамор и мозаика Bisazza ручной выкладки. Влагостойкие и долговечные",
    x: "10%",
    y: "50%",
  },
  {
    id: 4,
    icon: "BedDouble",
    title: "Чебек (лежак)",
    description:
      "Подогреваемый мраморный лежак с анатомическим профилем, температура до 42°С",
    x: "50%",
    y: "65%",
  },
  {
    id: 5,
    icon: "Flame",
    title: "Тёплый пол",
    description:
      "Электрический тёплый пол под мраморной плиткой по всей площади",
    x: "30%",
    y: "85%",
  },
  {
    id: 6,
    icon: "Droplets",
    title: "Гидроизоляция",
    description:
      "Многослойная гидроизоляция стен, пола и потолка. Ни одной протечки за 10+ лет",
    x: "70%",
    y: "80%",
  },
  {
    id: 7,
    icon: "Wind",
    title: "Вентиляция",
    description:
      "Принудительная вентиляция обеспечивает правильный пар и защищает конструкцию",
    x: "15%",
    y: "20%",
  },
];

export function HammamCompositionSection() {
  const [activeId, setActiveId] = useState<number>(1);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setActiveId(id);
  };

  const activeElement = ELEMENTS.find((el) => el.id === activeId);

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(160deg, hsl(220 25% 8%), hsl(220 30% 5%))",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase"
                style={{
                  background: "hsl(145 63% 32% / 0.18)",
                  color: "hsl(145 63% 60%)",
                  border: "1px solid hsl(145 63% 32% / 0.35)",
                }}
              >
                <Icon name="LayoutTemplate" size={14} />
                Анатомия хаммама
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-heading">
                Из чего состоит{" "}
                <span className="text-primary">хаммам</span>
              </h2>
              <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-md">
                Каждый элемент хаммама выполняет свою роль — от создания
                правильного микроклимата до обеспечения безопасности и
                долговечности всей конструкции.
              </p>
            </div>

            {/* Elements list */}
            <div className="flex flex-col gap-2">
              {ELEMENTS.map((el) => {
                const isActive = activeId === el.id;
                return (
                  <button
                    key={el.id}
                    onClick={() => handleItemClick(el.id)}
                    className={[
                      "group flex items-start gap-4 px-4 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer w-full",
                      isActive
                        ? "border-l-[3px] border-primary pl-[13px]"
                        : "border-l-[3px] border-transparent hover:border-white/10",
                    ].join(" ")}
                    style={
                      isActive
                        ? { background: "hsl(145 63% 32% / 0.12)" }
                        : { background: "transparent" }
                    }
                    onMouseEnter={() =>
                      !isActive && setActiveId(el.id)
                    }
                    type="button"
                  >
                    {/* Number badge */}
                    <div
                      className={[
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                        isActive
                          ? "bg-primary text-white"
                          : "text-white/40 group-hover:text-white/70",
                      ].join(" ")}
                      style={
                        isActive
                          ? {}
                          : { background: "hsl(220 20% 18%)" }
                      }
                    >
                      {el.id}
                    </div>

                    {/* Icon */}
                    <div
                      className={[
                        "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 mt-0.5",
                        isActive
                          ? "bg-primary/20"
                          : "bg-white/5 group-hover:bg-white/10",
                      ].join(" ")}
                    >
                      <Icon
                        name={el.icon}
                        size={18}
                        className={
                          isActive
                            ? "text-primary"
                            : "text-white/40 group-hover:text-white/60"
                        }
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span
                        className={[
                          "font-semibold text-sm leading-snug transition-colors duration-300",
                          isActive
                            ? "text-white"
                            : "text-white/60 group-hover:text-white/80",
                        ].join(" ")}
                      >
                        {el.title}
                      </span>
                      <span
                        className={[
                          "text-xs leading-relaxed transition-all duration-300",
                          isActive
                            ? "text-white/55 max-h-20 opacity-100"
                            : "text-white/30 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100",
                        ].join(" ")}
                      >
                        {el.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="relative lg:sticky lg:top-8">
            {/* Image wrapper */}
            <div
              className="relative rounded-3xl overflow-hidden w-full"
              style={{
                aspectRatio: "4/5",
                boxShadow:
                  "inset 0 0 80px hsl(220 30% 3% / 0.5), 0 32px 64px hsl(220 30% 3% / 0.6)",
              }}
            >
              {/* Background image */}
              <img
                src="https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg"
                alt="Интерьер хаммама"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Subtle dark overlay for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(220 30% 5% / 0.2) 0%, transparent 40%, hsl(220 30% 5% / 0.35) 100%)",
                }}
              />

              {/* Active element label — bottom overlay */}
              {activeElement && (
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(0deg, hsl(220 30% 5% / 0.92) 0%, transparent 100%)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-0.5">
                      <Icon
                        name={activeElement.icon}
                        size={15}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-snug">
                        {activeElement.title}
                      </p>
                      <p className="text-white/60 text-xs leading-relaxed mt-0.5">
                        {activeElement.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Hotspot dots */}
              {ELEMENTS.map((el) => {
                const isActive = activeId === el.id;
                const isDotHovered = hoveredDot === el.id;
                const showLabel = isDotHovered && !isActive;

                return (
                  <button
                    key={el.id}
                    type="button"
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group/dot"
                    style={{ left: el.x, top: el.y }}
                    onClick={() => handleItemClick(el.id)}
                    onMouseEnter={() => setHoveredDot(el.id)}
                    onMouseLeave={() => setHoveredDot(null)}
                  >
                    {/* Outer pulse ring */}
                    <span
                      className={[
                        "absolute inset-0 rounded-full transition-all duration-300",
                        isActive
                          ? "animate-ping bg-primary/50 scale-150"
                          : "bg-primary/25 group-hover/dot:bg-primary/40 group-hover/dot:scale-125",
                      ].join(" ")}
                      style={{ width: 24, height: 24, margin: -2 }}
                    />

                    {/* Dot itself */}
                    <span
                      className={[
                        "relative flex w-5 h-5 rounded-full border-2 border-white items-center justify-center transition-all duration-300",
                        isActive
                          ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                          : "bg-primary/70 group-hover/dot:bg-primary group-hover/dot:scale-110",
                      ].join(" ")}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    </span>

                    {/* Persistent label under dot */}
                    <span
                      className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 pointer-events-none z-20 text-center"
                      style={{
                        fontSize: "9px",
                        lineHeight: "1.25",
                        fontWeight: 600,
                        color: isActive ? "hsl(145 63% 70%)" : "rgba(255,255,255,0.82)",
                        textShadow: "0 1px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.8)",
                        width: "72px",
                        display: "block",
                      }}
                    >
                      {el.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Decorative glow behind image */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none -z-10 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, hsl(145 63% 32% / 0.4), transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}