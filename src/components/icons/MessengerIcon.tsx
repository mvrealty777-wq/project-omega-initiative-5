// Настоящие логотипы мессенджеров (МАКС, WhatsApp, Telegram)
const ICONS: Record<string, string> = {
  max: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/f9bc2e5b-c5ac-448f-b3c7-a29367f309ab.png",
  whatsapp: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/2283b99f-9bfe-4eaa-9270-6f4b4916a8dd.png",
  telegram: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/e33fe035-3cb1-4a34-bfc3-97e8b4f51b3a.jpg",
}

const LABELS: Record<string, string> = {
  max: "МАКС",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
}

interface Props {
  id: string
  className?: string
}

export function MessengerIcon({ id, className = "w-5 h-5" }: Props) {
  const src = ICONS[id]
  if (!src) return null
  return (
    <img
      src={src}
      alt={LABELS[id] ?? id}
      className={`${className} object-contain rounded-md`}
      loading="lazy"
    />
  )
}

export const messengerIconUrl = (id: string): string | undefined => ICONS[id]