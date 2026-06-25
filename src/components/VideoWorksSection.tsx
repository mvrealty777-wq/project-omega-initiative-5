import { useState } from "react"
import { Play, X } from "lucide-react"

interface Video {
  thumb: string
  title: string
  duration: string
  /** YouTube ID, VK видео URL или прямая ссылка на mp4 */
  src?: string
}

const HAMMAM_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg"
const SAUNA_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg"
const SAUNA2_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg"
const HAMMAM2_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg"
const HAMMAM3_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg"
const STOVE_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/0dcc86d1-41e2-437e-952a-6d8df810fba1.jpg"
const SPA_THUMB = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/300aee80-ed49-410c-b117-9d48406ecb27.jpg"

const videos: Video[] = [
  {
    thumb: HAMMAM_THUMB,
    title: "Хаммам под ключ",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/cd39b9e8-2aab-4b0f-8824-be3cfc16b99d.mp4",
  },
  {
    thumb: SAUNA_THUMB,
    title: "Строительство сауны",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/558b57b8-2f29-4972-b9cc-2c8d7f2dc198.mp4",
  },
  {
    thumb: HAMMAM2_THUMB,
    title: "Отделка хаммама",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/dae4abe1-6c8a-4713-b158-7e2fc63ed37a.mp4",
  },
  {
    thumb: SAUNA2_THUMB,
    title: "Финская парная",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/58ef9104-ef13-43ea-8e4c-0027a8466694.mp4",
  },
  {
    thumb: HAMMAM3_THUMB,
    title: "Восточный хаммам",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/f6601a72-132d-432a-833f-739a430eee29.mp4",
  },
  {
    thumb: STOVE_THUMB,
    title: "Печь в парной",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/1b1d335a-ac44-47d1-b347-e33f3d380376.mp4",
  },
  {
    thumb: SPA_THUMB,
    title: "SPA-комплекс",
    duration: "Видео",
    src: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/36049ec6-55f1-43bd-885c-555aec90b162.mp4",
  },
]

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
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Наши <span className="text-primary">работы в видео</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Посмотрите обзоры реализованных объектов — без прикрас, только реальные кейсы
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {videos.map((video, index) => (
              <button
                key={index}
                type="button"
                onClick={() => video.src && setActive(video)}
                className={`group relative rounded-2xl overflow-hidden aspect-video shadow-sm hover:shadow-xl transition-all duration-300 text-left ${video.src ? "cursor-pointer" : "cursor-default"}`}
                aria-label={`Смотреть видео: ${video.title}`}
              >
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    video.src
                      ? "bg-white/95 group-hover:scale-110 group-hover:bg-primary"
                      : "bg-white/50"
                  }`}>
                    <Play className={`w-7 h-7 fill-current ml-1 transition-colors ${
                      video.src ? "text-primary group-hover:text-white" : "text-white/70"
                    }`} />
                  </span>
                </div>

                {/* Coming soon badge */}
                {!video.src && (
                  <div className="absolute top-3 right-3 bg-black/60 text-white/80 text-[11px] px-2.5 py-1 rounded-lg font-medium backdrop-blur-sm">
                    Скоро
                  </div>
                )}

                {/* Title + duration */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                  <h3 className="text-white font-semibold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {video.title}
                  </h3>
                  <span className="text-white/90 text-xs bg-black/40 px-2 py-0.5 rounded-md flex-shrink-0">
                    {video.duration}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {active && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: active.src?.includes("clip_ext") ? "min(333px, 90vw)" : "min(900px, 95vw)",
              aspectRatio: active.src?.includes("clip_ext") ? "333/592" : "9/16",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {active.src?.includes("mp4") ? (
              <video
                src={active.src}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={active.src}
                title={active.title}
                width="100%"
                height="100%"
                style={{ background: "#000", border: 0 }}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
                allowFullScreen
              />
            )}
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