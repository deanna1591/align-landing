'use client'

import { useRef } from 'react'

export default function ScreenShowcase() {
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
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted font-semibold mb-5">
              every surface
            </p>
            <h2 className="h-display-tight text-5xl md:text-6xl lg:text-7xl text-ink">
              Different views.
              <br />
              <em className="italic text-sage">Same calm.</em>
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
        {/* CARD 1: Today's Three — card UI on cream, no phone */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-cream snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            today&apos;s three
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            Three things.
            <br />
            <em className="italic text-sage">That&apos;s the day.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Pick three. Not 47. The rest can wait.
          </p>
          <div className="mt-auto bg-white rounded-2xl p-5 shadow-sm">
            <div className="space-y-3">
              <div className="border-b border-hairline pb-3">
                <p className="font-serif text-sm text-soft mb-0.5">01</p>
                <p className="text-sm font-medium text-ink">Reply to Jamie&apos;s email</p>
                <p className="text-xs text-soft">10:30 am</p>
              </div>
              <div className="border-b border-hairline pb-3">
                <p className="font-serif text-sm text-soft mb-0.5">02</p>
                <p className="text-sm font-medium text-ink">Draft Q3 plan</p>
              </div>
              <div>
                <p className="font-serif text-sm text-soft mb-0.5">03</p>
                <p className="text-sm font-medium text-ink">Call dentist about Friday</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Week view — full iPhone */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-sage-tint snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            week at a glance
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            Your whole week.
            <br />
            <em className="italic text-sage">One screen.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Seven columns. Monday to Sunday. Drag, drop, breathe.
          </p>
          <div className="mt-auto flex justify-center pt-2">
            <img
              src="/iphone-full-week.svg"
              alt=""
              className="w-48 h-auto"
            />
          </div>
        </div>

        {/* CARD 3: Brain dump — card UI with floating chips */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-white border border-hairline snap-start p-8 md:p-10 flex flex-col relative overflow-hidden">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            brain dump
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            Catch everything.
            <br />
            <em className="italic text-sage">Sort later.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            A drawer for whatever your brain throws at you.
          </p>
          <div className="mt-auto space-y-2">
            <div className="bg-sage-tint/60 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-sage shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink">call mom about Sunday</p>
                <p className="text-[11px] text-soft italic">2 min ago</p>
              </div>
            </div>
            <div className="bg-cream/80 rounded-xl px-4 py-3 flex items-center gap-3 ml-4">
              <div className="w-2 h-2 rounded-full bg-warm shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink">try ramen on Mill</p>
                <p className="text-[11px] text-soft italic">today, 9:14 am</p>
              </div>
            </div>
            <div className="bg-sage-tint/40 rounded-xl px-4 py-3 flex items-center gap-3 ml-2">
              <div className="w-2 h-2 rounded-full bg-sage shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink">renew library card</p>
                <p className="text-[11px] text-soft italic">yesterday</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: Focus — dark mode big stat */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-ink text-white snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-white/50 font-semibold mb-3">
            focus lane
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-white mb-2 leading-[1.05]">
            One task.
            <br />
            <em className="italic text-sage-light">Everything dimmed.</em>
          </h3>
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            Deep work without the planner judging.
          </p>
          <div className="mt-auto flex flex-col items-center pt-4">
            <p className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-semibold mb-2">
              focusing on
            </p>
            <p className="font-serif text-2xl mb-8">Draft Q3 plan</p>
            <div className="relative w-32 h-32 mb-4">
              <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
                <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#FF5FB0"
                  strokeWidth="3"
                  strokeDasharray="377"
                  strokeDashoffset="140"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-serif text-3xl text-white">17:32</p>
                <p className="text-[9px] tracking-widest uppercase text-white/40 font-semibold">remaining</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 5: Streaks — big stat, no device */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-cream snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            momentum
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            Streaks that
            <br />
            <em className="italic text-warm">forgive.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Miss a day? No reset to zero. No guilt trip.
          </p>
          <div className="mt-auto bg-white rounded-2xl p-8 text-center">
            <p className="font-serif text-7xl md:text-8xl text-warm font-medium leading-none">12</p>
            <p className="text-[10px] tracking-widest uppercase text-soft font-semibold mt-2">days in a row</p>
            <div className="flex justify-center gap-2 mt-5">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  {i === 3 ? (
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-sage border-dashed" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-sage" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-soft italic mt-3">thursday off · streak survived</p>
          </div>
        </div>

        {/* CARD 6: Calendar — side-by-side google + align */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-sage-tint snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            calendar synced
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            Google plays nice.
            <br />
            <em className="italic text-sage">Read-only.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Your real schedule lives next to your tasks.
          </p>
          <div className="mt-auto bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-2.5 py-1 rounded-full bg-sage-tint flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-sage" />
                <p className="text-[10px] text-sage-deep font-medium">Google synced</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3FB8DE] mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-ink">Team standup</p>
                  <p className="text-xs text-soft">9:00 am · from Google</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3FB8DE] mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-ink">Design review</p>
                  <p className="text-xs text-soft">11:00 am · from Google</p>
                </div>
              </div>
              <div className="border-t border-hairline pt-3 mt-3">
                <p className="text-[10px] tracking-widest uppercase text-soft font-semibold mb-2">your tasks</p>
                <div className="flex items-start gap-2.5">
                  <div className="w-3 h-3 rounded border border-soft mt-0.5 shrink-0" />
                  <p className="text-sm text-ink">Draft Q3 plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 7: Closure — quiet card with bench */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-white border border-hairline snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            daily closure
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            End the day
            <br />
            <em className="italic text-sage">kindly.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            A quieter day still counts. Closure without guilt.
          </p>
          <div className="mt-auto bg-sage-tint/40 rounded-2xl p-8 text-center">
            <svg viewBox="0 0 60 40" className="w-12 h-8 mx-auto mb-4">
              <path d="M2 32 L2 24 Q2 20 6 20 L40 20 Q44 20 44 24 L44 32" stroke="#FF5FB0" strokeWidth="1.5" fill="none"/>
              <circle cx="22" cy="24" r="3" fill="#9B5CFF"/>
              <path d="M12 24 L40 24" stroke="#FF5FB0" strokeWidth="1" fill="none"/>
            </svg>
            <p className="font-serif text-xl md:text-2xl text-ink mb-1">A quieter day.</p>
            <p className="font-serif italic text-xl md:text-2xl text-sage">That counts too.</p>
            <div className="flex justify-center gap-8 mt-6">
              <div>
                <p className="font-serif text-2xl text-ink">2</p>
                <p className="text-[9px] tracking-widest uppercase text-soft font-semibold">done</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-warm">12</p>
                <p className="text-[9px] tracking-widest uppercase text-soft font-semibold">streak</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-ink">3</p>
                <p className="text-[9px] tracking-widest uppercase text-soft font-semibold">moved</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 8: Lists — categorized */}
        <div className="flex-shrink-0 w-[85vw] md:w-[520px] rounded-3xl bg-cream snap-start p-8 md:p-10 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-3">
            lists
          </p>
          <h3 className="h-display text-3xl md:text-4xl text-ink mb-2 leading-[1.05]">
            Categories,
            <br />
            <em className="italic text-sage">not days.</em>
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Groceries, ideas, things to come back to.
          </p>
          <div className="mt-auto bg-white rounded-2xl p-5 shadow-sm">
            <div className="mb-4">
              <p className="text-[10px] tracking-widest uppercase text-ink font-bold mb-2">🛒 GROCERIES</p>
              <div className="space-y-1.5 ml-1">
                <p className="text-sm text-ink">paper towels</p>
                <p className="text-sm text-ink">olive oil</p>
                <p className="text-sm text-soft line-through">eggs</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-ink font-bold mb-2">⚡ NEED FOCUS</p>
              <div className="space-y-1.5 ml-1">
                <p className="text-sm text-ink">Q3 strategy doc</p>
                <p className="text-sm text-ink">prep board deck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
