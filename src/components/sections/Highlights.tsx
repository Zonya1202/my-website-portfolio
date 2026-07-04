import { motion } from 'framer-motion'
import { highlights, highlightsSection } from '@/data'
import { HighlightCard } from './HighlightCard'

/** Секция под hero: заголовок + сетка из карточек (Фронт / Инфра / AI). */
export function Highlights() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold text-fg sm:text-4xl">
          {highlightsSection.title}
        </h2>
        <p className="mt-3 text-muted">{highlightsSection.subtitle}</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <HighlightCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
