import type { IconType } from 'react-icons'
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa6'
import {
  SiVk,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiHtml5,
  SiCss,
} from 'react-icons/si'

/*
  Это единственное место, где правятся личные данные сайта.
  Меняешь тут — обновляется везде. Трогать компоненты не нужно.
*/

/** Основная информация о владельце. */
export const profile = {
  logo: 'zonya',
  available: 'Открыт к работе',
  greeting: 'Привет 👋, меня зовут',
  name: 'Зон Илья',
  role: 'Front-end developer · UI/UX developer',
  // ↓ Фразы печатаются по очереди. Перепиши под себя (можно любое кол-во).
  descriptionPhrases: [
    'Создаю современные, отзывчивые веб-интерфейсы.',
    'Погружаюсь в инфраструктуру: Docker, Linux, CI/CD.',
    'Собираю AI-агентов и автоматизирую рутину.',
  ],
  cvUrl: '/cv.pdf', // положи файл резюме в папку public/ как cv.pdf
  avatarUrl: '/avatar.png', // положи аватарку в папку public/ как avatar.png
  contactUrl: 'https://t.me/', // ← вставь свою ссылку (Telegram / WhatsApp)
}

/** Пункты меню. Пока ведут на будущие секции (якоря-заглушки). */
export const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Скилы', href: '#skills' },
  { label: 'Контакты', href: '#contacts' },
]

/** Соц-сети под именем — иконка + ссылка. Добавляй/убирай строкой. */
export const socials: { icon: IconType; url: string; label: string }[] = [
  { icon: FaGithub, url: 'https://github.com/', label: 'GitHub' },
  { icon: SiVk, url: 'https://vk.com/', label: 'VK' },
  { icon: FaTelegram, url: 'https://t.me/', label: 'Telegram' },
]

/** Скилы — иконки по орбите вокруг аватарки. Добавляй/убирай строкой. */
export const skills: { icon: IconType; label: string; color: string }[] = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss, label: 'CSS3', color: '#1572B6' },
]

/** Иконка кнопки «Contact me». */
export const contactIcon = FaWhatsapp
