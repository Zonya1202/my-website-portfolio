import { motion } from 'framer-motion'
import { aboutSection, aboutCards } from '@/data'
import { AboutCard } from './AboutCard'

/** Секция «Обо мне»: заголовок + карточки-смыслы (опыт / рост / как работаю / чего хочу). */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold text-fg sm:text-4xl">{aboutSection.title}</h2>
        <p className="mt-3 text-muted">{aboutSection.subtitle}</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {aboutCards.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <AboutCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
