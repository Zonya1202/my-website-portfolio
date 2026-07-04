import { profile, footer } from '../../data'
import { SocialLinks } from '../ui/SocialLinks'

/** Подвал сайта: лого + таглайн слева, соц-иконки справа, копирайт снизу. */
export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10">
      <div className="border-t border-border pt-8">
        {/* Верхний ряд: лого/таглайн + соцсети (переиспользуем SocialLinks) */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <a
              href="#home"
              className="flex items-center gap-1 text-lg font-bold text-fg"
            >
              <span className="text-accent">&lt;/&gt;</span>
              {profile.logo}
            </a>
            <p className="max-w-xs text-sm text-muted">{footer.tagline}</p>
          </div>
          <SocialLinks />
        </div>

        {/* Нижний ряд: копирайт + «наверх» */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <span>{footer.copyright}</span>
          <a href="#home" className="transition-colors hover:text-accent">
            Наверх ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
