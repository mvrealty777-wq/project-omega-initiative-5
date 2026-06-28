import Icon from "@/components/ui/icon"
import type { TimelineRow } from "@/data/serviceContent"

const defaultRows: TimelineRow[] = [
  { icon: "Boxes", work: "Монтаж сборных саун", term: "1–2 дня" },
  { icon: "Flame", work: "Парная с электрокаменкой, объём до 10 м³", term: "5–8 дней" },
  { icon: "Flame", work: "Парная с каменкой, объём до 15 м³", term: "8–11 дней" },
  { icon: "Flame", work: "Парная с каменкой, объём до 30 м³", term: "12–18 дней" },
  { icon: "Sparkles", work: "Сауна со сложными нестандартными дизайнерскими решениями", term: "от 10 дней" },
  { icon: "Landmark", work: "Турецкая баня (конструктив + оборудование, без отделки)", term: "от 10 дней" },
]

interface Props {
  title?: string
  titleAccent?: string
  subtitle?: string
  rows?: TimelineRow[]
  note?: string
}

export function BuildTimelineSection({ title, titleAccent, subtitle, rows: rowsProp, note }: Props = {}) {
  const rows = rowsProp ?? defaultRows
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 section-glass-tint">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-9 sm:mb-10">
          <div className="section-badge mb-5 mx-auto">Сроки</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {title ?? "Сроки строительства"} <span className="text-primary">{titleAccent ?? "саун"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            {subtitle ?? "Указаны примерные сроки с момента начала строительных работ (не с момента подписания договора)."}
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-[1fr_180px] gap-4 px-6 py-4 text-white"
            style={{ background: 'linear-gradient(135deg, hsl(145 63% 32%), hsl(150 70% 22%))' }}>
            <div className="font-bold text-sm uppercase tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>Вид работ</div>
            <div className="font-bold text-sm uppercase tracking-wide text-right" style={{ fontFamily: 'Montserrat, sans-serif' }}>Сроки</div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-2 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 items-center transition-colors hover:bg-secondary/40 ${i % 2 ? 'bg-secondary/20' : 'bg-white'}`}
            >
              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                  <Icon name={r.icon} className="w-5 h-5 text-primary" fallback="Hammer" />
                </span>
                <span className="text-[15px] sm:text-base font-medium text-foreground leading-snug">{r.work}</span>
              </div>
              <div className="sm:text-right pl-[3.25rem] sm:pl-0">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold px-3.5 py-1.5 rounded-full text-primary"
                  style={{ background: 'hsl(145 63% 32% / 0.1)', fontFamily: 'Montserrat, sans-serif' }}>
                  <Icon name="Clock" className="w-3.5 h-3.5" fallback="Clock" />
                  {r.term}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-5 flex items-start gap-2 max-w-3xl mx-auto">
          <Icon name="Info" className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fallback="Info" />
          {note ?? "Сроки зависят от готовности помещения к строительству, сложности конструкций и дизайнерских решений."}
        </p>
      </div>
    </section>
  )
}