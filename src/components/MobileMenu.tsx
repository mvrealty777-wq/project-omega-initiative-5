import { useState } from "react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import { LeadDialog } from "@/components/LeadDialog"
import { servicesData, slugify } from "@/data/servicesData"

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
          <Accordion type="single" collapsible className="mb-5">
            {servicesData.map((s) => (
              <AccordionItem key={s.slug} value={s.slug} className="border-b-0">
                <AccordionTrigger className="py-2.5 px-4 rounded-lg hover:bg-primary/5 hover:no-underline [&[data-state=open]]:text-primary">
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                      <Icon name={s.icon} className="w-4 h-4 text-primary" fallback="Hammer" />
                    </span>
                    {s.cardTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-14 pb-2">
                  <Link to={`/uslugi/${s.slug}`} onClick={close} className="block py-1.5 text-sm font-semibold text-primary">
                    Все услуги →
                  </Link>
                  {s.subServices.map((sub) => (
                    <Link key={sub} to={`/uslugi/${s.slug}/${slugify(sub)}`} onClick={close} className="block py-1.5 text-[13px] text-muted-foreground hover:text-primary">
                      {sub}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

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

            {/* Интернет-магазин — выделенная ссылка */}
            <a
              href="https://vam-vdom.ru/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-2.5 text-base font-bold text-white py-3 px-4 rounded-lg mt-1 shadow-md"
              style={{ background: 'linear-gradient(135deg, hsl(38 92% 50%), hsl(28 90% 45%))', fontFamily: 'Montserrat, sans-serif' }}
            >
              <Icon name="ShoppingCart" className="w-5 h-5" fallback="Store" />
              Интернет-магазин
            </a>

            <div className="mt-3 mx-4">
              <LeadDialog source="Мобильное меню — получить расчёт" title="Получить расчёт">
                <button type="button" className="btn-green justify-center w-full">
                  Получить расчёт
                </button>
              </LeadDialog>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}