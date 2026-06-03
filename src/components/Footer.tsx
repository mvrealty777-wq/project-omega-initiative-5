import { Logo } from "@/components/Logo"
import { Phone, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#pricing", label: "Цены" },
  { href: "#contact", label: "Контакты" },
]

const services = [
  "Строительство Хаммама",
  "Строительство Саун",
  "Соляные Пещеры",
  "Строительство Бассейна",
  "Инфракрасные сауны",
  "Оборудование для бань",
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Готовы начать ваш проект?
              </p>
              <p className="text-white/60 text-sm">Бесплатная консультация и выезд на замер</p>
            </div>
            <a
              href="#contact"
              className="btn-green text-base flex-shrink-0"
            >
              Получить расчёт бесплатно
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="mb-4 [&_span]:text-white [&_.text-primary]:!text-green-400 [&_.text-muted-foreground]:text-white/40" />
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Строительство финских саун, русских бань и турецких хамамов под ключ. Работаем по всей России с 2014 года.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:88003026753" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-green-400" />
                8 800 302-67-53
              </a>
              <a href="mailto:info@geniusspa.ru" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-green-400" />
                info@geniusspa.ru
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Навигация
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Услуги
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Режим работы
            </h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Ежедневно: 9:00 — 21:00</p>
              <p>Без выходных</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs mb-2">Напишите нам:</p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/88003026753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 h-9 rounded-lg flex items-center gap-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                    style={{ background: '#25D366' }}
                  >
                    <Icon name="MessageCircle" className="w-4 h-4" fallback="Phone" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/geniusspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 h-9 rounded-lg flex items-center gap-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                    style={{ background: '#27A7E7' }}
                  >
                    <Icon name="Send" className="w-3.5 h-3.5" fallback="Phone" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2025 GeniusSPA. Все права защищены.</p>
          <p>Строительство саун и хамамов под ключ по всей России</p>
        </div>
      </div>
    </footer>
  )
}