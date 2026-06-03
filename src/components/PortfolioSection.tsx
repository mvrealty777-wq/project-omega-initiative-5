import { useState } from "react"
import { ArrowRight, Phone, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface Project {
  images: string[]
  category: string
  categoryColor: string
  title: string
  short: string
  full: string
}

const projects: Project[] = [
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Традиционный хаммам",
    short: "Традиционный хаммам со звёздным небом",
    full: "Традиционный хаммам со звёздным небом. Классическая турецкая арочная ниша с золотым декором, зелёный мраморный чебек и мягкая подсветка. Атмосфера настоящей восточной бани с современными инженерными системами.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Хаммам с классическими турецкими арками",
    short: "Подсветка и звёздное небо. Генератор морского климата. Душ впечатлений.",
    full: "Классические турецкие арки и подсветка, плавно меняющая цвета, и яркость с пульта управления, позволяют погрузиться в яркий и красочный мир под настроение — от ярко-красного до зелёного. Звёздное небо с точками разного диаметра и яркости, плавно переливающееся разными цветами. Анатомический лежак в хамаме — форму делаем под анатомию заказчика, повторяя изгибы спины для максимального удобства.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/372589d9-db8d-4b45-8a44-f9e720673402.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg",
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg",
    ],
    category: "Коммерческий",
    categoryColor: "bg-gray-800 text-white",
    title: "Хаммам и сауна Brooms в отеле Азимут",
    short: "SPA-комплекс в отеле АЗИМУТ с хаммамом и душем Vichy",
    full: "SPA-комплекс в отеле АЗИМУТ с хаммамом и душем Vichy. Русская баня с отделкой Кело, погружающая в исконно русскую атмосферу. Специальные лежаки для парения, система вентиляции обеспечивает комфортное парение. Подача свежего воздуха под голову парящегося повышает комфорт и даёт возможность легко дышать и долго получать удовольствие.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Хаммам в морском стиле",
    short: "Хаммам с анатомическими формами в морском стиле",
    full: "Хаммам, выполненный в морской тематике: бирюзовая мозаика, золотые рыбки на стенах и подсвеченная круглая платформа с золотым узором. Анатомические формы лежаков и мягкое освещение создают ощущение подводного мира и полного релакса.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/b14cf6dd-6668-414b-916f-634fa3822073.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Хаммам с массажным столом",
    short: "Хаммам в классическом стиле с широким массажным столом",
    full: "Премиальный хаммам с центральным мраморным чебеком — широким массажным столом, фиолетовой атмосферной подсветкой и отдельной зоной для массажа. Подогрев пола и лежаков, парогенератор с автоматикой. Полноценная spa-зона для релакса и оздоровительных процедур.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/68a45e60-98ed-4c22-baa0-f4bacff2a65a.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Хаммам в деревянном доме",
    short: "Специальные конструктивные плиты в тандеме с двухслойной гидроизоляцией",
    full: "Хаммам, интегрированный в деревянный дом. Специальные конструктивные плиты в тандеме с двухслойной гидроизоляцией надёжно защищают деревянные конструкции от влаги и пара. Кессонный свод со звёздным небом и глубокая синяя мозаика завершают образ.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/e99432a1-7193-4b89-a1c6-718880ad1dae.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Стильный хаммам с аромакубом",
    short: "Акцент на нишу с подсветкой. В центре ниши — аромакуб",
    full: "Стильный современный хаммам с акцентом на подсвеченную нишу. В центре ниши установлен аромакуб, наполняющий помещение приятными ароматами. Белая мраморная отделка, минималистичный дизайн и тёплая подсветка создают атмосферу премиального spa.",
  },
  {
    images: [
      "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/ee57d73f-708f-424e-8c6a-8829eb0e1bce.jpg",
    ],
    category: "Хаммам",
    categoryColor: "bg-primary text-white",
    title: "Хаммам из натурального камня",
    short: "Просторный хаммам, отделанный натуральным камнем",
    full: "Просторный хаммам, полностью отделанный натуральным камнем — травертином и мрамором. Открытая планировка парной, скрытая подсветка и плавные органические формы пола. Натуральные материалы создают благородную и долговечную отделку.",
  },
]

export function PortfolioSection() {
  const [active, setActive] = useState<Project | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  const openProject = (project: Project) => {
    setActive(project)
    setImgIndex(0)
  }

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Показываем реальные кейсы, а не скопированные картинки из интернета. Оставьте заявку
            или позвоните нам по телефону{" "}
            <a href="tel:88003026753" className="text-primary font-semibold hover:underline">8 800 302-67-53</a>{" "}
            для консультации — мы профессионалы и фанаты своего дела.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-left"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-lg ${project.categoryColor}`}>
                  {project.category}
                </span>
                {/* Photo count */}
                {project.images.length > 1 && (
                  <span className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white">
                    +{project.images.length - 1} фото
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                  {project.short}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Смотреть проект
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-green inline-flex mx-auto text-base">
            Смотреть все работы
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden gap-0 [&>button]:hidden">
          {active && (
            <div className="flex flex-col max-h-[90vh] overflow-y-auto">
              {/* Image */}
              <div className="relative">
                <img
                  src={active.images[imgIndex]}
                  alt={active.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                  aria-label="Закрыть"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-lg ${active.categoryColor}`}>
                  {active.category}
                </span>
              </div>

              {/* Thumbnails */}
              {active.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50">
                  {active.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setImgIndex(i)}
                      className={`w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${i === imgIndex ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                      <img src={img} alt={`${active.title} ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-black text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {active.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{active.full}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact" onClick={() => setActive(null)} className="btn-green justify-center text-sm flex-1">
                    Хочу такой же — рассчитать
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="tel:88003026753" className="btn-green-outline justify-center text-sm">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
