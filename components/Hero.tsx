'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const rotatingWords = [
  'weekly planner',
  'brain dump',
  'focus timer',
  'calendar',
  'habit forgiver',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Sage glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168, 197, 171, 0.30), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="px-4 py-1.5 rounded-full border border-hairline bg-white/60 backdrop-blur text-xs text-muted tracking-wide">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage mr-2 align-middle" />
            in early access · for ADHD brains
          </div>
        </div>

        {/* Headline */}
        <h1 className="h-display-tight text-[14vw] md:text-[10vw] lg:text-[9rem] text-ink text-center mb-2">
          your all-in-one
        </h1>

        <div className="flex justify-center mb-10 md:mb-12 h-[13vw] md:h-[9vw] lg:h-[8rem] items-center">
          <span
            key={currentIndex}
            className="h-display-tight italic text-[13vw] md:text-[9vw] lg:text-[8rem] text-sage"
            style={{ animation: 'word-cycle 2.4s ease-in-out' }}
          >
            {rotatingWords[currentIndex]}
          </span>
        </div>

        <p className="text-center text-base md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
          Plan like you&apos;ll <em className="italic">forget.</em> Because you{' '}
          <em className="italic">will.</em>
          <br className="hidden md:block" />
          Built for the founders, parents, and chaotic brilliants whose to-do list is a graveyard of good intentions.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          <a href="#early-access" className="px-7 py-3.5 bg-ink hover:bg-ink/90 text-white rounded-full text-sm font-medium transition-colors">
            Start planning, sort of →
          </a>
          <a href="#how-it-works" className="px-7 py-3.5 bg-white hover:bg-sage-tint border border-hairline text-ink rounded-full text-sm font-medium transition-colors">
            Take a peek
          </a>
        </div>

        {/* ANIMATED COMPOSITION */}
        <HeroAnimation />
      </div>
    </section>
  )
}

function HeroAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-5xl h-[420px] md:h-[560px] mt-8">
      {/* Soft background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124, 164, 129, 0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* DESKTOP — week view, anchored center, gently floating */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [-0.4, 0.4, -0.4] }}
          transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
          className="relative"
          style={{
            width: 'min(100%, 720px)',
            filter: 'drop-shadow(0 30px 60px rgba(27, 24, 19, 0.12))',
          }}
        >
          <AnimatedWeekView />
        </motion.div>
      </motion.div>

      {/* PHONE — floats over the right side of the desktop */}
      <motion.div
        className="absolute right-[4%] md:right-[6%] bottom-[2%] md:bottom-[-4%] z-30 hidden sm:block"
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [3.5, 2.5, 3.5] }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        >
          <img
            src="/iphone-full-week.svg"
            alt=""
            className="w-[140px] md:w-[200px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Floating chip 1: Brain dump — slides in from left, top-left of composition */}
      <motion.div
        className="absolute top-[6%] left-[2%] md:left-[4%] z-40"
        initial={{ opacity: 0, x: -30, y: -10 }}
        animate={{
          opacity: [0, 1, 1, 1, 0.85],
          x: [-30, 0, 8, -4, 0],
          y: [-10, 0, -6, 4, 0],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <div className="bg-white ring-1 ring-hairline rounded-2xl shadow-[0_8px_28px_rgba(27,24,19,0.10)] px-4 py-3 flex items-center gap-3 min-w-[200px]">
          <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white text-sm shrink-0">
            ◐
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-ink">call mom about Sunday</p>
            <p className="text-[11px] text-soft italic mt-0.5">brain dump · just now</p>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 2: Streak — top right, pulses */}
      <motion.div
        className="absolute top-[2%] right-[20%] md:right-[24%] z-40 hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 1, 1, 1, 0.9],
          scale: [0.9, 1, 1.04, 1, 0.96],
          y: [0, -8, 4, -4, 0],
        }}
        transition={{
          duration: 6.5,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 1.2,
        }}
      >
        <div className="bg-cream ring-1 ring-warm/20 rounded-2xl shadow-[0_8px_28px_rgba(27,24,19,0.10)] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-warm/20 flex items-center justify-center text-warm text-sm shrink-0">
            🔥
          </div>
          <div>
            <p className="text-sm font-medium text-ink">12 day streak</p>
            <p className="text-[11px] text-soft italic mt-0.5">thursday off · forgiven</p>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 3: Calendar sync — middle right */}
      <motion.div
        className="absolute top-[40%] right-[1%] md:right-[3%] z-40 hidden md:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: [0, 1, 1, 1, 0.85],
          x: [30, 0, -6, 4, 0],
          y: [0, -6, 4, -2, 0],
        }}
        transition={{
          duration: 9,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 2.0,
        }}
      >
        <div className="bg-white ring-1 ring-sage/20 rounded-2xl shadow-[0_8px_28px_rgba(27,24,19,0.10)] px-4 py-3 flex items-center gap-3 max-w-[230px]">
          <div className="w-8 h-8 rounded-full bg-sage-tint flex items-center justify-center shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#5C7A99]" />
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Team standup</p>
            <p className="text-[11px] text-soft italic mt-0.5">9:00 am · from Google</p>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 4: Task checkoff — bottom left, with animated check */}
      <motion.div
        className="absolute bottom-[8%] left-[3%] md:left-[6%] z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 1, 0.85],
          y: [20, 0, -4, 6, 0],
          x: [0, 6, -3, 4, 0],
        }}
        transition={{
          duration: 7.5,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 2.8,
        }}
      >
        <div className="bg-white ring-1 ring-sage/20 rounded-2xl shadow-[0_8px_28px_rgba(27,24,19,0.10)] px-4 py-3 flex items-center gap-3 min-w-[200px]">
          <motion.div
            className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white text-sm shrink-0"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.6, delay: 3.4, repeat: Infinity, repeatDelay: 6.9 }}
          >
            ✓
          </motion.div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-soft line-through">Submit invoice</p>
            <p className="text-[11px] text-sage-deep italic mt-0.5">done · streak +1</p>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 5: Wednesday highlight — pulses near phone, middle */}
      <motion.div
        className="absolute bottom-[28%] right-[28%] md:right-[34%] z-40 hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 0.95, 0.95, 0.95, 0.8],
          scale: [0.9, 1, 1, 1, 0.97],
          y: [0, 8, -4, 4, 0],
        }}
        transition={{
          duration: 8.5,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 3.5,
        }}
      >
        <div className="bg-sage-tint ring-1 ring-sage/30 rounded-full shadow-[0_8px_28px_rgba(27,24,19,0.08)] px-4 py-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-sage" />
          <p className="text-xs font-medium text-sage-deep">today is Wednesday</p>
        </div>
      </motion.div>
    </div>
  )
}

// Animated week view that "fills in" — tasks appear over time
function AnimatedWeekView() {
  return (
    <svg viewBox="0 0 720 480" className="w-full h-auto">
      {/* Card background */}
      <rect width="720" height="480" rx="20" fill="#FFFFFF" />

      {/* Top bar */}
      <g transform="translate(28, 36)">
        <circle cx="6" cy="6" r="5" fill="none" stroke="#7CA481" strokeWidth="1.2" />
        <path d="M3 6 L5 8 L9 4" stroke="#7CA481" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="18" y="10" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5448" fontWeight="500">3/5</text>
        <rect x="48" y="5" width="50" height="3" rx="1.5" fill="#F2F2F2" />
        <motion.rect
          x="48" y="5" height="3" rx="1.5" fill="#7CA481"
          animate={{ width: [20, 30, 30, 30, 20] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
      </g>

      {/* Align wordmark */}
      <g transform="translate(28, 78)">
        <text fontFamily="Fraunces, serif" fontStyle="italic" fontSize="24" fontWeight="500" fill="#1B1813">align</text>
        <text x="86" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="9" fill="#5C5448" letterSpacing="0.18em" fontWeight="600">WED, MAY 13, 2026</text>
      </g>

      {/* Streak indicator with pulse */}
      <motion.g
        transform="translate(640, 78)"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        style={{ transformOrigin: '660px 78px' }}
      >
        <text fontFamily="Fraunces, serif" fontSize="18" fill="#C9824A" fontWeight="500">🔥 12</text>
      </motion.g>

      <line x1="28" y1="108" x2="692" y2="108" stroke="#F2F2F2" strokeWidth="0.5" />

      {/* Monday */}
      <g transform="translate(28, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fill="#1B1813">Monday</text>
        <text x="68" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F" letterSpacing="0.18em" fontWeight="600">MAY 11</text>
        <line x1="0" y1="10" x2="88" y2="10" stroke="#EAEAEA" strokeWidth="0.5" />
        <circle cx="4" cy="28" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="32" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Team standup</text>
        <text x="12" y="44" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F">9:00 am</text>
        {/* Animated checkoff */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 1] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.3, 0.4, 0.95, 1] }}
        >
          <rect x="0" y="60" width="10" height="10" rx="2" fill="#7CA481" />
          <path d="M2 65 L4.5 67.5 L8 63" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
        <motion.text
          x="14" y="69"
          fontFamily="Inter Tight, sans-serif" fontSize="10"
          animate={{ fill: ['#1B1813', '#1B1813', '#9A917F', '#9A917F', '#9A917F'] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.3, 0.4, 0.95, 1] }}
          style={{ textDecoration: 'line-through' }}
        >
          Submit invoice
        </motion.text>
      </g>

      {/* Tuesday */}
      <g transform="translate(132, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fill="#1B1813">Tuesday</text>
        <text x="68" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F" letterSpacing="0.18em" fontWeight="600">MAY 12</text>
        <line x1="0" y1="10" x2="88" y2="10" stroke="#EAEAEA" strokeWidth="0.5" />
        <circle cx="4" cy="28" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="32" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Coffee w/ Sam</text>
        <text x="12" y="44" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F">8:30 am</text>
        <circle cx="4" cy="64" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="68" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Therapy</text>
      </g>

      {/* Wednesday - highlighted with sweep animation */}
      <motion.g
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 1, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1] }}
      >
        <rect x="232" y="120" width="104" height="280" rx="8" fill="#F5F8F4" />
      </motion.g>
      <g transform="translate(240, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fontWeight="500" fill="#7CA481">Wednesday</text>
        <text x="76" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#7CA481" letterSpacing="0.18em" fontWeight="600">MAY 13</text>
        <line x1="0" y1="10" x2="88" y2="10" stroke="#7CA481" strokeWidth="0.8" />
        <circle cx="4" cy="28" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="32" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Team standup</text>
        <text x="12" y="44" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F">9:00 am</text>

        {/* Tasks that appear sequentially */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 1] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.15, 0.5, 0.95, 1] }}
        >
          <rect x="0" y="60" width="10" height="10" rx="2" fill="none" stroke="#9A917F" strokeWidth="1" />
          <text x="14" y="69" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Reply to Jamie</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 1] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.4, 0.95, 1] }}
        >
          <rect x="0" y="80" width="10" height="10" rx="2" fill="none" stroke="#9A917F" strokeWidth="1" />
          <text x="14" y="89" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Draft Q3 plan</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1, 1] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.55, 0.7, 1] }}
        >
          <rect x="0" y="100" width="10" height="10" rx="2" fill="none" stroke="#9A917F" strokeWidth="1" />
          <text x="14" y="109" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Call dentist</text>
        </motion.g>
      </g>

      {/* Thursday */}
      <g transform="translate(348, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fill="#1B1813">Thursday</text>
        <text x="74" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F" letterSpacing="0.18em" fontWeight="600">MAY 14</text>
        <line x1="0" y1="10" x2="88" y2="10" stroke="#EAEAEA" strokeWidth="0.5" />
        <circle cx="4" cy="28" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="32" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Pilates · Mia</text>
        <text x="12" y="44" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F">9:00 am</text>
      </g>

      {/* Friday */}
      <g transform="translate(452, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fill="#1B1813">Friday</text>
        <text x="58" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F" letterSpacing="0.18em" fontWeight="600">MAY 15</text>
        <line x1="0" y1="10" x2="88" y2="10" stroke="#EAEAEA" strokeWidth="0.5" />
        <circle cx="4" cy="28" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="32" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Dentist</text>
        <text x="12" y="44" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F">10:30 am</text>
      </g>

      {/* Saturday */}
      <g transform="translate(556, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fill="#1B1813">Saturday</text>
        <text x="76" y="-2" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F" letterSpacing="0.18em" fontWeight="600">MAY 16</text>
        <line x1="0" y1="10" x2="88" y2="10" stroke="#EAEAEA" strokeWidth="0.5" />
        <circle cx="4" cy="28" r="2" fill="#9A917F" opacity="0.5" />
        <text x="12" y="32" fontFamily="Inter Tight, sans-serif" fontSize="10" fill="#1B1813">Farmers market</text>
        <text x="12" y="44" fontFamily="Inter Tight, sans-serif" fontSize="8" fill="#9A917F">8:00 am</text>
      </g>

      {/* Sunday */}
      <g transform="translate(660, 140)">
        <text fontFamily="Fraunces, serif" fontSize="16" fill="#1B1813">Sun</text>
        <line x1="0" y1="10" x2="48" y2="10" stroke="#EAEAEA" strokeWidth="0.5" />
        <text x="0" y="44" fontFamily="Inter Tight, sans-serif" fontSize="9" fill="#9A917F" fontStyle="italic">a quiet one.</text>
      </g>
    </svg>
  )
}
