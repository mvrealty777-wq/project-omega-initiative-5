import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse"
          style={{ top: "10%", left: "5%", animationDuration: "5s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl animate-pulse"
          style={{ bottom: "5%", right: "10%", animationDuration: "7s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute text-6xl animate-float" style={{ top: "15%", left: "8%", animationDelay: "0s" }}>🔥</div>
        <div className="absolute text-5xl animate-float" style={{ top: "20%", right: "12%", animationDelay: "2s" }}>🪵</div>
        <div className="absolute text-4xl animate-float" style={{ bottom: "25%", left: "15%", animationDelay: "1s" }}>♨️</div>
        <div className="absolute text-5xl animate-float" style={{ bottom: "20%", right: "8%", animationDelay: "3s" }}>🏗️</div>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Строительство саун и хамамов под ключ</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Сауны и хамамы,{" "}
          <span className="text-primary relative inline-block">
            которые служат
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C50 5 150 5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
            </svg>
          </span>{" "}
          веками
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Проектируем и строим финские сауны, русские бани и турецкие хамамы для частных домов, загородных резиденций и коммерческих объектов. От эскиза до сдачи под ключ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="#contact">
              Получить расчёт стоимости
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#portfolio">Наши объекты</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Более 10 лет опыта</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>200+ построенных объектов</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Гарантия 5 лет</span>
          </div>
        </div>
      </div>
    </section>
  )
}