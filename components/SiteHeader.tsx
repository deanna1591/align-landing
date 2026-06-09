'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'features' },
    { href: '#how-it-works', label: 'how it works' },
    { href: '#community', label: 'community' },
    { href: '#faq', label: 'faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-full px-4 lg:px-6 h-14 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(91,62,142,0.14)] border border-hairline/40'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <a href="/" className="flex items-center pl-2" aria-label="Align home">
          <Logo className="h-6 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/75 hover:text-ink transition-colors lowercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.realign.day"
            className="text-sm text-ink/75 hover:text-ink transition-colors"
          >
            sign in
          </a>
          <a
            href="#early-access"
            className="px-5 py-2 bg-sage text-white text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ border: '2px solid #4A2E7A', borderRadius: 8, boxShadow: '2px 2px 0 rgba(91,62,142,0.28)' }}
          >
            Start planning, sort of
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M5 5l10 10M5 15L15 5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14" strokeLinecap="round" />
                <path d="M3 14h14" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white rounded-3xl shadow-[0_8px_32px_rgba(91,62,142,0.16)] border border-hairline/40 p-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-ink py-3 border-b border-hairline/40 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.realign.day"
              className="text-base text-ink py-3 border-b border-hairline/40"
            >
              sign in
            </a>
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className="mt-3 px-5 py-3.5 bg-sage text-white text-center font-semibold"
              style={{ border: '2px solid #4A2E7A', borderRadius: 8, boxShadow: '2px 2px 0 rgba(91,62,142,0.28)' }}
            >
              Start planning, sort of
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
