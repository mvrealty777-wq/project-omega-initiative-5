import Icon from "@/components/ui/icon"
import { QuizDialog } from "@/components/QuizDialog"
import { quizzes } from "@/data/quizData"

const gradients: Record<string, string> = {
  "from-blue-600 to-purple-600": "linear-gradient(135deg, #2563eb, #9333ea)",
  "from-orange-500 to-red-600": "linear-gradient(135deg, #f97316, #dc2626)",
  "from-cyan-500 to-blue-600": "linear-gradient(135deg, #06b6d4, #2563eb)",
  "from-violet-500 to-pink-600": "linear-gradient(135deg, #8b5cf6, #db2777)",
  "from-yellow-500 to-orange-500": "linear-gradient(135deg, #eab308, #f97316)",
  "from-slate-600 to-gray-800": "linear-gradient(135deg, #475569, #1f2937)",
  "from-emerald-600 to-teal-700": "linear-gradient(135deg, #059669, #0f766e)",
  "from-pink-500 to-rose-600": "linear-gradient(135deg, #ec4899, #e11d48)",
  "from-sky-400 to-cyan-600": "linear-gradient(135deg, #38bdf8, #0891b2)",
}

export function QuizSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="section-badge mb-5 mx-auto">Подбор проекта</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ответьте на вопросы —{" "}
            <span className="text-primary">получите точный расчёт</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Выберите направление, ответьте на 4–6 простых вопросов — и мы подготовим персональное предложение под ваш объект.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quizzes.map((quiz) => (
            <QuizDialog key={quiz.slug} quiz={quiz}>
              <button
                className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left w-full"
              >
                {/* Gradient accent top */}
                <div
                  className="h-2 w-full"
                  style={{ background: gradients[quiz.color] ?? "hsl(var(--primary))" }}
                />

                <div className="p-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ background: gradients[quiz.color] ?? "hsl(var(--primary))" }}
                  >
                    <Icon name={quiz.icon} size={22} className="text-white" fallback="HelpCircle" />
                  </div>

                  <h3
                    className="text-lg font-black text-foreground mb-1.5 leading-snug"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {quiz.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {quiz.subtitle}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {quiz.questions.length} вопросов
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all"
                      style={{ color: gradients[quiz.color] ? undefined : "hsl(var(--primary))" }}
                    >
                      <span
                        style={{
                          background: gradients[quiz.color] ?? "hsl(var(--primary))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Ответить на вопросы
                      </span>
                      <Icon name="ArrowRight" size={16} className="text-primary flex-shrink-0" />
                    </span>
                  </div>
                </div>
              </button>
            </QuizDialog>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Ответы на вопросы помогают нам подготовить{" "}
          <span className="text-primary font-semibold">точный расчёт под ваш объект</span>
        </p>
      </div>
    </section>
  )
}