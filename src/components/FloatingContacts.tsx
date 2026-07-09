import { MessengerIcon } from "@/components/icons/MessengerIcon"

const items = [
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/79602319672" },
  { id: "telegram", label: "Telegram", href: "https://t.me/+79602319672" },
  { id: "max", label: "МАКС", href: "https://max.ru/+79602319672" },
]

export function FloatingContacts() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-2.5 sm:gap-3">
      {items.map((m) => (
        <a
          key={m.id}
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.label}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg hover:scale-110 transition-transform"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
        >
          <MessengerIcon id={m.id} fill className="w-full h-full rounded-2xl" />
        </a>
      ))}
    </div>
  )
}