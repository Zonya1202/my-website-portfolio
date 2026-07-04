import { footer } from '@/data'
import { Logo } from '@/components/ui/Logo'
import { SocialLinks } from '@/components/ui/SocialLinks'

/** Подвал сайта: лого + таглайн слева, соц-иконки справа, копирайт снизу. */
export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10">
      <div className="border-t border-border pt-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <Logo className="text-lg" />
            <p className="max-w-xs text-sm text-muted">{footer.tagline}</p>
          </div>
          <SocialLinks />
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <span>{footer.copyright}</span>
          {/* Кнопка, не якорь: #home ведёт на Hero ниже навбара, а нужно в самый верх */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-colors hover:text-accent"
          >
            Наверх ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
