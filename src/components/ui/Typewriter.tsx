import { useEffect, useState } from 'react'

interface TypewriterProps {
  /** Фразы, которые печатаются по очереди в одном месте (по кругу). */
  phrases: string[]
  typingSpeed?: number // мс на символ при печати
  deletingSpeed?: number // мс на символ при стирании
  pauseMs?: number // пауза после напечатанной фразы
}

/**
 * Печатает фразы по очереди с эффектом набора текста и мигающим курсором:
 * печать → пауза → стирание → следующая фраза → по кругу.
 */
export function Typewriter({
  phrases,
  typingSpeed = 45,
  deletingSpeed = 25,
  pauseMs = 1600,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    // Фраза допечатана — ждём паузу, потом начинаем стирать.
    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    // Фраза стёрта — переходим к следующей.
    if (isDeleting && text === '') {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    // Печатаем или стираем по одному символу.
    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        )
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs])

  return (
    <span>
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  )
}
