import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { projects, type Project } from "./portfolioData"
import { PortfolioCard } from "./PortfolioCard"
import { PortfolioModal } from "./PortfolioModal"

export function PortfolioSection() {
  const [active, setActive] = useState<Project | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  const openProject = (project: Project) => {
    setActive(project)
    setImgIndex(0)
  }

  return (
    <section id="portfolio" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-9 sm:mb-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Показываем реальные кейсы, а не скопированные картинки из интернета. Оставьте заявку
            или позвоните нам по телефону{" "}
            <a href="tel:88003023836" className="text-primary font-semibold hover:underline">8 800 302-38-36</a>{" "}
            для консультации — мы профессионалы и фанаты своего дела.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} onOpen={openProject} />
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
      <PortfolioModal
        active={active}
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
        setActive={setActive}
      />
    </section>
  )
}
