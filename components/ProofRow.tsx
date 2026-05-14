'use client'

import { useEffect, useState } from 'react'

export default function ProofRow() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/waitlist-count')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null))
  }, [])

  const stats = [
    {
      number: count !== null ? `${count}+` : '—',
      label: 'on the waitlist',
      icon: '◐',
    },
    {
      number: '3',
      label: 'minutes to set up',
      icon: '◷',
    },
    {
      number: '0',
      label: 'tutorials required',
      icon: '◔',
    },
    {
      number: '∞',
      label: 'days your brain forgets',
      icon: '◯',
    },
    {
      number: '1',
      label: 'screen, not 47 tabs',
      icon: '◑',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-sage-tint/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-xs tracking-[0.25em] uppercase text-muted font-semibold mb-12">
          Built quietly, growing daily
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/60 backdrop-blur"
            >
              <div className="w-12 h-12 rounded-full bg-sage-light/40 text-sage-deep flex items-center justify-center text-xl mb-4">
                {stat.icon}
              </div>
              <div className="h-display text-3xl md:text-4xl text-ink mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#early-access"
            className="inline-block text-sm text-sage-deep font-medium hover:text-ink transition-colors"
          >
            be one of them →
          </a>
        </div>
      </div>
    </section>
  )
}
