import { motion } from 'framer-motion'
import { profile, navLinks } from '../../data'
import { ThemeToggle } from '../ui/ThemeToggle'

/** Верхняя стеклянная панель: лого, меню, переключатель темы. */
export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border bg-surface/70 px-5 py-3 backdrop-blur-md"
    >
      {/* Лого — текстом, красится под тему */}
      <a
        href="#home"
        className="flex items-center gap-1 text-xl font-bold text-fg"
      >
        <span className="text-accent">&lt;/&gt;</span>
        {profile.logo}
      </a>

      {/* Меню (на мобилке скрыто; бургер добавим, когда появятся секции) */}
      <nav className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />
    </motion.header>
  )
}
