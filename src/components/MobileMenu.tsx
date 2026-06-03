import { useState } from "react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import Icon from "@/components/ui/icon"
import { servicesData } from "@/data/servicesData"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "/#portfolio", label: "Портфолио" },
    { href: "/#about", label: "О компании" },
    { href: "/#pricing", label: "Цены" },
    { href: "/#contact", label: "Контакты" },
  ]

  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Меню навигации</SheetTitle>
          <SheetDescription>Переход к разделам сайта</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col mt-8">
          {/* Строительство */}
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-4 mb-2">Строительство</p>
          <div className="flex flex-col gap-0.5 mb-5">
            {servicesData.map((s) => (
              <Link
                key={s.slug}
                to={`/uslugi/${s.slug}`}
                onClick={close}
                className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all"
              >
                <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                  <Icon name={s.icon} className="w-4 h-4 text-primary" fallback="Hammer" />
                </span>
                {s.menuLabel}
              </Link>
            ))}
          </div>

          {/* Другие разделы */}
          <div className="flex flex-col gap-1 border-t border-border pt-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={close}
              className="btn-green justify-center mt-3 mx-4"
            >
              Получить расчёт
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
