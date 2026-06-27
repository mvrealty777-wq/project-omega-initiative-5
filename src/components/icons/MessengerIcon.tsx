// Настоящие логотипы мессенджеров (МАКС, WhatsApp, Telegram)
const ICONS: Record<string, string> = {
  max: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/2cbec0a7-8709-4e9d-9e7d-7ec886f211f3.png",
  whatsapp: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/b16353a6-1c88-4287-932b-5bcdff19e41a.png",
  telegram: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/bucket/8e4730a3-fe0a-4653-9732-e3426a0be977.jpg",
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