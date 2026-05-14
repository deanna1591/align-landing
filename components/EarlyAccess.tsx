'use client'

import { useState, FormEvent } from 'react'

export default function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setMessage(data.error || 'Something went sideways. Try again?')
        return
      }
      setStatus('success')
      setMessage(data.message || "You're in. We'll email when there's room.")
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Network hiccup. Try again?')
    }
  }

  return (
    <section id="early-access" className="py-24 md:py-36 bg-ink text-white relative overflow-hidden">
      {/* Sage glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124, 164, 129, 0.5), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-white/50 font-semibold mb-6">
          early access
        </p>

        <h2 className="h-display-tight text-5xl md:text-7xl lg:text-8xl mb-8">
          A calmer way to
          <br />
          <em className="italic text-sage-light">mostly</em> hold it together.
        </h2>

        <p className="text-base md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
          Align is in early access while we get it right.
          Drop your email and we&apos;ll let you in when there&apos;s space.
        </p>

        <p className="text-sm text-white/50 italic mb-10">
          No marketing emails. No &ldquo;we miss you 🥺&rdquo; guilt trips. Just one note when it&apos;s your turn.
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.com"
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-sage-light focus:outline-none focus:ring-1 focus:ring-sage-light disabled:opacity-50 text-base"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-4 bg-sage hover:bg-sage-light text-white rounded-full text-base font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading'
              ? 'Saving…'
              : status === 'success'
              ? "You're in ✓"
              : 'Start planning, sort of →'}
          </button>
        </form>

        {message && (
          <p
            className={`text-sm mt-6 ${
              status === 'success' ? 'text-sage-light' : 'text-warm'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
