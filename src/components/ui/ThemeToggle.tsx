import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/theme'

/** Кнопка переключения светлой/тёмной темы. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-accent transition-colors hover:bg-accent-soft"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
