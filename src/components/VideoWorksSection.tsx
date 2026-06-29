import { useState, useRef, useEffect } from "react"
import { Play, X } from "lucide-react"

interface Video {
  title: string
  sub: string
  src: string
}

const BASE = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/"

const videos: Video[] = [
  { title: "Строительство хаммама", sub: "Этапы монтажа и отделки", src: BASE + "b4facf2e-7c4a-4ec3-94d8-b960cc268047.mp4" },
  { title: "Хаммам под ключ", sub: "Мозаика · пар · звёздное небо", src: BASE + "a8dcb69f-ee0a-4dc7-9e12-c77286902dc8.mp4" },
  { title: "Отделка и оборудование", sub: "Финишные работы · монтаж", src: BASE + "1037de40-cbc1-4bc6-b1e4-3cb535779009.mp4" },
  { title: "Парная — финская сауна", sub: "Классический стиль · липа", src: BASE + "8605a0cb-2c34-4baf-b242-307b7f830cbf.mp4" },
  { title: "Хаммам в частном доме", sub: "14 м² · мозаика · чебек с подогревом", src: BASE + "cd39b9e8-2aab-4b0f-8824-be3cfc16b99d.mp4" },
  { title: "Финская сауна на даче", sub: "8 м² · кедр · электрокаменка", src: BASE + "558b57b8-2f29-4972-b9cc-2c8d7f2dc198.mp4" },
  { title: "Мозаичная отделка хаммама", sub: "Ручная выкладка изнутри", src: BASE + "dae4abe1-6c8a-4713-b158-7e2fc63ed37a.mp4" },
  { title: "Парная из кедра", sub: "Коттедж · многоуровневые полки", src: BASE + "58ef9104-ef13-43ea-8e4c-0027a8466694.mp4" },
  { title: "Соляная пещера", sub: "Гималайская соль · подсветка · вентиляция", src: BASE + "8276dbd6-0959-4c77-9d10-398fe80d27de.mp4" },
  { title: "Дровяная печь-каменка", sub: "Монтаж и запуск в русской бане", src: BASE + "1b1d335a-ac44-47d1-b347-e33f3d380376.mp4" },
  { title: "SPA-комплекс для отеля", sub: "Сауна + хаммам + купель · под ключ", src: BASE + "36049ec6-55f1-43bd-885c-555aec90b162.mp4" },
  { title: "Хаммам премиум", sub: "Отделка · мозаика · паровая система", src: BASE + "881bccb3-d85c-43ec-a348-245c154d5877.mp4" },
  { title: "Строительство сауны", sub: "Монтаж под ключ", src: BASE + "dcae31e2-e699-495f-aa17-ebc2846604f2.mp4" },
  { title: "Хаммам в квартире", sub: "Дизайн · отделка · оборудование", src: BASE + "86b8ad56-9eba-4a8a-aca6-3d54e31cea2e.mp4" },
  { title: "Паровая комната", sub: "Комплексный монтаж", src: BASE + "eff279e0-1e7c-47da-a013-88a518793ede.mp4" },
]

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Загружаем метаданные сразу и показываем первый кадр
    el.preload = "metadata"
    el.load()
    const onMeta = () => { el.currentTime = 0.1 }
    el.addEventListener("loadedmetadata", onMeta)
    return () => el.removeEventListener("loadedmetadata", onMeta)
  }, [])

  const handleMouseEnter = () => {
    const el = ref.current
    if (!el) return
    setPlaying(true)
    el.currentTime = 0
    el.play().catch(() => {})
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    setPlaying(false)
    el.pause()
    el.currentTime = 0.1
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left w-full bg-stone-900"
      style={{ aspectRatio: "3/4" }}
      aria-label={video.title}
    >
      <video
        ref={ref}
        src={video.src}
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent group-hover:from-black/70 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`w-11 h-11 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${playing ? "bg-primary scale-110" : "bg-white/90 group-hover:scale-110 group-hover:bg-primary"}`}>
          <Play className={`w-5 h-5 fill-current ml-0.5 transition-colors ${playing ? "text-white" : "text-primary group-hover:text-white"}`} />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-bold text-sm leading-tight mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {video.title}
        </p>
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
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Наши <span className="text-primary">работы в видео</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Наводи на карточку — видео запустится. Нажми чтобы смотреть полностью
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} onClick={() => setActive(video)} />
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: "min(360px, 92vw)", aspectRatio: "9/16", maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={active.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover bg-black"
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