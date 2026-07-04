import { FiArrowRight } from 'react-icons/fi'
import type { HighlightItem } from '@/data'

/*
  Одна карточка секции «Что я привношу». Пропсы = форма элемента данных
  (HighlightItem), чтобы не дублировать структуру. Секция Highlights маппит массив.
*/
export function HighlightCard({ icon: Icon, title, text, link }: HighlightItem) {
  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-8 text-center transition-all hover:-translate-y-1 hover:border-accent/40">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent">
        <Icon size={26} />
      </span>

      <h3 className="text-lg font-bold text-fg">{title}</h3>
      <p className="text-sm text-muted">{text}</p>

      {/* mt-auto — прижать ссылку к низу, чтобы у карточек разной высоты она была на одной линии */}
      {link && (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent transition-opacity hover:opacity-80"
        >
          {link.label} <FiArrowRight size={15} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
