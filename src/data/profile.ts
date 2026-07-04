import { FaWhatsapp } from 'react-icons/fa6'

/*
  Основная информация о владельце сайта.
  Меняешь тут — обновляется везде. Трогать компоненты не нужно.
  Меню, соцсети, скилы вынесены в отдельные файлы этой же папки.
*/

/** Кто я: имя, роль, приветствие, ссылки на резюме/контакт. */
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
  cvUrl: '/cv.pdf', // файл резюме лежит в public/cv.pdf
  avatarUrl: '/avatar.png', // аватарка лежит в public/avatar.png
  contactUrl: 'https://t.me/zonya', // ← ссылка кнопки «Contact me»
}

/** Иконка кнопки «Contact me». */
export const contactIcon = FaWhatsapp
