import { motion } from 'framer-motion'
import { navLinks } from '@/data'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

/** Верхняя стеклянная панель: лого, меню, переключатель темы. */
export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border bg-surface/70 px-5 py-3 backdrop-blur-md"
    >
      <Logo />

      {/* TODO: бургер-меню для мобилки */}
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
