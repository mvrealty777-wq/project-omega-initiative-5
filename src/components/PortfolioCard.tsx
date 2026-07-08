import { ArrowRight } from "lucide-react"
import type { Project } from "./portfolioData"

interface PortfolioCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col text-left"
    >
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
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
  )
}
