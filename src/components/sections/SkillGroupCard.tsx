import type { SkillGroup } from '@/data'

/*
  Одна карточка направления в секции «Скилы»: иконка + название группы
  и сетка скилов (иконка + подпись). Пропсы = форма SkillGroup, секция маппит массив.
*/
export function SkillGroupCard({ icon: Icon, title, skills }: SkillGroup) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
          <Icon size={22} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-fg">{title}</h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {skills.map(({ icon: SkillIcon, label, color }) => (
          <li
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-fg"
          >
            <SkillIcon size={16} style={{ color }} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
