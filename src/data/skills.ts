import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiHtml5,
  SiCss,
} from 'react-icons/si'

/** Скилы — иконки по орбите вокруг аватарки. Добавляй/убирай строкой. */
export const skills: { icon: IconType; label: string; color: string }[] = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss, label: 'CSS3', color: '#1572B6' },
]
