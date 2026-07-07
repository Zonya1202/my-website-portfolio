import type { IconType } from 'react-icons'
import { FiCode, FiServer, FiCpu, FiCheckCircle } from 'react-icons/fi'
import { TbBrandVscode, TbTicket } from 'react-icons/tb'
import {
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiPinia,
  SiGraphql,
  SiVite,
  SiDocker,
  SiLinux,
  SiNginx,
  SiGit,
  SiGithubactions,
  SiPython,
  SiPostgresql,
  SiClaude,
  SiGrafana,
  SiReact,
  SiFigma,
  SiGithub,
  SiGitlab,
} from 'react-icons/si'

/*
  Полный стек для секции «Скилы», сгруппированный по направлениям.
  Это НЕ орбита в hero (та — избранные иконки в skills.ts), тут развёрнутый список.
  Черновик — правь под себя: добавляй/убирай строкой, меняй порядок групп.
  color — брендовый цвет иконки (виден в светлой и тёмной теме).
*/
export interface Skill {
  icon: IconType
  label: string
  color: string
}

export interface SkillGroup {
  icon: IconType
  title: string
  skills: Skill[]
}

export const skillsSection = {
  title: 'Скилы',
  subtitle: 'Технологии, с которыми работаю.',
}

export const skillGroups: SkillGroup[] = [
  {
    icon: FiCode,
    title: 'Frontend',
    skills: [
      { icon: SiVuedotjs, label: 'Vue 3', color: '#42B883' },
      { icon: SiReact, label: 'React', color: '#61DAFB' },
      { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
      { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
      { icon: SiPinia, label: 'Pinia', color: '#FFD859' },
      { icon: SiGraphql, label: 'GraphQL', color: '#E10098' },
      { icon: SiSass, label: 'Sass', color: '#CC6699' },
      { icon: SiVite, label: 'Vite', color: '#646CFF' },
      { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
      { icon: SiCss, label: 'CSS', color: '#663399' },
      { icon: FiCheckCircle, label: 'Playwright', color: '#2EAD33' },
    ],
  },
  {
    icon: FiServer,
    title: 'Infra / DevOps',
    skills: [
      { icon: SiDocker, label: 'Docker', color: '#2496ED' },
      { icon: SiLinux, label: 'Linux', color: '#FCC624' },
      { icon: SiNginx, label: 'Nginx', color: '#009639' },
      { icon: SiGithubactions, label: 'CI/CD', color: '#2088FF' },
      { icon: SiGit, label: 'Git', color: '#F05032' },
      { icon: SiPostgresql, label: 'SQL', color: '#4169E1' },
      { icon: SiPython, label: 'Python', color: '#3776AB' },
      { icon: SiGrafana, label: 'Grafana', color: '#F46800' },
    ],
  },
  {
    icon: FiCpu,
    title: 'AI / Tools',
    skills: [
      { icon: SiClaude, label: 'Claude', color: '#D97757' },
      { icon: TbBrandVscode, label: 'VS Code', color: '#007ACC' },
      { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
      { icon: TbTicket, label: 'YouTrack', color: '#9333EA' },
      { icon: SiGithub, label: 'GitHub', color: '#6E7681' },
      { icon: SiGitlab, label: 'GitLab', color: '#FC6D26' },
    ],
  },
]
