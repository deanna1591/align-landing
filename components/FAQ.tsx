'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is Align free?',
    a: 'Yes, completely free during early access. When we add paid features later, your early-access status will be remembered. You won\'t wake up to a paywall.',
  },
  {
    q: 'I use Google Calendar. How is Align different?',
    a: 'Align isn\'t a calendar replacement — it\'s the thing you needed alongside your calendar. Your Google events show up next to your tasks, in one calm screen. Think of it as the place where your to-do list and your real schedule finally agree.',
  },
  {
    q: 'Will my data be safe?',
    a: 'Yes. We use Supabase (encrypted in transit and at rest). We don\'t sell data, share it with advertisers, or use it to train AI. Read our Privacy Policy and Google data use disclosure for full details.',
  },
  {
    q: 'Who is Align for?',
    a: 'ADHD founders, overwhelmed parents, and anyone whose to-do list is a graveyard of good intentions. If you\'ve abandoned 14 planners because they made you feel worse, you\'re who we built this for.',
  },
  {
    q: 'Do I need to set anything up?',
    a: 'No. Open it. Type a task. That\'s setup. No folders, no tags, no tutorial.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes. There\'s a web app that works on mobile, and you can add it to your home screen as a PWA. Native iOS and Android apps may come later.',
  },
  {
    q: 'What if I miss a day?',
    a: 'Your streak forgives you. No reset to zero. No "we miss you 🥺" notification. Just pick up where you left off.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Delete your account from settings anytime. Your data goes with it within 30 days.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="h-display-tight text-5xl md:text-6xl lg:text-7xl text-ink mb-12 md:mb-16">
          frequently asked
          <br />
          <em className="italic text-sage">questions</em>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all ${
                openIndex === i
                  ? 'bg-sage-tint/40 border-sage/30'
                  : 'bg-white border-hairline hover:border-sage/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4"
              >
                <span className="text-base md:text-lg font-medium text-ink">
                  {faq.q}
                </span>
                <span
                  className={`text-2xl text-sage transition-transform shrink-0 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-base text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
