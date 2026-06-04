export interface ServiceTestimonial {
  name: string
  role: string
  avatar: string
  stars: number
  quote: string
}

export interface ServiceCase {
  image: string
  category: string
  categoryColor: string
  title: string
  short: string
}

interface ServiceExtra {
  testimonialsTitle: string
  testimonialsSubtitle: string
  testimonials: ServiceTestimonial[]
  casesTitle: string
  casesSubtitle: string
  cases: ServiceCase[]
}

const HAMMAM = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/8ce3e4a6-6eac-43f3-82ac-1e7c276ab8bb.jpg"
const HAMMAM2 = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/4384e557-d15c-4d4c-a166-4bb8cae4fc8c.jpg"
const HAMMAM3 = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d0fc622e-ce71-4860-aaf6-441d66631642.jpg"
const SAUNA = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/bc574b96-1b7b-46c9-9b4c-7c2950015e48.jpg"
const SAUNA2 = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg"
const SAUNA3 = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/372589d9-db8d-4b45-8a44-f9e720673402.jpg"
const SALT = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/0c3708ac-d30b-4718-9b87-d5deeb7b94a1.jpg"
const SALT2 = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/14683f6b-e013-4819-9e21-d37583fe823f.jpg"
const POOL = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/11121246-eb64-4c70-9ba6-30cd19046423.jpg"
const IR = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/d97d8191-171e-43e8-b9e3-997a9caa87ef.jpg"
const EQUIP = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/09e490cf-4e62-4ee4-a5ae-0db40e9c8a31.jpg"
const COMPLEX = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/300aee80-ed49-410c-b117-9d48406ecb27.jpg"
const COOL = "https://cdn.poehali.dev/projects/601c86a7-3ea8-4a89-b63a-2f5b06647da4/files/29ac4107-cc4b-49ff-980f-8534b208a073.jpg"

const greenBadge = "bg-primary text-white"
const grayBadge = "bg-gray-800 text-white"
const amberBadge = "bg-amber-700 text-white"
const blueBadge = "bg-sky-700 text-white"

export const serviceExtras: Record<string, ServiceExtra> = {
  hammam: {
    testimonialsTitle: "Отзывы о строительстве хаммамов",
    testimonialsSubtitle: "Турецкие бани под ключ — мнения наших клиентов",
    testimonials: [
      { name: "Ирина В.", role: "Частный клиент, Рублёвка", avatar: "ИВ", stars: 5, quote: "Построили хамам в загородном доме. Мрамор, мозаика, звёздное небо — всё как в турецком отеле. Пар мягкий, лежак с подогревом по моей анатомии. Восторг!" },
      { name: "Дмитрий П.", role: "Управляющий SPA-комплекса", avatar: "ДП", stars: 5, quote: "Заказывали хамам с генератором морского климата для spa. Подсветка и парогенератор работают безупречно второй год. Сервис на высоте." },
      { name: "Алексей М.", role: "Отель «Восток»", avatar: "АМ", stars: 5, quote: "Турецкая баня для отеля под ключ за 50 дней. Гидроизоляция и вентиляция продуманы идеально — за два года ни одной протечки." },
    ],
    casesTitle: "Наши хаммамы",
    casesSubtitle: "Реальные турецкие бани, построенные под ключ",
    cases: [
      { image: HAMMAM, category: "Хаммам", categoryColor: greenBadge, title: "Традиционный хаммам", short: "Классическая турецкая ниша со звёздным небом и золотым декором" },
      { image: HAMMAM2, category: "Хаммам", categoryColor: greenBadge, title: "Хаммам с турецкими арками", short: "Подсветка, меняющая цвета, и генератор морского климата" },
      { image: HAMMAM3, category: "Хаммам", categoryColor: greenBadge, title: "Хаммам в морском стиле", short: "Бирюзовая мозаика и анатомические лежаки" },
    ],
  },
  sauna: {
    testimonialsTitle: "Отзывы о строительстве саун и бань",
    testimonialsSubtitle: "Финские сауны и русские бани — мнения клиентов",
    testimonials: [
      { name: "Андрей К.", role: "Частный клиент, Подмосковье", avatar: "АК", stars: 5, quote: "Финская сауна под ключ на даче. Сделали точно в срок, отделка кедром — выше ожиданий, пар мягкий. Печь Harvia работает идеально." },
      { name: "Сергей Н.", role: "Частный клиент, Тверская обл.", avatar: "СН", stars: 5, quote: "Построили русскую баню из бревна за месяц — успели к сезону. Топится на загляденье, соседи завидуют. Спасибо ребятам!" },
      { name: "Ольга Т.", role: "Частный клиент, Москва", avatar: "ОТ", stars: 5, quote: "Стеклянная сауна в квартире — современно и стильно. Помогли с проектом, вентиляцией и выбором печи. Всё чисто и в срок." },
    ],
    casesTitle: "Наши сауны и бани",
    casesSubtitle: "Финские сауны и русские бани под ключ",
    cases: [
      { image: SAUNA, category: "Сауна", categoryColor: amberBadge, title: "Финская сауна из кедра", short: "Многоуровневые полки и подсвеченная соляная стена" },
      { image: SAUNA2, category: "Сауна", categoryColor: amberBadge, title: "Сауна со звёздным потолком", short: "Оптоволоконная подсветка и электрокаменка с пультом" },
      { image: SAUNA3, category: "Баня", categoryColor: amberBadge, title: "Русская баня под ключ", short: "Дровяная печь-каменка и отделка липой" },
    ],
  },
  "salt-cave": {
    testimonialsTitle: "Отзывы о зонах для впечатлений",
    testimonialsSubtitle: "Соляные комнаты, флоатинг и криосауны",
    testimonials: [
      { name: "Марина Л.", role: "Велнес-центр «Гармония»", avatar: "МЛ", stars: 5, quote: "Соляная комната с галогенератором — клиенты в восторге, записи на сеансы на неделю вперёд. Подсветка соли создаёт волшебную атмосферу." },
      { name: "Виктор С.", role: "Частный клиент, Сочи", avatar: "ВС", stars: 5, quote: "Сделали флоат-камеру дома. Полная невесомость и тишина — лучший способ снять стресс. Монтаж аккуратный, всё работает идеально." },
      { name: "Наталья Р.", role: "Фитнес-клуб", avatar: "НР", stars: 5, quote: "Криосауна окупилась за полгода. Спортсмены восстанавливаются быстрее, поток клиентов вырос. Спасибо за профессиональный подход." },
    ],
    casesTitle: "Зоны для впечатлений",
    casesSubtitle: "Соляные комнаты, флоатинг и криосауны под ключ",
    cases: [
      { image: SALT, category: "Соляная комната", categoryColor: blueBadge, title: "Галокамера из гималайской соли", short: "Подсвеченные соляные блоки и галогенератор" },
      { image: SALT2, category: "Релакс", categoryColor: blueBadge, title: "Зона флоатинга", short: "Флоат-камера для глубокой релаксации" },
      { image: SALT, category: "Оздоровление", categoryColor: blueBadge, title: "Соляная комната для spa", short: "Аэрозольная галотерапия и зона отдыха" },
    ],
  },
  pool: {
    testimonialsTitle: "Отзывы о строительстве бассейнов",
    testimonialsSubtitle: "Крытые и spa-бассейны под ключ",
    testimonials: [
      { name: "Роман Д.", role: "Частный клиент, Истра", avatar: "РД", stars: 5, quote: "Крытый бассейн с противотоком и подогревом в загородном доме. Чаша, фильтрация, отделка мозаикой — всё под ключ. Вода кристальная." },
      { name: "Елена Ф.", role: "Отель «Лагуна»", avatar: "ЕФ", stars: 5, quote: "Spa-бассейн с гидромассажем для гостей. Автоматическая водоподготовка экономит время персонала. Реализовали точно по проекту." },
      { name: "Игорь В.", role: "Частный клиент, Краснодар", avatar: "ИВ", stars: 5, quote: "Бассейн сложной формы с подводной подсветкой. Инженеры всё рассчитали, осушение воздуха работает отлично. Рекомендую!" },
    ],
    casesTitle: "Наши бассейны",
    casesSubtitle: "Крытые и spa-бассейны любой формы",
    cases: [
      { image: POOL, category: "Бассейн", categoryColor: blueBadge, title: "Крытый бассейн в доме", short: "Противоток, подогрев и подводная подсветка" },
      { image: POOL, category: "SPA", categoryColor: blueBadge, title: "Spa-бассейн с гидромассажем", short: "Автоматическая водоподготовка и климат" },
      { image: COMPLEX, category: "Коммерческий", categoryColor: grayBadge, title: "Бассейн для отеля", short: "Чаша произвольной геометрии под интерьер" },
    ],
  },
  "infrared-sauna": {
    testimonialsTitle: "Отзывы об инфракрасных саунах",
    testimonialsSubtitle: "ИК-кабины для дома и spa",
    testimonials: [
      { name: "Татьяна Г.", role: "Частный клиент, Москва", avatar: "ТГ", stars: 5, quote: "ИК-кабина в квартиру под размер ниши. Прогрев мягкий, энергии ест мало, выходит на режим быстро. Идеально для городской квартиры!" },
      { name: "Павел Н.", role: "Фитнес-студия", avatar: "ПН", stars: 5, quote: "Поставили ИК-сауну на 2 человека для клиентов. Сенсорное управление, подсветка, аудио — всё на уровне. Монтаж за один день." },
      { name: "Анна Б.", role: "Частный клиент, СПб", avatar: "АБ", stars: 5, quote: "Долго выбирала между парной и ИК-кабиной — не пожалела. Кедр пахнет приятно, прогрев глубокий. Спасибо за изготовление под размер." },
    ],
    casesTitle: "Наши ИК-сауны",
    casesSubtitle: "Инфракрасные кабины под ключ",
    cases: [
      { image: IR, category: "ИК-сауна", categoryColor: amberBadge, title: "ИК-кабина из кедра", short: "Керамические излучатели и сенсорное управление" },
      { image: SAUNA2, category: "ИК-сауна", categoryColor: amberBadge, title: "ИК-кабина для квартиры", short: "Компактная модель под размер помещения" },
      { image: IR, category: "Коммерческий", categoryColor: grayBadge, title: "ИК-сауна для студии", short: "Кабина на 2 человека с аудиосистемой" },
    ],
  },
  equipment: {
    testimonialsTitle: "Отзывы об оборудовании",
    testimonialsSubtitle: "Печи, парогенераторы и автоматика",
    testimonials: [
      { name: "Константин Ж.", role: "Частный клиент, Москва", avatar: "КЖ", stars: 5, quote: "Купил электрокаменку Harvia с пультом — цена ниже розницы, привезли и смонтировали за день. Помогли подобрать мощность под мою парную." },
      { name: "Светлана О.", role: "Банный комплекс", avatar: "СО", stars: 5, quote: "Брали парогенераторы и автоматику для хамама. Прямые поставки, гарантия, всё настроили под ключ. Работает безотказно." },
      { name: "Денис Р.", role: "Частный клиент, Казань", avatar: "ДР", stars: 5, quote: "Дровяная печь со стеклянной дверцей и баком. Качество отличное, нашли дешевле в другом месте — сделали ещё выгоднее. Доволен!" },
    ],
    casesTitle: "Оборудование для бань и саун",
    casesSubtitle: "Печи, парогенераторы и автоматика ведущих брендов",
    cases: [
      { image: EQUIP, category: "Печи", categoryColor: greenBadge, title: "Электрокаменки Harvia", short: "Электрические печи с пультом для саун 3–20 м²" },
      { image: EQUIP, category: "Автоматика", categoryColor: greenBadge, title: "Парогенераторы и пульты", short: "Системы автоматического управления климатом" },
      { image: EQUIP, category: "Печи", categoryColor: greenBadge, title: "Дровяные печи-каменки", short: "Чугунные и стальные печи со стеклом и баком" },
    ],
  },
  "bath-complex": {
    testimonialsTitle: "Отзывы о банных комплексах",
    testimonialsSubtitle: "Комплексы для дома и бизнеса",
    testimonials: [
      { name: "Михаил С.", role: "Владелец отеля «Лесной»", avatar: "МС", stars: 5, quote: "Банный комплекс для загородного отеля: сауна, хамам, купель — всё под ключ за 3 месяца. Гости в восторге, загрузка выросла на 30%." },
      { name: "Артём Л.", role: "База отдыха", avatar: "АЛ", stars: 5, quote: "Объединили баню, бассейн и комнату отдыха в единое пространство. Зонирование продумано, инженерия скрыта. Клиенты не хотят уезжать." },
      { name: "Вера К.", role: "Частный клиент, Подмосковье", avatar: "ВК", stars: 5, quote: "Большой банный комплекс при доме: парная, бассейн, зона отдыха с баром. От эскиза до сдачи вели одной командой. Результат шикарный." },
    ],
    casesTitle: "Наши банные комплексы",
    casesSubtitle: "Комплексы под ключ для дома, отелей и баз отдыха",
    cases: [
      { image: COMPLEX, category: "Комплекс", categoryColor: grayBadge, title: "Комплекс для отеля", short: "Сауна, хамам, бассейн и зона отдыха в одном пространстве" },
      { image: SAUNA, category: "Комплекс", categoryColor: grayBadge, title: "Банный комплекс при доме", short: "Парная, купель и комната отдыха с баром" },
      { image: HAMMAM3, category: "Коммерческий", categoryColor: grayBadge, title: "SPA-комплекс для базы отдыха", short: "Полный цикл: проект, строительство, интерьеры" },
    ],
  },
  "salt-cave-room": {
    testimonialsTitle: "Отзывы о соляных пещерах",
    testimonialsSubtitle: "Галокамеры для дома и spa",
    testimonials: [
      { name: "Людмила А.", role: "Медицинский центр", avatar: "ЛА", stars: 5, quote: "Соляная пещера из гималайской соли с галогенератором. Пациенты с болезнями дыхания отмечают улучшение. Атмосфера расслабляющая." },
      { name: "Олег Д.", role: "Частный клиент, Москва", avatar: "ОД", stars: 5, quote: "Сделали соляную комнату дома для всей семьи. Дети болеют реже, иммунитет окреп. Подсветка соли — отдельное удовольствие." },
      { name: "Ксения М.", role: "SPA-салон", avatar: "КМ", stars: 5, quote: "Галокамера стала хитом салона. Климат-контроль держит влажность идеально, лежаки удобные. Окупилась быстрее, чем ожидали." },
    ],
    casesTitle: "Наши соляные пещеры",
    casesSubtitle: "Галокамеры из гималайской и каменной соли",
    cases: [
      { image: SALT, category: "Соляная пещера", categoryColor: blueBadge, title: "Пещера из гималайской соли", short: "Подсвеченные блоки и профессиональный галогенератор" },
      { image: SALT2, category: "Галотерапия", categoryColor: blueBadge, title: "Соляная комната для дома", short: "Каменная белая соль и тёплая подсветка" },
      { image: SALT, category: "Оздоровление", categoryColor: blueBadge, title: "Галокамера для медцентра", short: "Климат-контроль и зона отдыха с лежаками" },
    ],
  },
  cooling: {
    testimonialsTitle: "Отзывы о системах охлаждения",
    testimonialsSubtitle: "Купели, ледяные фонтаны, снежные комнаты",
    testimonials: [
      { name: "Григорий П.", role: "Частный клиент, Подмосковье", avatar: "ГП", stars: 5, quote: "Купель из нержавейки с охлаждением после парной — то что нужно для контраста. Качество стали отличное, вода всегда холодная." },
      { name: "Алиса Н.", role: "Банный клуб", avatar: "АН", stars: 5, quote: "Поставили ледяной фонтан и снежную комнату. Гости в восторге от контрастных процедур, такого больше нигде в городе нет!" },
      { name: "Юрий В.", role: "SPA-комплекс", avatar: "ЮВ", stars: 5, quote: "Душ впечатлений с разными режимами и ароматами дополнил наш spa. Монтаж аккуратный, всё работает надёжно. Рекомендую команду." },
    ],
    casesTitle: "Наши системы охлаждения",
    casesSubtitle: "Купели, ледяные фонтаны и снежные комнаты",
    cases: [
      { image: COOL, category: "Купель", categoryColor: blueBadge, title: "Купель с охлаждением", short: "Нержавеющая сталь и система охлаждения воды" },
      { image: COOL, category: "Контраст", categoryColor: blueBadge, title: "Ледяной фонтан", short: "Ледогенератор для контрастных процедур" },
      { image: SALT2, category: "Релакс", categoryColor: blueBadge, title: "Душ впечатлений", short: "Контрастный душ с режимами, ароматами и подсветкой" },
    ],
  },
}

export const getServiceExtra = (slug: string): ServiceExtra | undefined =>
  serviceExtras[slug]
