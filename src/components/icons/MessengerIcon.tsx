// Настоящие логотипы мессенджеров (МАКС, WhatsApp, Telegram)
const ICONS: Record<string, string> = {
  max: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/5808ea37-a8b5-4f3d-b6b9-512233ccf9dc.png",
  whatsapp: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/29a86ff3-9b83-47c4-991e-e19b17647eaa.png",
  telegram: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/fd914d4e-3387-4747-979f-0589513a7bd8.jpg",
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
