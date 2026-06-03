import Icon from "@/components/ui/icon"

export function FloatingContacts() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/88003026753"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.5)' }}
      >
        <Icon name="MessageCircle" className="w-7 h-7" fallback="Phone" />
      </a>
      <a
        href="https://t.me/geniusspa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ background: '#27A7E7', boxShadow: '0 4px 16px rgba(39,167,231,0.5)' }}
      >
        <Icon name="Send" className="w-6 h-6" fallback="Phone" />
      </a>
    </div>
  )
}
