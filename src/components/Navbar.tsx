import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

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
          <a href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {[
              { href: "#about", label: "О компании" },
              { href: "#services", label: "Услуги" },
              { href: "#portfolio", label: "Портфолио" },
              { href: "#pricing", label: "Цены" },
              { href: "#contact", label: "Контакты" },
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
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+74950000000" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" />
              +7 (495) 000-00-00
            </a>
            <a href="#contact" className="btn-green text-sm px-5 py-2.5">
              Получить расчёт
            </a>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}