import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Flame",
    title: "Финская сауна",
    description:
      "Строим классические финские сауны с сухим паром: сруб, вагонка из термодерева, финские печи Harvia и Narvi. Проектируем под любую площадь — от компактной 4 м² до просторного семейного варианта.",
  },
  {
    icon: "Droplets",
    title: "Турецкий хамам",
    description:
      "Хамамы с влажным паром, мозаичной облицовкой и подогревом чебека. Проектируем систему парогенерации, кессонное перекрытие и всю инженерию. Отделка турецким и марокканским мрамором.",
  },
  {
    icon: "TreePine",
    title: "Русская баня",
    description:
      "Традиционная русская баня с мягким «живым» паром. Строим из бревна и бруса, оснащаем кирпичными и металлическими печами, предбанником и моечной — всё по старорусским канонам.",
  },
  {
    icon: "Layers",
    title: "Банные комплексы",
    description:
      "Проектируем и строим многозонные банные комплексы для коммерческих объектов: сауна + хамам + купель + зона отдыха. Опыт работы с ресторанами, отелями и загородными клубами.",
  },
  {
    icon: "Wrench",
    title: "Инженерные системы",
    description:
      "Полный цикл инженерии: вентиляция, канализация, водоснабжение, электрика, парогенераторы и печное оборудование. Монтируем и пуско-наладочные работы проводим своими силами.",
  },
  {
    icon: "Palette",
    title: "Дизайн и отделка",
    description:
      "Авторский дизайн интерьеров в любом стиле: скандинавский минимализм, классическая русская баня, восточный хамам. Работаем с деревом, мрамором, мозаикой и натуральным камнем.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit tracking-wider uppercase">
          Что мы строим
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Наши <span className="text-primary">специализации</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Строим любые виды банных объектов — от небольшой дачной бани до коммерческого СПА-комплекса. Полный цикл работ без привлечения субподрядчиков.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Sparkles" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}