import { useState } from "react"
import { ArrowRight, Plus, Minus } from "lucide-react"

const projects = [
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
    title: "Традиционный хаммам",
    short: "Традиционный хаммам со звёздным небом",
    full: "Традиционный хаммам со звёздным небом. Классическая турецкая арочная ниша с золотым декором, зелёный мраморный чебек и мягкая подсветка. Атмосфера настоящей восточной бани с современными инженерными системами.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
    title: "Хаммам с классическими турецкими арками",
    short: "Подсветка и звёздное небо. Генератор морского климата. Душ впечатлений.",
    full: "Классические турецкие арки и подсветка, плавно меняющая цвета, и яркость с пульта управления, позволяют погрузиться в яркий и красочный мир под настроение — от ярко-красного до зелёного. Звёздное небо с точками разного диаметра и яркости, плавно переливающееся разными цветами. Анатомический лежак в хамаме — форму делаем под анатомию заказчика, повторяя изгибы спины для максимального удобства.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/372589d9-db8d-4b45-8a44-f9e720673402.jpg",
    title: "Хаммам и сауна Brooms в отеле Азимут",
    short: "SPA-комплекс в отеле АЗИМУТ с хаммамом и душем Vichy",
    full: "SPA-комплекс в отеле АЗИМУТ с хаммамом и душем Vichy. Русская баня с отделкой Кело, погружающая в исконно русскую атмосферу. Специальные лежаки для парения, система вентиляции обеспечивает комфортное парение. Подача свежего воздуха под голову парящегося повышает комфорт и даёт возможность легко дышать и долго получать удовольствие.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
    title: "Хаммам в морском стиле",
    short: "Бирюзовая мозаика, золотые декоративные элементы и подсветка",
    full: "Хаммам, выполненный в морской тематике: бирюзовая мозаика, золотые рыбки на стенах и подсвеченная круглая платформа с золотым узором. Мягкое освещение создаёт ощущение подводного мира. Идеальное решение для тех, кто хочет привнести в парную атмосферу отдыха у моря.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/b14cf6dd-6668-414b-916f-634fa3822073.jpg",
    title: "Хаммам с массажным столом",
    short: "Мраморный чебек, фиолетовая подсветка и зона для массажа",
    full: "Премиальный хаммам с центральным мраморным чебеком, фиолетовой атмосферной подсветкой и отдельной зоной для массажа. Подогрев пола и лежаков, парогенератор с автоматикой. Полноценная spa-зона для релакса и оздоровительных процедур в домашних условиях.",
  },
  {
    image: "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
    title: "Хаммам в деревянном доме",
    short: "Влагостойкая отделка, кессонный свод и синяя мозаика",
    full: "Хаммам, интегрированный в деревянный дом. Усиленная гидро- и пароизоляция, влагостойкие основания, кессонный свод со звёздным небом и глубокая синяя мозаика. Решена сложная инженерная задача по защите деревянных конструкций от влаги и пара.",
  },
]

export function PortfolioSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Более чем <span className="text-primary">400 выполненных</span> объектов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Показываем реальные кейсы, а не скопированные картинки из интернета. Оставьте заявку или позвоните нам по телефону{" "}
            <a href="tel:88003026753" className="text-primary font-semibold hover:underline">8 800 302-67-53</a>{" "}
            для консультации. Мы профессионалы и фанаты своего дела 😎
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-start">
          {projects.map((project, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-foreground mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-1">{project.short}</p>

                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex items-center justify-between mt-5 pt-4 border-t border-border text-base font-semibold text-foreground hover:text-primary transition-colors w-full"
                  >
                    Подробное описание проекта
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${isOpen ? 'bg-primary text-white' : ''}`}
                      style={!isOpen ? { background: 'hsl(145 63% 32% / 0.1)', color: 'hsl(145 63% 32%)' } : {}}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.full}</p>
                      <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                        Хотите такую же? Оставьте заявку на просчёт
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-green inline-flex mx-auto text-base">
            Посмотреть все объекты и получить расчёт
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
