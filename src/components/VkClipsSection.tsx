import { useState } from "react"
import { X, Play } from "lucide-react"

interface Clip {
  id: string
  title: string
  thumb: string
}

const BASE = "https://vk.com/clip_ext.php?oid=-62729838&id="

const clips: Clip[] = [
  {
    id: "456239035",
    title: "Хаммам с мозаичной отделкой",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
  },
  {
    id: "456239039",
    title: "Хаммам в частном доме",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
  },
  {
    id: "456239036",
    title: "Строительство хаммама",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
  },
  {
    id: "456239031",
    title: "Финская сауна под ключ",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
  },
  {
    id: "456239028",
    title: "Парная — финская сауна",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg",
  },
  {
    id: "456239026",
    title: "Бассейн и SPA-зона",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg",
  },
  {
    id: "456239019",
    title: "Отделка и оборудование",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e99432a1-7193-4b89-a1c6-718880ad1dae.jpg",
  },
  {
    id: "456239025",
    title: "SPA-комплекс для отеля",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/300aee80-ed49-410c-b117-9d48406ecb27.jpg",
  },
]

export function VkClipsSection() {
  const [active, setActive] = useState<Clip | null>(null)

  return (
    <>
      <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <div className="section-badge mb-4 mx-auto">Клипы VK</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Смотрите <span className="text-primary">наши клипы</span>
            </h2>
            <p className="text-muted-foreground">Реальные объекты — без монтажа и фильтров</p>
          </div>

          {/* Горизонтальная прокрутка на мобиле, сетка на десктопе */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:overflow-visible sm:grid sm:grid-cols-4 lg:grid-cols-8 snap-x snap-mandatory scrollbar-hide">
            {clips.map((clip) => (
              <button
                key={clip.id}
                type="button"
                onClick={() => setActive(clip)}
                className="group relative flex-shrink-0 w-[140px] sm:w-auto rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 snap-start"
                style={{ aspectRatio: "9/16" }}
                aria-label={clip.title}
              >
                {/* Превью */}
                <img
                  src={clip.thumb}
                  alt={clip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

                {/* VK бейдж */}
                <div className="absolute top-2 left-2 bg-[#0077FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  VK
                </div>

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Play className="w-4 h-4 text-primary group-hover:text-white fill-current ml-0.5 transition-colors" />
                  </span>
                </div>

                {/* Заголовок */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {clip.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-5">
            Нажмите на клип, чтобы посмотреть полностью
          </p>
        </div>
      </section>

      {/* Плеер */}
      {active && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: "min(325px, 92vw)", aspectRatio: "325/646", maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${BASE}${active.id}&autoplay=1`}
              width="100%"
              height="100%"
              style={{ background: "#000", border: 0, display: "block" }}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
              allowFullScreen
              title={active.title}
            />
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
