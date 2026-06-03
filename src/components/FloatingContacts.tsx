import Icon from "@/components/ui/icon"
import { MaxIcon } from "@/components/icons/MaxIcon"

export function FloatingContacts() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-2.5 sm:gap-3">
      <a
        href="https://wa.me/88003026753"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.5)' }}
      >
        <Icon name="MessageCircle" className="w-6 h-6 sm:w-7 sm:h-7" fallback="Phone" />
      </a>
      <a
        href="https://t.me/geniusspa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ background: '#27A7E7', boxShadow: '0 4px 16px rgba(39,167,231,0.5)' }}
      >
        <Icon name="Send" className="w-5 h-5 sm:w-6 sm:h-6" fallback="Phone" />
      </a>
      <a
        href="https://max.ru/geniusspa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="МАКС"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', boxShadow: '0 4px 16px rgba(124,92,246,0.5)' }}
      >
        <MaxIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  )
}
