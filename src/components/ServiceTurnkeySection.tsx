import { CheckCircle2, ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import type { ServiceData } from "@/data/servicesData"

interface Props {
  service: ServiceData
  /** Заголовок (название услуги или подуслуги) */
  title?: string
  image?: string
}

const includes = [
  { icon: "MapPin", text: "Бесплатный выезд и замер" },
  { icon: "FileSignature", text: "Фиксированная цена в договоре" },
  { icon: "Box", text: "Дизайн-проект и 3D-визуализация" },
  { icon: "ShieldCheck", text: "Гарантия 5 лет" },
]

export function ServiceTurnkeySection({ service, title, image }: Props) {
  const heroImage = image ?? service.image

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(165deg, hsl(220 27% 11%), hsl(222 32% 7%))' }}>
      <div className="absolute -top-28 -left-20 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'hsl(145 63% 42%)' }} />
      <div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'hsl(40 80% 55%)' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-9 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-5 mx-auto text-green-300 border border-green-400/20"
            style={{ background: 'hsl(145 63% 42% / 0.12)' }}>
            Что входит
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {title ?? service.cardTitle} <span className="text-green-400">под ключ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — image graphic + numbered checklist */}
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-8 aspect-[16/10]">
              <img src={heroImage} alt={`${title ?? service.cardTitle} под ключ`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/20"
                  style={{ background: 'hsl(145 63% 30% / 0.85)', backdropFilter: 'blur(4px)' }}>
                  <Icon name="Hammer" className="w-3.5 h-3.5" fallback="Wrench" />
                  Полный цикл работ
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white border border-white/20"
                  style={{ background: 'hsl(0 0% 0% / 0.45)', backdropFilter: 'blur(4px)' }}>
                  <Icon name="ShieldCheck" className="w-3.5 h-3.5" fallback="Shield" />
                  Гарантия 5 лет
                </span>
              </div>
            </div>

            <ul className="space-y-4">
              {service.works.map((w, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-black text-white shadow-md group-hover:scale-110 transition-transform"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      background: 'linear-gradient(135deg, hsl(145 63% 42%), hsl(150 70% 26%))',
                      boxShadow: '0 6px 16px -3px hsl(145 63% 40% / 0.5)',
                    }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{w.title}</p>
                    <p className="text-base text-white/55 leading-relaxed">{w.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — price card */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="p-8 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(145 63% 32%), hsl(150 72% 18%))' }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="relative">
                  <p className="text-white/70 text-sm mb-2">Стоимость работ</p>
                  <p className="text-5xl font-black mb-1 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.priceFrom === "По запросу" ? (
                      service.priceFrom
                    ) : (
                      <>{service.priceFrom} <span className="text-2xl font-normal text-white/70">₽</span></>
                    )}
                  </p>
                  <p className="text-white/70 text-sm">{service.priceNote}</p>
                </div>
              </div>
              <div className="p-8 bg-white">
                <ul className="space-y-3.5 mb-7">
                  {includes.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-base text-foreground/80">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'hsl(145 63% 32% / 0.1)' }}>
                        <Icon name={item.icon} className="w-4.5 h-4.5 text-primary" fallback="Check" />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-green w-full justify-center text-base">
                  Рассчитать стоимость
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  Бесплатный выезд замерщика по всей России
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
