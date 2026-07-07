/*
  Единая точка импорта всех данных сайта.
  В компонентах пишем: import { profile, navLinks, socials } from '../../data'
  Файлы внутри можно двигать/переименовывать — импорты в компонентах не ломаются.
*/
export { profile, contactIcon } from './profile'
export { navLinks } from './navigation'
export { socials } from './socials'
export { skills } from './skills'
export { aboutSection, aboutCards } from './about'
export type { AboutCard } from './about'
export { experience, experienceSection } from './experience'
export type { ExperienceItem } from './experience'
export { projects, projectsSection } from './projects'
export type { ProjectItem } from './projects'
export { skillGroups, skillsSection } from './skillGroups'
export type { Skill, SkillGroup } from './skillGroups'
export { contactsSection } from './contacts'
export { footer } from './footer'
