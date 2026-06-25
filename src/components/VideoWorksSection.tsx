import { useState, useRef } from "react"
import { Play, X } from "lucide-react"

interface Video {
  title: string
  src: string
}

const videos: Video[] = [
  {
    title: "Хаммам под ключ",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/cd39b9e8-2aab-4b0f-8824-be3cfc16b99d.mp4",
  },
  {
    title: "Строительство сауны",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/558b57b8-2f29-4972-b9cc-2c8d7f2dc198.mp4",
  },
  {
    title: "Отделка хаммама",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/dae4abe1-6c8a-4713-b158-7e2fc63ed37a.mp4",
  },
  {
    title: "Финская парная",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/58ef9104-ef13-43ea-8e4c-0027a8466694.mp4",
  },
  {
    title: "Восточный хаммам",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/f6601a72-132d-432a-833f-739a430eee29.mp4",
  },
  {
    title: "Печь в парной",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/1b1d335a-ac44-47d1-b347-e33f3d380376.mp4",
  },
  {
    title: "SPA-комплекс",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/36049ec6-55f1-43bd-885c-555aec90b162.mp4",
  },
]

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { if (ref.current) { ref.current.pause(); ref.current.currentTime = 0 } }}
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left w-full"
      style={{ aspectRatio: "9/16" }}
      aria-label={`Смотреть: ${video.title}`}
    >
      {/* Видео как превью — автопауза, без звука */}
      <video
        ref={ref}
        src={video.src}
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300" />

      {/* Кнопка Play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
          <Play className="w-6 h-6 text-primary group-hover:text-white fill-current ml-0.5 transition-colors" />
        </span>
      </div>

      {/* Заголовок */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {video.title}
        </h3>
        <span className="text-white/60 text-[11px] mt-0.5 block">GeniusSPA</span>
      </div>
    </button>
  )
}

export function VideoWorksSection() {
  const [active, setActive] = useState<Video | null>(null)

  return (
    <>
      <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-9 sm:mb-10">
            <div className="section-badge mb-5 mx-auto">Видео-обзоры</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Наши <span className="text-primary">работы в видео</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Реальные кейсы — наводи на видео, чтобы посмотреть превью
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {videos.map((video, index) => (
              <VideoCard key={index} video={video} onClick={() => setActive(video)} />
            ))}
          </div>
        </div>
      </section>

      {/* Полноэкранный плеер */}
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
