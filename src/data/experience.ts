/*
  Секция «Опыт» — коммерческие места работы. Показываем только релевантный фронт-опыт
  (Bell Integrator). Добавить место = добавить объект в массив.
*/
export interface ExperienceItem {
  role: string
  company: string
  period: string
  project: string
  projectUrl?: string
  description: string
  stack: string[]
  achievements: string[]
}

export const experienceSection = {
  title: 'Опыт',
  subtitle: 'Коммерческая разработка в реальном продакшене.',
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend-разработчик',
    company: 'Бэлл Интегратор',
    period: 'Февраль 2024 — Ноябрь 2025',
    project: 'Газпром-ЦР «Грузовой агрегатор»',
    projectUrl: 'https://express.isource.ru',
    description: 'Веб-платформа для управления заказами и логистикой.',
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'SCSS',
      'RxJS',
      'Vite',
      'GraphQL',
      'REST API',
      'Playwright',
      'pnpm monorepo',
      'Git',
    ],
    achievements: [
      'Вывел в прод 20+ интерфейсов для управления заказами и документами.',
      'С нуля собрал компонент загрузки файлов — с валидацией и предобработкой данных под API.',
      'Закрыл ключевой функционал автотестами — регресс стал заметно быстрее.',
      'Перебрал legacy-модули и поднял стабильность приложения.',
    ],
  },
]
