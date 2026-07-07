import { motion } from 'framer-motion'
import { projects, projectsSection } from '@/data'
import { ProjectCard } from './ProjectCard'

/** Секция «Проекты»: заголовок + сетка карточек pet-проектов. */
export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold text-fg sm:text-4xl">
          {projectsSection.title}
        </h2>
        <p className="mt-3 text-muted">{projectsSection.subtitle}</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
