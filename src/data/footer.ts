import { profile } from './profile'

/** Данные подвала сайта. Год в копирайте считается автоматически, имя — из profile. */
export const footer = {
  copyright: `© ${new Date().getFullYear()} ${profile.name}. Все права защищены.`,
}
