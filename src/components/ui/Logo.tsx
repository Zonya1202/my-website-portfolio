import { profile } from '../../data'

/**
 * Текстовый логотип сайта `</> zonya`, ведёт на верх страницы.
 * Используется в шапке (Navbar) и подвале (Footer) — размер задаётся через className.
 */
export function Logo({ className = 'text-xl' }: { className?: string }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-1 font-bold text-fg ${className}`}
    >
      <span className="text-accent">&lt;/&gt;</span>
      {profile.logo}
    </a>
  )
}
