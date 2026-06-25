export interface QuizOption {
  id: string
  label: string
  icon?: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
  multiple?: boolean
}

export interface QuizConfig {
  slug: string
  title: string
  subtitle: string
  icon: string
  color: string
  questions: QuizQuestion[]
}

export const quizzes: QuizConfig[] = [
  {
    slug: "hammam",
    title: "Хаммам под ключ",
    subtitle: "Поможем рассчитать стоимость вашего проекта",
    icon: "Landmark",
    color: "from-blue-600 to-purple-600",
    questions: [
      {
        id: "type",
        question: "Какой тип хаммама вас интересует?",
        options: [
          { id: "private", label: "Частный — для дома / квартиры", icon: "Home" },
          { id: "hotel", label: "Для отеля / SPA-центра", icon: "Building2" },
          { id: "recreation", label: "Для зоны отдыха", icon: "Palmtree" },
          { id: "notSure", label: "Пока не определился", icon: "HelpCircle" },
        ],
      },
      {
        id: "area",
        question: "Какая площадь помещения под хаммам?",
        options: [
          { id: "small", label: "До 10 м²", icon: "Minimize2" },
          { id: "medium", label: "10–20 м²", icon: "Square" },
          { id: "large", label: "20–40 м²", icon: "Maximize2" },
          { id: "xlarge", label: "Больше 40 м²", icon: "LayoutGrid" },
        ],
      },
      {
        id: "finish",
        question: "Какая отделка интересует?",
        options: [
          { id: "mosaic", label: "Мозаика (Bisazza и др.)", icon: "Grid3x3" },
          { id: "marble", label: "Натуральный мрамор", icon: "Gem" },
          { id: "tile", label: "Плитка — практично и бюджетно", icon: "LayoutGrid" },
          { id: "premium", label: "Премиум-комбинация", icon: "Sparkles" },
        ],
      },
      {
        id: "options",
        question: "Какие опции хотите включить?",
        multiple: true,
        options: [
          { id: "stars", label: "Звёздное небо / фибероптика", icon: "Stars" },
          { id: "aromatics", label: "Ароматерапия", icon: "Wind" },
          { id: "chromotherapy", label: "Хромотерапия (цветная подсветка)", icon: "Palette" },
          { id: "bed", label: "Подогреваемый лежак (чебек)", icon: "Armchair" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 1 500 000 ₽", icon: "Wallet" },
          { id: "b2", label: "1,5 — 3 млн ₽", icon: "CreditCard" },
          { id: "b3", label: "3 — 6 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 6 млн ₽", icon: "TrendingUp" },
        ],
      },
      {
        id: "timeline",
        question: "Когда планируете начать?",
        options: [
          { id: "now", label: "Как можно скорее", icon: "Zap" },
          { id: "month", label: "В ближайший месяц", icon: "Calendar" },
          { id: "quarter", label: "В течение 3 месяцев", icon: "CalendarDays" },
          { id: "planning", label: "Пока изучаю варианты", icon: "Search" },
        ],
      },
    ],
  },
  {
    slug: "sauna",
    title: "Сауна / Баня под ключ",
    subtitle: "Подберём идеальное решение для вашего объекта",
    icon: "Flame",
    color: "from-orange-500 to-red-600",
    questions: [
      {
        id: "type",
        question: "Какой тип парной вас интересует?",
        options: [
          { id: "finnish", label: "Финская сауна", icon: "Flame" },
          { id: "russian", label: "Русская баня", icon: "TreePine" },
          { id: "glass", label: "Стеклянная кабина", icon: "Square" },
          { id: "notSure", label: "Помогите выбрать", icon: "HelpCircle" },
        ],
      },
      {
        id: "location",
        question: "Где будет размещаться?",
        options: [
          { id: "house", label: "Частный дом", icon: "Home" },
          { id: "apartment", label: "Квартира / апартаменты", icon: "Building" },
          { id: "cottage", label: "Дача / загородный участок", icon: "Trees" },
          { id: "commercial", label: "Коммерческий объект", icon: "Building2" },
        ],
      },
      {
        id: "area",
        question: "Планируемая площадь парной?",
        options: [
          { id: "small", label: "До 5 м²", icon: "Minimize2" },
          { id: "medium", label: "5–15 м²", icon: "Square" },
          { id: "large", label: "15–30 м²", icon: "Maximize2" },
          { id: "xlarge", label: "Больше 30 м²", icon: "LayoutGrid" },
        ],
      },
      {
        id: "wood",
        question: "Предпочтение по материалу?",
        options: [
          { id: "abashi", label: "Абаши (не обжигает)", icon: "TreePine" },
          { id: "linden", label: "Липа (классика)", icon: "Leaf" },
          { id: "cedar", label: "Кедр (аромат)", icon: "Trees" },
          { id: "noPreference", label: "Посоветуйте сами", icon: "HelpCircle" },
        ],
      },
      {
        id: "extras",
        question: "Что дополнительно хотите?",
        multiple: true,
        options: [
          { id: "bath", label: "Купель / чаша", icon: "Droplets" },
          { id: "rest", label: "Комната отдыха", icon: "Sofa" },
          { id: "shower", label: "Душевая кабина", icon: "ShowerHead" },
          { id: "pool", label: "Небольшой бассейн", icon: "Waves" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 800 000 ₽", icon: "Wallet" },
          { id: "b2", label: "800 000 — 2 млн ₽", icon: "CreditCard" },
          { id: "b3", label: "2 — 5 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 5 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
  {
    slug: "pool",
    title: "Бассейн под ключ",
    subtitle: "Рассчитаем стоимость под ваш проект",
    icon: "Waves",
    color: "from-cyan-500 to-blue-600",
    questions: [
      {
        id: "type",
        question: "Какой тип бассейна планируете?",
        options: [
          { id: "indoor", label: "Крытый (внутри помещения)", icon: "Home" },
          { id: "outdoor", label: "Открытый (на участке)", icon: "Sun" },
          { id: "spa", label: "SPA / джакузи", icon: "Droplets" },
          { id: "decorative", label: "Декоративный", icon: "Sparkles" },
        ],
      },
      {
        id: "size",
        question: "Какой размер бассейна?",
        options: [
          { id: "small", label: "Небольшой — до 15 м²", icon: "Minimize2" },
          { id: "medium", label: "Средний — 15–30 м²", icon: "Square" },
          { id: "large", label: "Большой — 30–60 м²", icon: "Maximize2" },
          { id: "xlarge", label: "Олимпийский — 60+ м²", icon: "LayoutGrid" },
        ],
      },
      {
        id: "finish",
        question: "Предпочтение по отделке чаши?",
        options: [
          { id: "mosaic", label: "Мозаика", icon: "Grid3x3" },
          { id: "tile", label: "Плитка", icon: "Square" },
          { id: "marble", label: "Натуральный камень", icon: "Gem" },
          { id: "film", label: "Плёнка ПВХ", icon: "Layers" },
        ],
      },
      {
        id: "options",
        question: "Какое дополнительное оснащение?",
        multiple: true,
        options: [
          { id: "heating", label: "Подогрев воды", icon: "Thermometer" },
          { id: "hydro", label: "Гидромассаж / форсунки", icon: "Wind" },
          { id: "counter", label: "Противоток для плавания", icon: "Repeat" },
          { id: "light", label: "Подводная подсветка", icon: "Lightbulb" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 2 млн ₽", icon: "Wallet" },
          { id: "b2", label: "2 — 5 млн ₽", icon: "CreditCard" },
          { id: "b3", label: "5 — 10 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 10 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
  {
    slug: "salt-cave",
    title: "Зоны для впечатлений",
    subtitle: "Галотерапия, флоатинг, криосауны и паровые бани",
    icon: "Sparkles",
    color: "from-violet-500 to-pink-600",
    questions: [
      {
        id: "type",
        question: "Какая зона вас интересует?",
        options: [
          { id: "salt", label: "Соляная комната / галокамера", icon: "Gem" },
          { id: "float", label: "Флоатинг (камера невесомости)", icon: "Waves" },
          { id: "cryo", label: "Криосауна", icon: "Snowflake" },
          { id: "steam", label: "Паровая баня", icon: "CloudFog" },
        ],
      },
      {
        id: "purpose",
        question: "Для каких целей?",
        options: [
          { id: "health", label: "Оздоровление и лечение", icon: "HeartPulse" },
          { id: "relax", label: "Релаксация и отдых", icon: "Moon" },
          { id: "business", label: "Бизнес (SPA, отель)", icon: "Building2" },
          { id: "all", label: "Всё вместе", icon: "Sparkles" },
        ],
      },
      {
        id: "area",
        question: "Какая площадь под зону?",
        options: [
          { id: "small", label: "До 10 м²", icon: "Minimize2" },
          { id: "medium", label: "10–25 м²", icon: "Square" },
          { id: "large", label: "25–50 м²", icon: "Maximize2" },
          { id: "xlarge", label: "Больше 50 м²", icon: "LayoutGrid" },
        ],
      },
      {
        id: "extras",
        question: "Какие дополнения интересуют?",
        multiple: true,
        options: [
          { id: "fiberoptic", label: "Фибероптическое небо", icon: "Stars" },
          { id: "aroma", label: "Ароматерапия", icon: "Wind" },
          { id: "sound", label: "Звукотерапия", icon: "Music" },
          { id: "lighting", label: "Хромотерапия", icon: "Palette" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 600 000 ₽", icon: "Wallet" },
          { id: "b2", label: "600 000 — 2 млн ₽", icon: "CreditCard" },
          { id: "b3", label: "2 — 5 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 5 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
  {
    slug: "infrared-sauna",
    title: "Инфракрасная сауна",
    subtitle: "Подберём ИК-кабину под ваше пространство",
    icon: "Sun",
    color: "from-yellow-500 to-orange-500",
    questions: [
      {
        id: "location",
        question: "Где планируете установить?",
        options: [
          { id: "apartment", label: "Квартира", icon: "Building" },
          { id: "house", label: "Частный дом", icon: "Home" },
          { id: "office", label: "Офис / студия", icon: "Briefcase" },
          { id: "spa", label: "SPA / фитнес-центр", icon: "Dumbbell" },
        ],
      },
      {
        id: "capacity",
        question: "На сколько человек?",
        options: [
          { id: "one", label: "1 человек", icon: "User" },
          { id: "two", label: "2 человека", icon: "Users" },
          { id: "three", label: "3–4 человека", icon: "UsersRound" },
          { id: "more", label: "5 и более", icon: "Users2" },
        ],
      },
      {
        id: "wood",
        question: "Предпочтение по древесине?",
        options: [
          { id: "cedar", label: "Кедр (аромат, премиум)", icon: "Trees" },
          { id: "linden", label: "Липа (классика)", icon: "Leaf" },
          { id: "hemlock", label: "Хемлок (нейтральный)", icon: "TreePine" },
          { id: "noPreference", label: "Посоветуйте", icon: "HelpCircle" },
        ],
      },
      {
        id: "options",
        question: "Какие функции важны?",
        multiple: true,
        options: [
          { id: "audio", label: "Аудиосистема / Bluetooth", icon: "Music" },
          { id: "chromo", label: "Хромотерапия", icon: "Palette" },
          { id: "aroma", label: "Ароматерапия", icon: "Wind" },
          { id: "touch", label: "Сенсорная панель", icon: "Smartphone" },
        ],
      },
      {
        id: "budget",
        question: "Бюджет на ИК-кабину?",
        options: [
          { id: "b1", label: "до 300 000 ₽", icon: "Wallet" },
          { id: "b2", label: "300 000 — 600 000 ₽", icon: "CreditCard" },
          { id: "b3", label: "600 000 — 1,2 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 1,2 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
  {
    slug: "equipment",
    title: "Оборудование для бани",
    subtitle: "Подберём печи, парогенераторы и автоматику",
    icon: "Settings",
    color: "from-slate-600 to-gray-800",
    questions: [
      {
        id: "objectType",
        question: "Для какого объекта?",
        options: [
          { id: "hammam", label: "Хаммам", icon: "Landmark" },
          { id: "sauna", label: "Сауна / финская парная", icon: "Flame" },
          { id: "russian", label: "Русская баня", icon: "TreePine" },
          { id: "infrared", label: "ИК-сауна", icon: "Sun" },
        ],
      },
      {
        id: "equipType",
        question: "Какое оборудование нужно?",
        multiple: true,
        options: [
          { id: "stove", label: "Печь / каменка", icon: "Flame" },
          { id: "generator", label: "Парогенератор", icon: "CloudFog" },
          { id: "automation", label: "Пульт управления / автоматика", icon: "Cpu" },
          { id: "accessories", label: "Аксессуары и расходники", icon: "Package" },
        ],
      },
      {
        id: "brand",
        question: "Интересует конкретный бренд?",
        options: [
          { id: "harvia", label: "Harvia (Финляндия)", icon: "Star" },
          { id: "eos", label: "EOS (Германия)", icon: "Star" },
          { id: "sawo", label: "SAWO / TYLÖ", icon: "Star" },
          { id: "any", label: "Посоветуйте лучший вариант", icon: "HelpCircle" },
        ],
      },
      {
        id: "area",
        question: "Площадь помещения парной?",
        options: [
          { id: "small", label: "До 8 м³ (объём)", icon: "Minimize2" },
          { id: "medium", label: "8–20 м³", icon: "Square" },
          { id: "large", label: "20–40 м³", icon: "Maximize2" },
          { id: "xlarge", label: "Больше 40 м³", icon: "LayoutGrid" },
        ],
      },
      {
        id: "budget",
        question: "Бюджет на оборудование?",
        options: [
          { id: "b1", label: "до 200 000 ₽", icon: "Wallet" },
          { id: "b2", label: "200 000 — 500 000 ₽", icon: "CreditCard" },
          { id: "b3", label: "500 000 — 1,5 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 1,5 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
  {
    slug: "bath-complex",
    title: "Банный комплекс",
    subtitle: "Комплексный проект для дома или бизнеса",
    icon: "Building2",
    color: "from-emerald-600 to-teal-700",
    questions: [
      {
        id: "purpose",
        question: "Для каких целей строите?",
        options: [
          { id: "private", label: "Для семьи / частное", icon: "Home" },
          { id: "rental", label: "Для сдачи в аренду", icon: "Key" },
          { id: "hotel", label: "Для отеля / гостиницы", icon: "Building2" },
          { id: "fitness", label: "Для фитнес-клуба / SPA", icon: "Dumbbell" },
        ],
      },
      {
        id: "composition",
        question: "Что хотите включить в комплекс?",
        multiple: true,
        options: [
          { id: "sauna", label: "Финская сауна", icon: "Flame" },
          { id: "hammam", label: "Хаммам", icon: "Landmark" },
          { id: "pool", label: "Бассейн / купель", icon: "Waves" },
          { id: "rest", label: "Комната отдыха", icon: "Sofa" },
        ],
      },
      {
        id: "area",
        question: "Общая площадь комплекса?",
        options: [
          { id: "small", label: "До 50 м²", icon: "Minimize2" },
          { id: "medium", label: "50–150 м²", icon: "Square" },
          { id: "large", label: "150–300 м²", icon: "Maximize2" },
          { id: "xlarge", label: "Больше 300 м²", icon: "LayoutGrid" },
        ],
      },
      {
        id: "style",
        question: "Предпочитаемый стиль интерьера?",
        options: [
          { id: "classic", label: "Классика / натуральное дерево", icon: "TreePine" },
          { id: "modern", label: "Современный / минимализм", icon: "Square" },
          { id: "luxury", label: "Люкс / премиум-отделка", icon: "Crown" },
          { id: "oriental", label: "Восточный / этно", icon: "Gem" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 3 млн ₽", icon: "Wallet" },
          { id: "b2", label: "3 — 7 млн ₽", icon: "CreditCard" },
          { id: "b3", label: "7 — 15 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 15 млн ₽", icon: "TrendingUp" },
        ],
      },
      {
        id: "timeline",
        question: "Когда хотите начать проект?",
        options: [
          { id: "now", label: "Как можно скорее", icon: "Zap" },
          { id: "month", label: "В ближайший месяц", icon: "Calendar" },
          { id: "quarter", label: "В течение 3–6 месяцев", icon: "CalendarDays" },
          { id: "planning", label: "Ещё на стадии планирования", icon: "Search" },
        ],
      },
    ],
  },
  {
    slug: "salt-cave-room",
    title: "Соляная пещера",
    subtitle: "Подберём решение для галотерапии под ваш объект",
    icon: "Gem",
    color: "from-pink-500 to-rose-600",
    questions: [
      {
        id: "saltType",
        question: "Какой тип соли предпочитаете?",
        options: [
          { id: "himalayan", label: "Розовая гималайская соль", icon: "Mountain" },
          { id: "white", label: "Каменная белая соль", icon: "Gem" },
          { id: "both", label: "Комбинация двух видов", icon: "Layers" },
          { id: "notSure", label: "Посоветуйте сами", icon: "HelpCircle" },
        ],
      },
      {
        id: "purpose",
        question: "Для каких целей создаёте пещеру?",
        options: [
          { id: "home", label: "Для семьи / частное", icon: "Home" },
          { id: "medical", label: "Медицинский / оздоровительный центр", icon: "HeartPulse" },
          { id: "spa", label: "SPA или отель", icon: "Building2" },
          { id: "kids", label: "Детская галокамера", icon: "Baby" },
        ],
      },
      {
        id: "area",
        question: "Планируемая площадь помещения?",
        options: [
          { id: "small", label: "До 8 м²", icon: "Minimize2" },
          { id: "medium", label: "8–15 м²", icon: "Square" },
          { id: "large", label: "15–30 м²", icon: "Maximize2" },
          { id: "xlarge", label: "Больше 30 м²", icon: "LayoutGrid" },
        ],
      },
      {
        id: "options",
        question: "Какие дополнения хотите включить?",
        multiple: true,
        options: [
          { id: "halogenerator", label: "Галогенератор (аэрозольная терапия)", icon: "Wind" },
          { id: "lighting", label: "Тёплая атмосферная подсветка", icon: "Lightbulb" },
          { id: "loungers", label: "Лежаки и кресла для сеансов", icon: "Armchair" },
          { id: "sound", label: "Звукотерапия / медитация", icon: "Music" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 600 000 ₽", icon: "Wallet" },
          { id: "b2", label: "600 000 — 1,5 млн ₽", icon: "CreditCard" },
          { id: "b3", label: "1,5 — 3 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 3 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
  {
    slug: "cooling",
    title: "Системы охлаждения",
    subtitle: "Купели, ледяные фонтаны, снежные комнаты",
    icon: "Snowflake",
    color: "from-sky-400 to-cyan-600",
    questions: [
      {
        id: "type",
        question: "Какой тип охлаждения интересует?",
        options: [
          { id: "plunge", label: "Купель (холодная вода)", icon: "Droplets" },
          { id: "icefountain", label: "Ледяной фонтан", icon: "Snowflake" },
          { id: "snowroom", label: "Снежная комната", icon: "CloudSnow" },
          { id: "shower", label: "Душ впечатлений", icon: "ShowerHead" },
        ],
      },
      {
        id: "context",
        question: "В составе чего планируете?",
        options: [
          { id: "hammam", label: "К хаммаму", icon: "Landmark" },
          { id: "sauna", label: "К сауне / бане", icon: "Flame" },
          { id: "spa", label: "К SPA-комплексу", icon: "Building2" },
          { id: "standalone", label: "Отдельно / самостоятельно", icon: "Package" },
        ],
      },
      {
        id: "material",
        question: "Предпочтение по материалу купели?",
        options: [
          { id: "steel", label: "Нержавеющая сталь", icon: "Layers" },
          { id: "wood", label: "Дерево (кедр, лиственница)", icon: "TreePine" },
          { id: "composite", label: "Композит / акрил", icon: "Circle" },
          { id: "notSure", label: "Посоветуйте", icon: "HelpCircle" },
        ],
      },
      {
        id: "options",
        question: "Какие функции важны?",
        multiple: true,
        options: [
          { id: "cooling", label: "Система охлаждения воды", icon: "Thermometer" },
          { id: "hydro", label: "Гидромассаж / пузырьки", icon: "Wind" },
          { id: "lighting", label: "Подводная подсветка", icon: "Lightbulb" },
          { id: "aroma", label: "Ароматерапия", icon: "Sparkles" },
        ],
      },
      {
        id: "budget",
        question: "Ориентировочный бюджет?",
        options: [
          { id: "b1", label: "до 350 000 ₽", icon: "Wallet" },
          { id: "b2", label: "350 000 — 800 000 ₽", icon: "CreditCard" },
          { id: "b3", label: "800 000 — 2 млн ₽", icon: "Banknote" },
          { id: "b4", label: "Больше 2 млн ₽", icon: "TrendingUp" },
        ],
      },
    ],
  },
]

export const getQuizBySlug = (slug: string): QuizConfig | undefined =>
  quizzes.find((q) => q.slug === slug)