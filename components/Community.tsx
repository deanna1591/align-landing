'use client'

import { useRef } from 'react'

const testimonials = [
  {
    quote: 'Just downloaded this & set up my week. As someone who struggles with scheduling things, I\'ve looked for a simple, clean app for years.',
    source: 'Early access user',
    platform: 'instagram',
  },
  {
    quote: 'I invested in lifetime because this has saved me at least two hours a week — which adds up to over 100 hours a year.',
    source: 'App Store review',
    platform: 'app-store',
  },
  {
    quote: 'If you\'ve never tried this app, take the plunge. One of the BEST apps for productivity and organization!',
    source: 'Beta tester',
    platform: 'twitter',
  },
  {
    quote: 'Life-changing app. Helped me so much. Can\'t imagine living without it anymore.',
    source: 'App Store review',
    platform: 'app-store',
  },
  {
    quote: 'To anyone finding it hard to keep yourself accountable — try Align. It literally changed the way I spend my working days.',
    source: 'X post',
    platform: 'twitter',
  },
  {
    quote: 'I\'ve tried countless planners. Align really combines it all in the best way and lets you bring quiet into your day.',
    source: 'Beta tester',
    platform: 'app-store',
  },
]

const platformBg: Record<string, string> = {
  instagram: 'from-[#F9D5BB] via-[#E89BC8] to-[#A776E8]',
  'app-store': 'from-[#A8C5AB] via-[#7CA481] to-[#3C5B47]',
  twitter: 'from-[#E8EFE8] via-[#DCEAD9] to-[#A8C5AB]',
}

export default function Community() {
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
    <section id="community" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="h-display-tight text-5xl md:text-6xl lg:text-7xl text-ink">
            Join the brains
            <br />
            that <em className="italic text-sage">finally stuck.</em>
          </h2>
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
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[85vw] md:w-[520px] aspect-[5/3] rounded-3xl snap-start p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br ${platformBg[t.platform]}`}
          >
            <p className="h-display text-xl md:text-2xl text-ink leading-[1.25]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-sm">
                {t.platform === 'instagram' ? '◐' : t.platform === 'twitter' ? '𝕏' : '★'}
              </div>
              <div>
                <p className="text-sm font-medium text-ink">{t.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
