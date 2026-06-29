import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { MaxIcon } from "@/components/icons/MaxIcon"
import { Phone, ChevronDown } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { servicesData, slugify } from "@/data/servicesData"
import { CallbackDialog } from "@/components/CallbackDialog"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-border"
          : "bg-white/90 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 py-2 items-center justify-between">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {/* Строительство — dropdown */}
            <div className="relative group/dd">
              <a
                href="/#services"
                className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide"
              >
                Строительство
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/dd:rotate-180" />
              </a>
              <div className="fixed left-0 right-0 top-[4.5rem] opacity-0 invisible translate-y-1 group-hover/dd:opacity-100 group-hover/dd:visible group-hover/dd:translate-y-0 transition-all duration-200 z-50 px-4">
                <div className="container mx-auto max-w-7xl bg-white rounded-2xl shadow-2xl border border-border p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                    {servicesData.map((s) => (
                      <div key={s.slug}>
                        <Link
                          to={`/uslugi/${s.slug}`}
                          className="flex items-center gap-2.5 mb-2.5 group/cat"
                        >
                          <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                            <Icon name={s.icon} className="w-4.5 h-4.5 text-primary" fallback="Hammer" />
                          </span>
                          <span className="font-bold text-sm text-foreground group-hover/cat:text-primary transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {s.cardTitle}
                          </span>
                        </Link>
                        <ul className="space-y-1 pl-1">
                          {s.subServices.map((sub) => (
                            <li key={sub}>
                              <Link
                                to={`/uslugi/${s.slug}/${slugify(sub)}`}
                                className="text-[13px] text-muted-foreground hover:text-primary transition-colors block py-0.5"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {[
              { href: "/#portfolio", label: "Портфолио" },
              { href: "/#about", label: "О компании" },
              { href: "/#pricing", label: "Цены" },
              { href: "/#contact", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
            <a
              href="https://vam-vdom.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold px-3.5 py-1.5 rounded-lg text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
            >
              <Icon name="ShoppingCart" className="w-3.5 h-3.5" fallback="Store" />
              Магазин
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex flex-col items-end">
              <a href="tel:88003023836" className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                8 800 302-38-36
              </a>
              <span className="text-[11px] text-primary font-semibold">Звоните, бесплатно!</span>
            </div>
            <div className="flex items-center gap-1.5">
              <a href="https://wa.me/88003023836" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105"
                style={{ background: '#25D366' }} aria-label="WhatsApp">
                <Icon name="MessageCircle" className="h-4.5 w-4.5" fallback="Phone" />
              </a>
              <a href="https://t.me/geniusspa" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105"
                style={{ background: '#27A7E7' }} aria-label="Telegram">
                <Icon name="Send" className="h-4 w-4" fallback="Phone" />
              </a>
              <a href="https://max.ru/geniusspa" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }} aria-label="МАКС">
                <MaxIcon className="h-5 w-5" />
              </a>
            </div>
            <CallbackDialog source="Шапка — Перезвоните мне">
              <button className="btn-green text-sm px-5 py-2.5">
                Перезвоните мне
              </button>
            </CallbackDialog>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}