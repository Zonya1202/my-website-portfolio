import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { profile, contactIcon as ContactIcon, contactsSection } from '@/data'
import { SocialLinks } from '@/components/ui/SocialLinks'

/** Секция «Контакты»: призыв + кнопки Telegram/Email + ряд соц-иконок. */
export function Contacts() {
  return (
    <section id="contacts" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">
            {contactsSection.title}
          </h2>
          <p className="text-muted">{contactsSection.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.contactUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-white transition-opacity hover:opacity-90"
          >
            <ContactIcon size={18} /> Telegram
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-accent px-5 py-3 text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <FiMail size={18} /> Написать на почту
          </a>
        </div>

        <SocialLinks />
      </motion.div>
    </section>
  )
}
