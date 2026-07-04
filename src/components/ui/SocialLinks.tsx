import { socials } from '@/data'

/** Ряд соц-иконок под именем. */
export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-fg transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
