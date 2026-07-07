import { motion } from 'framer-motion'
import { experience, experienceSection } from '@/data'
import { ExperienceCard } from './ExperienceCard'

/** Секция «Опыт»: заголовок + карточки коммерческих мест работы. */
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold text-fg sm:text-4xl">
          {experienceSection.title}
        </h2>
        <p className="mt-3 text-muted">{experienceSection.subtitle}</p>
      </motion.div>

      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {experience.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ExperienceCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
