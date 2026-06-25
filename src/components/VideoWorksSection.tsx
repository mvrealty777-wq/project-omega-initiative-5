import { useState, useRef } from "react"
import { Play, X } from "lucide-react"

type VideoType = "mp4" | "vk"

interface Video {
  title: string
  sub: string
  type: VideoType
  src: string
  thumb?: string
}

const VK_BASE = "https://vk.com/clip_ext.php?oid=-62729838&id="

const videos: Video[] = [
  {
    title: "Хаммам в частном доме",
    sub: "14 м² · мозаика · чебек с подогревом",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/cd39b9e8-2aab-4b0f-8824-be3cfc16b99d.mp4",
  },
  {
    title: "Хаммам с мозаичной отделкой",
    sub: "Ручная выкладка · турецкий стиль",
    type: "vk",
    src: "456239035",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
  },
  {
    title: "Финская сауна на даче",
    sub: "8 м² · кедр · электрокаменка",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/558b57b8-2f29-4972-b9cc-2c8d7f2dc198.mp4",
  },
  {
    title: "Хаммам под ключ",
    sub: "Строительство и отделка",
    type: "vk",
    src: "456239039",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
  },
  {
    title: "Мозаичная отделка хаммама",
    sub: "Ручная выкладка изнутри",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/dae4abe1-6c8a-4713-b158-7e2fc63ed37a.mp4",
  },
  {
    title: "Строительство хаммама",
    sub: "Этапы монтажа",
    type: "vk",
    src: "456239036",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
  },
  {
    title: "Парная из кедра",
    sub: "Коттедж · многоуровневые полки",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/58ef9104-ef13-43ea-8e4c-0027a8466694.mp4",
  },
  {
    title: "Финская сауна под ключ",
    sub: "Кедр · электрокаменка · полки",
    type: "vk",
    src: "456239031",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
  },
  {
    title: "Хаммам в восточном стиле",
    sub: "20 м² · звёздное небо · парогенератор",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/f6601a72-132d-432a-833f-739a430eee29.mp4",
  },
  {
    title: "Парная — финская сауна",
    sub: "Классический стиль · липа",
    type: "vk",
    src: "456239028",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg",
  },
  {
    title: "Дровяная печь-каменка",
    sub: "Монтаж и запуск в русской бане",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/1b1d335a-ac44-47d1-b347-e33f3d380376.mp4",
  },
  {
    title: "Бассейн и SPA-зона",
    sub: "Отделка · фильтрация · подогрев",
    type: "vk",
    src: "456239026",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg",
  },
  {
    title: "SPA-комплекс для отеля",
    sub: "Сауна + хаммам + купель · под ключ",
    type: "mp4",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/36049ec6-55f1-43bd-885c-555aec90b162.mp4",
  },
  {
    title: "Отделка и оборудование",
    sub: "Финишные работы · монтаж",
    type: "vk",
    src: "456239019",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e99432a1-7193-4b89-a1c6-718880ad1dae.jpg",
  },
  {
    title: "SPA-комплекс — обзор",
    sub: "Хаммам + сауна + зона отдыха",
    type: "vk",
    src: "456239025",
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/300aee80-ed49-410c-b117-9d48406ecb27.jpg",
  },
]

function Mp4Card({ video, onClick }: { video: Video; onClick: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => {
        if (ref.current) { ref.current.pause(); ref.current.currentTime = 0 }
      }}
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left w-full"
      style={{ aspectRatio: "3/4" }}
      aria-label={video.title}
    >
      <video ref={ref} src={video.src} muted playsInline preload="metadata" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent group-hover:from-black/70 transition-all" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all">
          <Play className="w-5 h-5 text-primary group-hover:text-white fill-current ml-0.5 transition-colors" />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-bold text-sm leading-tight mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>{video.title}</p>
        <p className="text-white/60 text-[11px]">{video.sub}</p>
      </div>
    </button>
  )
}

function VkCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left w-full"
      style={{ aspectRatio: "3/4" }}
      aria-label={video.title}
    >
      <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20 group-hover:from-black/70 transition-all" />
      <div className="absolute top-2.5 left-2.5 bg-[#0077FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide">VK</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all">
          <Play className="w-5 h-5 text-primary group-hover:text-white fill-current ml-0.5 transition-colors" />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-bold text-sm leading-tight mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>{video.title}</p>
        <p className="text-white/60 text-[11px]">{video.sub}</p>
      </div>
    </button>
  )
}

export function VideoWorksSection() {
  const [active, setActive] = useState<Video | null>(null)

  return (
    <>
      <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-9 sm:mb-10">
            <div className="section-badge mb-5 mx-auto">Видео-обзоры</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Наши <span className="text-primary">работы в видео</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Наводи на карточку — mp4 видео запустится сразу. Нажми чтобы смотреть полностью
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {videos.map((video, i) =>
              video.type === "mp4"
                ? <Mp4Card key={i} video={video} onClick={() => setActive(video)} />
                : <VkCard key={i} video={video} onClick={() => setActive(video)} />
            )}
          </div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm" onClick={() => setActive(null)}>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: "min(360px, 92vw)", aspectRatio: "9/16", maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "mp4" ? (
              <video src={active.src} controls autoPlay playsInline className="w-full h-full object-cover bg-black" />
            ) : (
              <iframe
                src={`${VK_BASE}${active.src}&autoplay=1`}
                width="100%" height="100%"
                style={{ background: "#000", border: 0, display: "block" }}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
                allowFullScreen
                title={active.title}
              />
            )}
            <button onClick={() => setActive(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
