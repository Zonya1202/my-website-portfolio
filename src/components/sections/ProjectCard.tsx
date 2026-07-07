import { FaGithub } from 'react-icons/fa6'
import type { ProjectItem } from '@/data'

/*
  Одна карточка проекта: название, описание, чипы стека и ссылка на репозиторий.
  Пропсы = форма ProjectItem, секция Projects маппит массив.
*/
export function ProjectCard({ title, description, stack, repoUrl }: ProjectItem) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
      <h3 className="text-lg font-bold text-fg">{title}</h3>
      <p className="text-sm text-muted">{description}</p>

      <ul className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-fg"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent transition-opacity hover:opacity-80"
      >
        <FaGithub size={16} aria-hidden="true" /> Репозиторий
      </a>
    </div>
  )
}
