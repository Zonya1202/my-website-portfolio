import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './theme'

/** Стартовая тема: сохранённая → системная → светлая. */
function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage недоступен (приватный режим и т.п.) — падать нельзя, берём системную
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Оборачивает приложение и хранит выбранную тему. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Вешаем/снимаем класс .dark на <html> и запоминаем выбор.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // localStorage недоступен — тема просто не сохранится между сессиями
    }
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
