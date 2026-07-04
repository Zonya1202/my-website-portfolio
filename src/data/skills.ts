import type { IconType } from 'react-icons'
import {
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiDocker,
  SiLinux,
  SiClaude,
} from 'react-icons/si'

/*
  Скилы — иконки по орбите вокруг аватарки. Добавляй/убирай строкой.
  Сгруппированы по направлениям (порядок = позиция на орбите):
  фронт (Vue, React, TypeScript) → инфра (Docker, Linux) → AI (Claude).
*/
export const skills: { icon: IconType; label: string; color: string }[] = [
  { icon: SiVuedotjs, label: 'Vue', color: '#42B883' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiLinux, label: 'Linux', color: '#FCC624' },
  { icon: SiClaude, label: 'Claude', color: '#D97757' },
]
