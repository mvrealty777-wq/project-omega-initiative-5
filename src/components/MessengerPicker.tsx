import Icon from "@/components/ui/icon"
import { MessengerIcon } from "@/components/icons/MessengerIcon"

export const messengers = [
  { id: "max", label: "МАКС", color: "linear-gradient(135deg, #8B5CF6, #6366F1)" },
  { id: "telegram", label: "Telegram", color: "#27A7E7" },
  { id: "whatsapp", label: "WhatsApp", color: "#25D366" },
] as const

export const messengerLabel = (id: string): string | undefined =>
  messengers.find((m) => m.id === id)?.label

interface Props {
  enabled: boolean
  onEnabledChange: (v: boolean) => void
  value: string
  onValueChange: (v: string) => void
  /** Тёмный фон (для блоков на тёмном фоне) */
  dark?: boolean
}

export function MessengerPicker({ enabled, onEnabledChange, value, onValueChange, dark }: Props) {
  return (
    <div className="space-y-2.5">
      <label
        className={`flex items-start gap-2.5 cursor-pointer select-none rounded-xl border p-3 transition-colors ${
          dark
            ? "bg-white/5 border-white/15 hover:border-primary/50"
            : "bg-secondary/40 border-border hover:border-primary/40"
        }`}
      >
        <span className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => onEnabledChange(e.target.checked)}
            className="peer sr-only"
          />
          <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors peer-checked:bg-primary peer-checked:border-primary ${dark ? "border-white/30" : "border-border"}`}>
            <Icon name="Check" className={`w-3.5 h-3.5 text-white transition-opacity ${enabled ? "opacity-100" : "opacity-0"}`} />
          </span>
        </span>
        <span className={`text-sm font-medium leading-snug ${dark ? "text-white" : "text-foreground"}`}>
          Напишите мне в мессенджер вместо звонка
        </span>
      </label>

      {enabled && (
        <div className="grid grid-cols-3 gap-2 animate-fade-in-up">
          {messengers.map((m) => {
            const isActive = value === m.id
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onValueChange(m.id)}
                className={`relative flex flex-col items-center justify-center gap-1.5 rounded-xl border-2 py-2.5 transition-all ${
                  isActive
                    ? "border-transparent text-white shadow-md"
                    : dark
                      ? "border-white/15 bg-white/5 text-white/70 hover:border-primary/50"
                      : "border-border bg-white text-foreground/70 hover:border-primary/40"
                }`}
                style={isActive ? { background: m.color } : undefined}
              >
                <MessengerIcon id={m.id} className="w-6 h-6" />
                <span className="text-xs font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>{m.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}