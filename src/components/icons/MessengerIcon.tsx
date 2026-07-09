// Настоящие логотипы мессенджеров (МАКС, WhatsApp, Telegram)
const ICONS: Record<string, string> = {
  max: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/bc258ed9-b979-4a46-b21b-ad570f5f8ed8.png",
  whatsapp: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/1741d49e-b798-4316-9900-75695bdb265a.png",
  telegram: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/a20aa6e4-9271-45e0-bd97-2037c28513b4.jpg",
}

const LABELS: Record<string, string> = {
  max: "МАКС",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
}

interface Props {
  id: string
  className?: string
  fill?: boolean
}

export function MessengerIcon({ id, className = "w-5 h-5", fill }: Props) {
  const src = ICONS[id]
  if (!src) return null
  return (
    <img
      src={src}
      alt={LABELS[id] ?? id}
      className={`${className} ${fill ? "object-cover" : "object-contain"}`}
      loading="lazy"
    />
  )
}

export const messengerIconUrl = (id: string): string | undefined => ICONS[id]