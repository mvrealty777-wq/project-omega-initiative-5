import { Play } from "lucide-react"

const videos = [
  {
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    title: "Хаммам со звёздным небом",
    duration: "2:14",
  },
  {
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
    title: "Финская сауна под ключ",
    duration: "1:48",
  },
  {
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/372589d9-db8d-4b45-8a44-f9e720673402.jpg",
    title: "SPA-комплекс в отеле",
    duration: "3:05",
  },
  {
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
    title: "Хаммам в морском стиле",
    duration: "2:32",
  },
  {
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg",
    title: "Бассейн в гроте",
    duration: "1:59",
  },
  {
    thumb: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg",
    title: "Инфракрасная сауна",
    duration: "1:21",
  },
]

export function VideoWorksSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Видео-обзоры</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Посмотрите видео с кейсами реализованных работ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <button
              key={index}
              type="button"
              className="group relative rounded-2xl overflow-hidden aspect-video shadow-sm hover:shadow-xl transition-all duration-300 text-left"
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
                <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Play className="w-7 h-7 text-primary group-hover:text-white fill-current ml-1 transition-colors" />
                </span>
              </div>

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
  )
}