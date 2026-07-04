import type { IconType } from 'react-icons'
import { FiBriefcase, FiServer, FiCpu } from 'react-icons/fi'

/*
  Секция «Что я привношу» — 3 карточки под hero.
  Добавить карточку = добавить объект в массив (компонент трогать не нужно).
  Поле link опционально: без него карточка будет без ссылки.
*/

/** Заголовок и подзаголовок секции. */
export const highlightsSection = {
  title: 'Что я привношу',
  subtitle: 'Сочетаю продакшн-опыт во фронтенде с тягой к инфраструктуре и AI.',
}

/** Форма одной карточки. Используется и здесь, и в компоненте HighlightCard. */
export interface HighlightItem {
  icon: IconType
  title: string
  text: string
  link?: { label: string; url: string }
}

export const highlights: HighlightItem[] = [
  {
    icon: FiBriefcase,
    title: '2+ года в продакшене',
    text: 'Коммерческая разработка корпоративных веб-приложений на Vue 3, React и TypeScript. 20+ интерфейсов в проде.',
    link: { label: 'Смотреть резюме', url: '/cv.pdf' },
  },
  {
    icon: FiServer,
    title: 'Инфраструктура & DevOps',
    text: 'Docker, Linux, CI/CD — контейнеризирую, деплою и поддерживаю свои проекты.',
    link: { label: 'Мой GitHub', url: 'https://github.com/Zonya1202' },
  },
  {
    icon: FiCpu,
    title: 'AI-агенты & автоматизация',
    text: 'Собираю AI-агентов и автоматизирую рутину, ускоряю разработку с помощью AI-инструментов.',
    link: { label: 'Мой GitHub', url: 'https://github.com/Zonya1202' },
  },
]
