/*
  Секция «Проекты» — собственные pet-проекты. Здесь доказываются fullstack, инфра и AI:
  всё, что на сайте заявлено интересом, тут подкреплено кодом.
  Добавить проект = добавить объект в массив.
*/
export interface ProjectItem {
  title: string
  description: string
  stack: string[]
  repoUrl: string
}

export const projectsSection = {
  title: 'Проекты',
  subtitle: 'Собственные проекты, где беру на себя весь стек — от фронта до деплоя.',
}

export const projects: ProjectItem[] = [
  {
    title: 'Сервис учёта калорий',
    description:
      'Fullstack-сервис учёта калорий: React 19 и RTK Query на фронте, FastAPI и SQLAlchemy на бэке. Монорепозиторий, локальный запуск через Docker Compose.',
    stack: ['React 19', 'TypeScript', 'RTK Query', 'FastAPI', 'SQLAlchemy', 'Docker Compose'],
    repoUrl: 'https://github.com/Zonya1202/calorie-tracker-fullstack',
  },
  {
    title: 'Подготовка к собеседованиям',
    description:
      'PWA для подготовки к техническим собеседованиям: карточки вопрос-ответ с адаптивным уровнем освоения (спейсд-репетишн без привязки к датам) и экспорт/импорт базы в JSON.',
    stack: ['Next.js 16', 'TypeScript', 'Prisma'],
    repoUrl: 'https://github.com/Zonya1202/Personal-knowledge-base',
  },
  {
    title: 'Личный сайт-визитка',
    description:
      'Этот сайт: React + Vite, светлая и тёмная тема, адаптив под любые экраны.',
    stack: ['React', 'Vite', 'TypeScript'],
    repoUrl: 'https://github.com/Zonya1202/my-website-portfolio',
  },
]
