import { FiCheck, FiExternalLink } from 'react-icons/fi'
import type { ExperienceItem } from '@/data'

/*
  Одна запись опыта: шапка (роль · компания · период), проект со ссылкой,
  чипы стека и список достижений. Пропсы = форма ExperienceItem.
*/
export function ExperienceCard({
  role,
  company,
  period,
  project,
  projectUrl,
  description,
  stack,
  achievements,
}: ExperienceItem) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-bold text-fg">
          {role} · {company}
        </h3>
        <span className="text-sm text-muted">{period}</span>
      </div>

      <p className="mt-4 text-fg">
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-accent transition-opacity hover:opacity-80"
          >
            {project} <FiExternalLink size={15} aria-hidden="true" />
          </a>
        ) : (
          <span className="font-semibold">{project}</span>
        )}{' '}
        <span className="text-muted">— {description}</span>
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-3 py-1.5 text-sm text-fg"
          >
            {tech}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-col gap-3">
        {achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3 text-muted">
            <FiCheck
              size={18}
              className="mt-0.5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
