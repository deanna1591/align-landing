'use client'

import { motion } from 'framer-motion'

// Floating task chips data — sage Align style, not Structured's chaotic icons
const floaters = [
  {
    type: 'task',
    icon: '✓',
    text: 'call mom about Sunday',
    sub: 'brain dump',
    initialX: -340,
    initialY: -160,
    delay: 0,
    floatDuration: 7,
  },
  {
    type: 'streak',
    icon: '🔥',
    text: '12 day streak',
    sub: 'thursday off · forgiven',
    initialX: 280,
    initialY: -200,
    delay: 1.2,
    floatDuration: 8,
  },
  {
    type: 'note',
    icon: '◐',
    text: 'try ramen place on Mill',
    sub: 'today, 9:14 am',
    initialX: -360,
    initialY: 40,
    delay: 2.4,
    floatDuration: 9,
  },
  {
    type: 'task',
    icon: '✓',
    text: 'Draft Q3 plan',
    sub: 'today · in motion',
    initialX: 300,
    initialY: 60,
    delay: 0.6,
    floatDuration: 8.5,
  },
  {
    type: 'note',
    icon: '◐',
    text: 'renew library card',
    sub: 'yesterday',
    initialX: -320,
    initialY: 220,
    delay: 3.0,
    floatDuration: 7.5,
  },
  {
    type: 'event',
    icon: '◑',
    text: 'Pilates with Mia',
    sub: '11:00 am',
    initialX: 320,
    initialY: 240,
    delay: 1.8,
    floatDuration: 9.5,
  },
]

const colorMap: Record<string, { bg: string; iconBg: string; iconColor: string; ring: string }> = {
  task: {
    bg: 'bg-white',
    iconBg: 'bg-sage',
    iconColor: 'text-white',
    ring: 'ring-1 ring-sage/20',
  },
  streak: {
    bg: 'bg-cream',
    iconBg: 'bg-warm/20',
    iconColor: 'text-warm',
    ring: 'ring-1 ring-warm/20',
  },
  note: {
    bg: 'bg-white',
    iconBg: 'bg-sage-light/40',
    iconColor: 'text-sage-deep',
    ring: 'ring-1 ring-hairline',
  },
  event: {
    bg: 'bg-white',
    iconBg: 'bg-sage-tint',
    iconColor: 'text-sage-deep',
    ring: 'ring-1 ring-sage/20',
  },
}

function FloatingChip({
  floater,
  index,
}: {
  floater: typeof floaters[0]
  index: number
}) {
  const colors = colorMap[floater.type]

  return (
    <motion.div
      className="absolute hidden md:block"
      style={{ top: '50%', left: '50%' }}
      initial={{
        opacity: 0,
        x: floater.initialX,
        y: floater.initialY,
        scale: 0.92,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 0.8],
        x: [
          floater.initialX,
          floater.initialX + 12,
          floater.initialX - 6,
          floater.initialX + 8,
          floater.initialX,
        ],
        y: [
          floater.initialY,
          floater.initialY - 14,
          floater.initialY + 8,
          floater.initialY - 6,
          floater.initialY,
        ],
        scale: [0.92, 1, 1, 1, 0.96],
      }}
      transition={{
        opacity: { duration: floater.floatDuration, delay: floater.delay, ease: 'easeInOut', repeat: Infinity },
        x: { duration: floater.floatDuration, delay: floater.delay, ease: 'easeInOut', repeat: Infinity },
        y: { duration: floater.floatDuration, delay: floater.delay, ease: 'easeInOut', repeat: Infinity },
        scale: { duration: floater.floatDuration, delay: floater.delay, ease: 'easeInOut', repeat: Infinity },
      }}
    >
      <div
        className={`${colors.bg} ${colors.ring} rounded-2xl shadow-[0_8px_28px_rgba(91, 62, 142,0.10)] px-4 py-3 flex items-center gap-3 min-w-[200px]`}
      >
        <div
          className={`w-8 h-8 rounded-full ${colors.iconBg} flex items-center justify-center text-sm ${colors.iconColor} shrink-0`}
        >
          {floater.icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink truncate">{floater.text}</p>
          <p className="text-[11px] text-soft italic mt-0.5 truncate">{floater.sub}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Mobile compact version — fewer floaters, positioned differently
const mobileFloaters = [
  { icon: '✓', text: 'call mom', tone: 'sage', pos: 'top-8 left-4', delay: 0 },
  { icon: '🔥', text: '12 day streak', tone: 'warm', pos: 'top-20 right-4', delay: 1.2 },
  { icon: '◐', text: 'ramen on Mill', tone: 'sage', pos: 'bottom-32 left-2', delay: 2.4 },
  { icon: '◑', text: 'Pilates · 11am', tone: 'sage', pos: 'bottom-12 right-2', delay: 1.6 },
]

function MobileFloater({
  floater,
  index,
}: {
  floater: typeof mobileFloaters[0]
  index: number
}) {
  const toneClass = floater.tone === 'warm' ? 'bg-cream ring-warm/20' : 'bg-white ring-hairline'
  const iconBg = floater.tone === 'warm' ? 'bg-warm/20 text-warm' : 'bg-sage text-white'

  return (
    <motion.div
      className={`absolute ${floater.pos} md:hidden z-10`}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{
        opacity: [0, 1, 1, 0.85],
        y: [10, -4, 4, 0],
        scale: [0.9, 1, 1, 0.95],
      }}
      transition={{
        duration: 6,
        delay: floater.delay,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      <div className={`${toneClass} ring-1 rounded-xl shadow-[0_6px_20px_rgba(91, 62, 142,0.10)] px-3 py-2 flex items-center gap-2`}>
        <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center text-xs shrink-0`}>
          {floater.icon}
        </div>
        <p className="text-xs font-medium text-ink whitespace-nowrap">{floater.text}</p>
      </div>
    </motion.div>
  )
}

export default function AnimatedShowcase() {
  return (
    <section className="relative py-24 md:py-36 bg-sage-tint/40 overflow-hidden">
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255, 95, 176, 0.18), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 mb-12 md:mb-20 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-muted font-semibold mb-5">
          watch it work
        </p>
        <h2 className="h-display-tight text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.95]">
          One quiet planner.
          <br />
          <em className="italic text-sage">A whole noisy life.</em>
        </h2>
        <p className="text-base md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mt-8">
          Tasks captured. Streaks forgiven. Calendar attached.
          <br className="hidden md:block" />
          Everything floating gently to the right place.
        </p>
      </div>

      {/* Animation container */}
      <div className="relative max-w-5xl mx-auto h-[640px] md:h-[720px] flex items-center justify-center">
        {/* Floating chips — desktop only positioning */}
        {floaters.map((f, i) => (
          <FloatingChip key={`d-${i}`} floater={f} index={i} />
        ))}

        {/* Mobile floaters */}
        {mobileFloaters.map((f, i) => (
          <MobileFloater key={`m-${i}`} floater={f} index={i} />
        ))}

        {/* Central iPhone */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          >
            <img
              src="/iphone-full-week.svg"
              alt="Align week view on iPhone"
              className="w-[260px] md:w-[320px] h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
