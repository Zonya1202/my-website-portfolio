import { FiArrowRight } from 'react-icons/fi'
import type { AboutCard as AboutCardData } from '@/data'

/*
  Одна карточка секции «Обо мне»: иконка + заголовок + текст и опциональная ссылка.
  Пропсы = форма AboutCard, секция About маппит массив.
*/
export function AboutCard({ icon: Icon, title, text, link }: AboutCardData) {
  // Якорь на этой же странице (#...) открываем в текущей вкладке, внешнюю ссылку — в новой.
  const isAnchor = link?.url.startsWith('#')

  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-8 text-center transition-all hover:-translate-y-1 hover:border-accent/40">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent">
        <Icon size={26} aria-hidden="true" />
      </span>

      <h3 className="text-lg font-bold text-fg">{title}</h3>
      <p className="text-sm text-muted">{text}</p>

      {/* mt-auto — прижать ссылку к низу, чтобы у карточек разной высоты она была на одной линии */}
      {link && (
        <a
          href={link.url}
          target={isAnchor ? undefined : '_blank'}
          rel={isAnchor ? undefined : 'noreferrer'}
          className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent transition-opacity hover:opacity-80"
        >
          {link.label} <FiArrowRight size={15} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
