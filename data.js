/* data.js — LMS: курсы, студенты, задания */
const courses = [
  {
    id: "CRS-101",
    title: "Введение в веб-разработку",
    description: "HTML, CSS, основы JavaScript и адаптивная вёрстка",
    status: "active",
    level: "beginner",
    startDate: "2026-09-01",
    endDate: "2026-12-20",
    instructor: "А. Смирнова",
    hours: 72,
    tags: ["frontend", "html", "css"],
    modules: [
      { name: "HTML5", lessons: 8 },
      { name: "CSS3", lessons: 10 },
      { name: "JavaScript basics", lessons: 12 }
    ]
  },
  {
    id: "CRS-102",
    title: "Алгоритмы и структуры данных",
    description: "Классические алгоритмы, сложность, практика на задачах",
    status: "active",
    level: "intermediate",
    startDate: "2026-09-01",
    endDate: "2027-01-15",
    instructor: "И. Петров",
    hours: 96,
    tags: ["algorithms", "cs"],
    modules: [
      { name: "Сортировки", lessons: 6 },
      { name: "Деревья и графы", lessons: 10 },
      { name: "Динамическое программирование", lessons: 8 }
    ]
  },
  {
    id: "CRS-103",
    title: "Базы данных",
    description: "Реляционные БД, SQL, нормализация, индексы",
    status: "active",
    level: "intermediate",
    startDate: "2026-09-15",
    endDate: "2026-12-25",
    instructor: "Е. Козлова",
    hours: 64,
    tags: ["sql", "database"],
    modules: [
      { name: "SQL основы", lessons: 8 },
      { name: "Проектирование схем", lessons: 6 },
      { name: "Оптимизация запросов", lessons: 6 }
    ]
  },
  {
    id: "CRS-104",
    title: "React и современный frontend",
    description: "Компоненты, хуки, роутинг, state management",
    status: "active",
    level: "advanced",
    startDate: "2026-10-01",
    endDate: "2027-02-28",
    instructor: "М. Волков",
    hours: 80,
    tags: ["react", "frontend", "js"],
    modules: [
      { name: "Компоненты и JSX", lessons: 8 },
      { name: "Хуки", lessons: 10 },
      { name: "Роутинг и API", lessons: 8 }
    ]
  },
  {
    id: "CRS-105",
    title: "Python для анализа данных",
    description: "Pandas, NumPy, визуализация, основы ML",
    status: "draft",
    level: "intermediate",
    startDate: "2026-11-01",
    endDate: "2027-03-15",
    instructor: "О. Новикова",
    hours: 88,
    tags: ["python", "data", "ml"],
    modules: [
      { name: "Pandas", lessons: 10 },
      { name: "Визуализация", lessons: 6 },
      { name: "Введение в ML", lessons: 8 }
    ]
  },
  {
    id: "CRS-106",
    title: "UX/UI дизайн",
    description: "Прототипирование, usability, дизайн-системы",
    status: "active",
    level: "beginner",
    startDate: "2026-09-10",
    endDate: "2026-12-10",
    instructor: "Д. Соколова",
    hours: 56,
    tags: ["design", "ux", "ui"],
    modules: [
      { name: "Исследование пользователей", lessons: 5 },
      { name: "Wireframes и прототипы", lessons: 8 },
      { name: "Дизайн-системы", lessons: 5 }
    ]
  },
  {
    id: "CRS-107",
    title: "DevOps основы",
    description: "CI/CD, Docker, Linux, мониторинг",
    status: "active",
    level: "advanced",
    startDate: "2026-10-15",
    endDate: "2027-02-15",
    instructor: "С. Морозов",
    hours: 72,
    tags: ["devops", "docker", "ci"],
    modules: [
      { name: "Linux и сети", lessons: 6 },
      { name: "Docker", lessons: 8 },
      { name: "CI/CD pipelines", lessons: 8 }
    ]
  },
  {
    id: "CRS-108",
    title: "Мобильная разработка",
    description: "Кроссплатформенные приложения на React Native",
    status: "archived",
    level: "intermediate",
    startDate: "2025-09-01",
    endDate: "2026-01-20",
    instructor: "А. Лебедев",
    hours: 90,
    tags: ["mobile", "react-native"],
    modules: [
      { name: "Основы RN", lessons: 10 },
      { name: "Навигация", lessons: 6 },
      { name: "Нативные модули", lessons: 6 }
    ]
  },
  {
    id: "CRS-109",
    title: "Кибербезопасность",
    description: "Угрозы, защита веб-приложений, OWASP",
    status: "active",
    level: "advanced",
    startDate: "2026-09-20",
    endDate: "2027-01-30",
    instructor: "В. Кузнецов",
    hours: 68,
    tags: ["security", "owasp"],
    modules: [
      { name: "Угрозы и модели", lessons: 6 },
      { name: "Защита приложений", lessons: 10 },
      { name: "Аудит и пентест", lessons: 6 }
    ]
  },
  {
    id: "CRS-110",
    title: "Математика для программистов",
    description: "Дискретная математика, логика, комбинаторика",
    status: "active",
    level: "beginner",
    startDate: "2026-09-01",
    endDate: "2026-12-15",
    instructor: "Н. Фёдорова",
    hours: 60,
    tags: ["math", "discrete"],
    modules: [
      { name: "Множества и логика", lessons: 8 },
      { name: "Графы", lessons: 6 },
      { name: "Комбинаторика", lessons: 6 }
    ]
  },
  {
    id: "CRS-111",
    title: "TypeScript углублённо",
    description: "Типы, generics, утилиты, интеграция с React",
    status: "draft",
    level: "advanced",
    startDate: "2026-11-15",
    endDate: "2027-03-01",
    instructor: "М. Волков",
    hours: 48,
    tags: ["typescript", "js"],
    modules: [
      { name: "Система типов", lessons: 8 },
      { name: "Generics и утилиты", lessons: 6 },
      { name: "TS + React", lessons: 6 }
    ]
  },
  {
    id: "CRS-112",
    title: "Проектный менеджмент в IT",
    description: "Agile, Scrum, оценка задач, коммуникация",
    status: "active",
    level: "beginner",
    startDate: "2026-09-05",
    endDate: "2026-11-30",
    instructor: "Т. Иванова",
    hours: 40,
    tags: ["management", "agile"],
    modules: [
      { name: "Agile и Scrum", lessons: 6 },
      { name: "Оценка и планирование", lessons: 5 },
      { name: "Командная работа", lessons: 4 }
    ]
  },
  {
    id: "CRS-113",
    title: "Node.js и backend",
    description: "Express, REST API, аутентификация, тестирование",
    status: "active",
    level: "intermediate",
    startDate: "2026-10-01",
    endDate: "2027-01-20",
    instructor: "И. Петров",
    hours: 76,
    tags: ["nodejs", "backend", "api"],
    modules: [
      { name: "Express и middleware", lessons: 8 },
      { name: "Auth и JWT", lessons: 6 },
      { name: "Тесты и деплой", lessons: 6 }
    ]
  },
  {
    id: "CRS-114",
    title: "Английский для IT",
    description: "Технический английский, собеседования, документация",
    status: "active",
    level: "beginner",
    startDate: "2026-09-01",
    endDate: "2026-12-20",
    instructor: "J. Wilson",
    hours: 48,
    tags: ["english", "soft-skills"],
    modules: [
      { name: "Vocabulary", lessons: 8 },
      { name: "Speaking practice", lessons: 6 },
      { name: "Interview prep", lessons: 6 }
    ]
  },
  {
    id: "CRS-115",
    title: "Machine Learning intro",
    description: "Линейные модели, деревья, метрики, практика",
    status: "draft",
    level: "advanced",
    startDate: "2027-01-10",
    endDate: "2027-05-20",
    instructor: "О. Новикова",
    hours: 100,
    tags: ["ml", "python", "ai"],
    modules: [
      { name: "Supervised learning", lessons: 12 },
      { name: "Unsupervised", lessons: 8 },
      { name: "Практика и Kaggle", lessons: 10 }
    ]
  }
];

const students = [
  {
    id: "STU-001",
    name: "Анна Ковалёва",
    email: "a.kovaleva@edu.local",
    group: "ИС-21",
    status: "active",
    enrollmentDate: "2024-09-01",
    gpa: 4.7,
    phone: "+7 900 100-01-01",
    courses: [
      { courseId: "CRS-101", progress: 85, grade: 5 },
      { courseId: "CRS-103", progress: 60, grade: 4 }
    ],
    city: "Москва"
  },
  {
    id: "STU-002",
    name: "Дмитрий Орлов",
    email: "d.orlov@edu.local",
    group: "ИС-21",
    status: "active",
    enrollmentDate: "2024-09-01",
    gpa: 4.2,
    phone: "+7 900 100-01-02",
    courses: [
      { courseId: "CRS-101", progress: 70, grade: 4 },
      { courseId: "CRS-102", progress: 55, grade: 4 }
    ],
    city: "Санкт-Петербург"
  },
  {
    id: "STU-003",
    name: "Елена Васильева",
    email: "e.vasileva@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 4.9,
    phone: "+7 900 100-01-03",
    courses: [
      { courseId: "CRS-104", progress: 90, grade: 5 },
      { courseId: "CRS-106", progress: 80, grade: 5 }
    ],
    city: "Казань"
  },
  {
    id: "STU-004",
    name: "Игорь Семёнов",
    email: "i.semenov@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 3.8,
    phone: "+7 900 100-01-04",
    courses: [
      { courseId: "CRS-101", progress: 45, grade: 3 },
      { courseId: "CRS-110", progress: 50, grade: 3 }
    ],
    city: "Новосибирск"
  },
  {
    id: "STU-005",
    name: "Мария Громова",
    email: "m.gromova@edu.local",
    group: "ИС-20",
    status: "graduated",
    enrollmentDate: "2023-09-01",
    gpa: 4.6,
    phone: "+7 900 100-01-05",
    courses: [
      { courseId: "CRS-108", progress: 100, grade: 5 },
      { courseId: "CRS-113", progress: 100, grade: 5 }
    ],
    city: "Екатеринбург"
  },
  {
    id: "STU-006",
    name: "Павел Тихонов",
    email: "p.tikhonov@edu.local",
    group: "ИС-21",
    status: "active",
    enrollmentDate: "2024-09-01",
    gpa: 4.0,
    phone: "+7 900 100-01-06",
    courses: [
      { courseId: "CRS-102", progress: 65, grade: 4 },
      { courseId: "CRS-103", progress: 40, grade: 3 }
    ],
    city: "Москва"
  },
  {
    id: "STU-007",
    name: "Ольга Белова",
    email: "o.belova@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 4.5,
    phone: "+7 900 100-01-07",
    courses: [
      { courseId: "CRS-106", progress: 75, grade: 5 },
      { courseId: "CRS-112", progress: 90, grade: 5 }
    ],
    city: "Нижний Новгород"
  },
  {
    id: "STU-008",
    name: "Кирилл Зайцев",
    email: "k.zaitsev@edu.local",
    group: "ИС-21",
    status: "suspended",
    enrollmentDate: "2024-09-01",
    gpa: 2.9,
    phone: "+7 900 100-01-08",
    courses: [
      { courseId: "CRS-101", progress: 20, grade: 2 }
    ],
    city: "Самара"
  },
  {
    id: "STU-009",
    name: "София Романова",
    email: "s.romanova@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 4.8,
    phone: "+7 900 100-01-09",
    courses: [
      { courseId: "CRS-104", progress: 88, grade: 5 },
      { courseId: "CRS-109", progress: 70, grade: 4 }
    ],
    city: "Москва"
  },
  {
    id: "STU-010",
    name: "Артём Николаев",
    email: "a.nikolaev@edu.local",
    group: "ИС-20",
    status: "graduated",
    enrollmentDate: "2023-09-01",
    gpa: 4.3,
    phone: "+7 900 100-01-10",
    courses: [
      { courseId: "CRS-107", progress: 100, grade: 4 },
      { courseId: "CRS-113", progress: 100, grade: 5 }
    ],
    city: "Краснодар"
  },
  {
    id: "STU-011",
    name: "Виктория Крылова",
    email: "v.krylova@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 4.1,
    phone: "+7 900 100-01-11",
    courses: [
      { courseId: "CRS-101", progress: 55, grade: 4 },
      { courseId: "CRS-114", progress: 80, grade: 5 }
    ],
    city: "Воронеж"
  },
  {
    id: "STU-012",
    name: "Максим Егоров",
    email: "m.egorov@edu.local",
    group: "ИС-21",
    status: "active",
    enrollmentDate: "2024-09-01",
    gpa: 3.6,
    phone: "+7 900 100-01-12",
    courses: [
      { courseId: "CRS-102", progress: 30, grade: 3 },
      { courseId: "CRS-110", progress: 45, grade: 3 }
    ],
    city: "Пермь"
  },
  {
    id: "STU-013",
    name: "Алина Медведева",
    email: "a.medvedeva@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 4.4,
    phone: "+7 900 100-01-13",
    courses: [
      { courseId: "CRS-103", progress: 72, grade: 4 },
      { courseId: "CRS-106", progress: 65, grade: 4 }
    ],
    city: "Уфа"
  },
  {
    id: "STU-014",
    name: "Никита Соловьёв",
    email: "n.solovev@edu.local",
    group: "ИС-21",
    status: "active",
    enrollmentDate: "2024-09-01",
    gpa: 4.0,
    phone: "+7 900 100-01-14",
    courses: [
      { courseId: "CRS-107", progress: 50, grade: 4 },
      { courseId: "CRS-109", progress: 40, grade: 3 }
    ],
    city: "Ростов-на-Дону"
  },
  {
    id: "STU-015",
    name: "Юлия Панова",
    email: "y.panova@edu.local",
    group: "ПИ-22",
    status: "active",
    enrollmentDate: "2025-09-01",
    gpa: 4.6,
    phone: "+7 900 100-01-15",
    courses: [
      { courseId: "CRS-104", progress: 78, grade: 5 },
      { courseId: "CRS-112", progress: 85, grade: 5 }
    ],
    city: "Челябинск"
  },
  {
    id: "STU-016",
    name: "Роман Жуков",
    email: "r.zhukov@edu.local",
    group: "ИС-20",
    status: "graduated",
    enrollmentDate: "2023-09-01",
    gpa: 3.9,
    phone: "+7 900 100-01-16",
    courses: [
      { courseId: "CRS-108", progress: 100, grade: 4 }
    ],
    city: "Томск"
  }
];

const assignments = [
  {
    id: "ASN-001",
    title: "Вёрстка лендинга",
    description: "Адаптивная страница продукта по макету Figma",
    courseId: "CRS-101",
    courseTitle: "Введение в веб-разработку",
    status: "graded",
    priority: "high",
    dueDate: "2026-10-15",
    maxScore: 100,
    submissions: 28,
    avgScore: 82,
    tags: ["html", "css"]
  },
  {
    id: "ASN-002",
    title: "Реализация сортировок",
    description: "QuickSort, MergeSort, сравнение сложности",
    courseId: "CRS-102",
    courseTitle: "Алгоритмы и структуры данных",
    status: "submitted",
    priority: "high",
    dueDate: "2026-10-20",
    maxScore: 100,
    submissions: 22,
    avgScore: null,
    tags: ["algorithms"]
  },
  {
    id: "ASN-003",
    title: "Схема БД интернет-магазина",
    description: "ER-диаграмма и SQL-скрипты создания таблиц",
    courseId: "CRS-103",
    courseTitle: "Базы данных",
    status: "pending",
    priority: "medium",
    dueDate: "2026-11-05",
    maxScore: 80,
    submissions: 5,
    avgScore: null,
    tags: ["sql", "design"]
  },
  {
    id: "ASN-004",
    title: "Todo-приложение на React",
    description: "CRUD, хуки, localStorage, фильтры",
    courseId: "CRS-104",
    courseTitle: "React и современный frontend",
    status: "graded",
    priority: "high",
    dueDate: "2026-10-10",
    maxScore: 100,
    submissions: 18,
    avgScore: 88,
    tags: ["react", "js"]
  },
  {
    id: "ASN-005",
    title: "Анализ датасета Titanic",
    description: "EDA на Pandas, визуализация, выводы",
    courseId: "CRS-105",
    courseTitle: "Python для анализа данных",
    status: "pending",
    priority: "medium",
    dueDate: "2026-12-01",
    maxScore: 100,
    submissions: 0,
    avgScore: null,
    tags: ["python", "pandas"]
  },
  {
    id: "ASN-006",
    title: "Прототип мобильного экрана",
    description: "Wireframe и high-fidelity макет в Figma",
    courseId: "CRS-106",
    courseTitle: "UX/UI дизайн",
    status: "graded",
    priority: "medium",
    dueDate: "2026-10-05",
    maxScore: 90,
    submissions: 25,
    avgScore: 79,
    tags: ["figma", "ux"]
  },
  {
    id: "ASN-007",
    title: "Dockerfile и docker-compose",
    description: "Контейнеризация простого Node-приложения",
    courseId: "CRS-107",
    courseTitle: "DevOps основы",
    status: "overdue",
    priority: "high",
    dueDate: "2026-10-01",
    maxScore: 80,
    submissions: 12,
    avgScore: null,
    tags: ["docker"]
  },
  {
    id: "ASN-008",
    title: "Список с pull-to-refresh",
    description: "Экран списка на React Native",
    courseId: "CRS-108",
    courseTitle: "Мобильная разработка",
    status: "graded",
    priority: "low",
    dueDate: "2025-12-10",
    maxScore: 70,
    submissions: 20,
    avgScore: 75,
    tags: ["react-native"]
  },
  {
    id: "ASN-009",
    title: "Отчёт по OWASP Top 10",
    description: "Разбор уязвимостей и способы защиты",
    courseId: "CRS-109",
    courseTitle: "Кибербезопасность",
    status: "submitted",
    priority: "high",
    dueDate: "2026-10-25",
    maxScore: 100,
    submissions: 15,
    avgScore: null,
    tags: ["security"]
  },
  {
    id: "ASN-010",
    title: "Задачи на графы",
    description: "BFS, DFS, кратчайший путь",
    courseId: "CRS-110",
    courseTitle: "Математика для программистов",
    status: "pending",
    priority: "medium",
    dueDate: "2026-11-10",
    maxScore: 60,
    submissions: 8,
    avgScore: null,
    tags: ["math", "graphs"]
  },
  {
    id: "ASN-011",
    title: "Типизация API-клиента",
    description: "TypeScript-типы для REST API",
    courseId: "CRS-111",
    courseTitle: "TypeScript углублённо",
    status: "pending",
    priority: "low",
    dueDate: "2026-12-15",
    maxScore: 80,
    submissions: 0,
    avgScore: null,
    tags: ["typescript"]
  },
  {
    id: "ASN-012",
    title: "Sprint retrospective",
    description: "Провести ретро и оформить отчёт",
    courseId: "CRS-112",
    courseTitle: "Проектный менеджмент в IT",
    status: "graded",
    priority: "medium",
    dueDate: "2026-10-08",
    maxScore: 50,
    submissions: 30,
    avgScore: 91,
    tags: ["agile"]
  },
  {
    id: "ASN-013",
    title: "REST API блога",
    description: "CRUD постов, JWT auth, валидация",
    courseId: "CRS-113",
    courseTitle: "Node.js и backend",
    status: "submitted",
    priority: "high",
    dueDate: "2026-10-30",
    maxScore: 100,
    submissions: 14,
    avgScore: null,
    tags: ["nodejs", "api"]
  },
  {
    id: "ASN-014",
    title: "Mock interview",
    description: "Запись ответа на 3 вопроса собеседования",
    courseId: "CRS-114",
    courseTitle: "Английский для IT",
    status: "graded",
    priority: "low",
    dueDate: "2026-10-12",
    maxScore: 40,
    submissions: 27,
    avgScore: 86,
    tags: ["english"]
  },
  {
    id: "ASN-015",
    title: "Линейная регрессия",
    description: "Реализация с нуля + сравнение с sklearn",
    courseId: "CRS-115",
    courseTitle: "Machine Learning intro",
    status: "pending",
    priority: "high",
    dueDate: "2027-02-20",
    maxScore: 100,
    submissions: 0,
    avgScore: null,
    tags: ["ml", "python"]
  },
  {
    id: "ASN-016",
    title: "CSS Grid галерея",
    description: "Адаптивная галерея без JS",
    courseId: "CRS-101",
    courseTitle: "Введение в веб-разработку",
    status: "overdue",
    priority: "medium",
    dueDate: "2026-09-25",
    maxScore: 50,
    submissions: 26,
    avgScore: 70,
    tags: ["css"]
  }
];
