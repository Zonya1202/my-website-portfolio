import type { IconType } from 'react-icons'
import { FaGithub, FaTelegram } from 'react-icons/fa6'
import { SiVk } from 'react-icons/si'

/** Соц-сети под именем — иконка + ссылка. Добавляй/убирай строкой. */
export const socials: { icon: IconType; url: string; label: string }[] = [
  { icon: FaGithub, url: 'https://github.com/Zonya1202', label: 'GitHub' },
  { icon: SiVk, url: 'https://vk.com/', label: 'VK' },
  { icon: FaTelegram, url: 'https://t.me/zonya', label: 'Telegram' },
]
