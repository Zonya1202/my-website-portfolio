import { motion } from 'framer-motion'
import { profile, skills } from '../../data'

/*
  Аватарка в круге + иконки скилов по орбите.
  Всё в относительных единицах (% от контейнера), поэтому масштабируется
  на разных экранах без горизонтального скролла. Контейнер меньше на мобилке.
*/
const ORBIT_PERCENT = 42 // радиус орбиты в % от размера контейнера
const ORBIT_SECONDS = 40 // один оборот орбиты

export function Avatar() {
  return (
    <div className="relative grid h-72 w-72 place-items-center sm:h-90 sm:w-90">
      {/* Свечение за аватаркой */}
      <div className="absolute h-3/4 w-3/4 rounded-full bg-accent/30 blur-3xl" />

      {/* Круг с аватаркой */}
      <div className="relative z-10 grid h-3/5 w-3/5 place-items-center overflow-hidden rounded-full bg-avatar-bg p-3">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Вращающаяся орбита с иконками скилов */}
      <motion.div
        className="absolute inset-0 z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: 'linear' }}
      >
        {skills.map(({ icon: Icon, label, color }, i) => {
          const angle = (i / skills.length) * 2 * Math.PI
          const left = 50 + Math.cos(angle) * ORBIT_PERCENT
          const top = 50 + Math.sin(angle) * ORBIT_PERCENT
          return (
            // Внешний div — позиция на орбите (в % контейнера), центрируем через translate.
            <div
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              {/* Внутренний div контр-вращается, чтобы иконка не переворачивалась. */}
              <motion.div
                title={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface shadow-lg sm:h-11 sm:w-11"
                animate={{ rotate: -360 }}
                transition={{
                  duration: ORBIT_SECONDS,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Icon size={22} style={{ color }} />
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
