'use client'

import { useRef } from 'react'

const features = [
  {
    label: 'visual planning',
    title: 'Three things. Not 47.',
    desc: 'Pick what actually matters today. Let the rest be ambient noise.',
    image: '/card-three.svg',
    bg: 'bg-sage-tint',
  },
  {
    label: 'capture',
    title: 'Wait, what was I —',
    desc: 'A drawer that holds the thoughts until you\'re ready.',
    image: '/card-braindump.svg',
    bg: 'bg-cream',
  },
  {
    label: 'momentum',
    title: 'Streaks that forgive.',
    desc: 'Miss a day? No reset to zero. No guilt trip.',
    image: '/card-streaks.svg',
    bg: 'bg-white border border-hairline',
  },
  {
    label: 'sync',
    title: 'Your calendar, attached.',
    desc: 'Google Calendar shows up beside your tasks. Read-only.',
    image: '/card-calendar.svg',
    bg: 'bg-sage-tint',
  },
  {
    label: 'closure',
    title: 'A quieter day. That counts too.',
    desc: 'Gentle endings, not productivity guilt.',
    image: '/card-closure.svg',
    bg: 'bg-cream',
  },
  {
    label: 'someday',
    title: 'Not now isn\'t never.',
    desc: 'A place for things you might come back to.',
    image: '/card-someday.svg',
    bg: 'bg-white border border-hairline',
  },
]

export default function FeatureGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.85
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="features" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted font-semibold mb-5">
              explore features
            </p>
            <h2 className="h-display-tight text-5xl md:text-6xl lg:text-7xl text-ink">
              Quietly designed
              <br />
              for <em className="italic text-sage">chaotic</em> brains.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-hairline flex items-center justify-center hover:bg-sage-tint transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center hover:bg-ink/90 transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 lg:px-10 pb-8"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[85vw] md:w-[480px] rounded-3xl ${f.bg} snap-start p-8 md:p-10 flex flex-col`}
          >
            <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
              {f.label}
            </p>
            <h3 className="h-display text-3xl md:text-4xl text-ink mb-3 leading-[1.05]">
              {f.title}
            </h3>
            <p className="text-sm md:text-base text-muted leading-relaxed mb-8 max-w-sm">
              {f.desc}
            </p>
            <div className="mt-auto flex justify-center">
              <img src={f.image} alt="" className="w-full max-w-sm h-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
