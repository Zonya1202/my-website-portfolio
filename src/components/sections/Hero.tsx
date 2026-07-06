import { motion } from 'framer-motion'
import { FiDownload, FiChevronDown } from 'react-icons/fi'
import { profile, contactIcon as ContactIcon } from '@/data'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { Avatar } from '@/components/ui/Avatar'
import { Typewriter } from '@/components/ui/Typewriter'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

/** Главный экран: слева — весь контент, справа — аватар с орбитой скилов. */
export function Hero() {
  // Имя делим, чтобы подсветить фамилию акцентным цветом.
  const nameParts = profile.name.split(' ')
  const firstName = nameParts.slice(0, -1).join(' ')
  const lastName = nameParts.at(-1)

  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-2 lg:py-20"
    >
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          {profile.available}
        </span>

        <div className="flex flex-col gap-2">
          <p className="text-muted">{profile.greeting}</p>
          <h1 className="text-4xl font-bold leading-tight text-fg sm:text-5xl">
            {firstName} <span className="text-accent">{lastName}</span>
          </h1>
          <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>

        {/* min-h — чтобы блок не прыгал при смене фраз */}
        <p className="min-h-16 max-w-md text-muted">
          <Typewriter phrases={profile.descriptionPhrases} />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-white transition-opacity hover:opacity-90"
          >
            <FiDownload size={16} /> Download CV
          </a>
          <a
            href={profile.contactUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-accent px-5 py-3 text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <ContactIcon size={18} /> Contact me
          </a>
        </div>

        <SocialLinks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <Avatar />
      </motion.div>

      {/* Индикатор скролла — только на десктопе (lg), где у Hero высота во весь экран */}
      <a
        href="#about"
        aria-label="Листать вниз"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent lg:block"
      >
        <FiChevronDown size={28} />
      </a>
    </section>
  )
}
