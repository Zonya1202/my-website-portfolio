import { footer } from '@/data'
import { Logo } from '@/components/ui/Logo'

/** Подвал сайта: лого сверху, копирайт и кнопка «наверх» снизу. Соцсети — в секции контактов. */
export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10">
      <div className="border-t border-border pt-8">
        <div className="flex justify-center sm:justify-start">
          <Logo className="text-lg" />
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
