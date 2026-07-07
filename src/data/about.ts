import type { IconType } from 'react-icons'
import { FiBriefcase, FiTrendingUp, FiZap, FiTarget } from 'react-icons/fi'

/*
  Секция «Обо мне» — набор карточек-смыслов (опыт / рост / как работаю / чего хочу).
  Тексты — своими словами, не копия резюме. Форма карточки переиспользуется
  компонентом AboutCard. Ссылка (link) опциональна — ведёт вглубь страницы.
*/
export interface AboutCard {
  icon: IconType
  title: string
  text: string
  link?: { label: string; url: string }
}

export const aboutSection = {
  title: 'Обо мне',
  subtitle: 'Фронтендер, который не боится залезть за пределы фронта.',
}

export const aboutCards: AboutCard[] = [
  {
    icon: FiBriefcase,
    title: 'Коммерческий опыт',
    text: 'Почти два года собирал корпоративные интерфейсы на Vue 3 и TypeScript — в живом продакшене, с интеграциями, автотестами и код-ревью.',
    link: { label: 'Смотреть опыт', url: '#experience' },
  },
  {
    icon: FiTrendingUp,
    title: 'Куда расту',
    text: 'Не залипаю только на фронте: беру бэкенд, поднимаю Docker и сам вывожу проекты в прод. Инфраструктуру и AI качаю на пет-проектах.',
    link: { label: 'Смотреть проекты', url: '#projects' },
  },
  {
    icon: FiZap,
    title: 'Как работаю',
    text: 'Быстро вникаю в чужую кодовую базу. AI-инструменты держу под рукой — это часть ежедневного процесса, а не игрушка на пять минут.',
  },
  {
    icon: FiTarget,
    title: 'Чего хочу',
    text: 'Ищу сильную команду на Vue или React, где можно расти как фронтендер и постепенно уходить в fullstack.',
    link: { label: 'Связаться', url: '#contacts' },
  },
]
