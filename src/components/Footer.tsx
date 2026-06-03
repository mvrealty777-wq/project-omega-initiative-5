import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <span className="text-primary">✦ </span>GeniusSPA
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Строительство финских саун, русских бань и турецких хамамов под ключ. Работаем по всей России.
            </p>
            <p className="text-xs text-muted-foreground mt-4">© 2025 GeniusSPA. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Наши объекты
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Получить расчёт
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" fallback="Globe" className="h-5 w-5" />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="MessageCircle" fallback="Globe" className="h-5 w-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" fallback="Globe" className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">Режим работы:</p>
              <p className="text-sm font-medium mt-1">Пн–Пт 9:00–20:00, Сб–Вс 10:00–18:00</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}