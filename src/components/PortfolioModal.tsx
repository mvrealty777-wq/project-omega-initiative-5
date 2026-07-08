import { ArrowRight, Phone, X } from "lucide-react"
import { LeadDialog } from "@/components/LeadDialog"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import type { Project } from "./portfolioData"

interface PortfolioModalProps {
  active: Project | null
  imgIndex: number
  setImgIndex: (i: number) => void
  setActive: (project: Project | null) => void
}

export function PortfolioModal({ active, imgIndex, setImgIndex, setActive }: PortfolioModalProps) {
  return (
    <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden gap-0 [&>button]:hidden">
        {active && (
          <div className="flex flex-col max-h-[90vh] overflow-y-auto">
            {/* Image */}
            <div className="relative">
              <img
                src={active.images[imgIndex]}
                alt={active.title}
                loading="lazy"
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
                    <img src={img} alt={`${active.title} ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
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
                <LeadDialog source={`Портфолио — ${active.title}`} title="Хочу такой же проект" submitText="Рассчитать стоимость">
                  <button className="btn-green justify-center text-sm flex-1">
                    Хочу такой же — рассчитать
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </LeadDialog>
                <a href="tel:88003023836" className="btn-green-outline justify-center text-sm">
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
