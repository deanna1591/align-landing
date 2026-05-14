import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'About',
  description: 'Features, why we built Align, pricing, and answers to common questions.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-4">
            About
          </p>
          <h1 className="font-serif text-5xl text-ink mb-12">
            What is <em className="italic">Align</em>?
          </h1>

          {/* Features */}
          <section id="features" className="mb-16">
            <h2 className="font-serif text-3xl text-ink mb-6">Features</h2>
            <div className="space-y-5 text-base text-muted leading-relaxed">
              <Feature
                title="Three things a day"
                desc="Pick three. Not 47. The rest can wait. Today's Three sits at the top so you always know what actually matters."
              />
              <Feature
                title="Horizontal week view"
                desc="Monday through Sunday in seven columns. Drag tasks across days. Drag them to Someday when you're being honest with yourself."
              />
              <Feature
                title="Brain dump"
                desc="A drawer that holds whatever your brain throws at it. Sort later. Or never. It'll still be there."
              />
              <Feature
                title="Forgiving streaks"
                desc="Miss a day? Your streak survives. No reset to zero. No guilt trips."
              />
              <Feature
                title="Daily closure"
                desc="A small end-of-day moment that says: a quieter day counts too."
              />
              <Feature
                title="Focus lane"
                desc="One task. One timer. Everything else dimmed. For when you need deep work without the planner judging you."
              />
              <Feature
                title="Google Calendar attached"
                desc="Your real calendar shows up next to your tasks. Read-only. We never write events without asking."
              />
              <Feature
                title="Lists & someday"
                desc="Groceries, ideas, things to read someday. Categories that aren't days."
              />
            </div>
          </section>

          {/* Why bother */}
          <section id="why-bother" className="mb-16">
            <h2 className="font-serif text-3xl text-ink mb-6">Why bother?</h2>
            <div className="space-y-4 text-base text-muted leading-relaxed">
              <p>
                Because the planner aisle was built for someone you&apos;re not.
              </p>
              <p>
                Most productivity apps assume you&apos;ll wake up, journal, sip a green smoothie,
                and color-code your day. Some people live like that. We love them. They&apos;re
                fine. They don&apos;t need Align.
              </p>
              <p>
                Align is for the rest of us — the ADHD founders, the overwhelmed parents,
                the &quot;wait, I had a thing today&quot; humans. People whose to-do lists are
                graveyards of good intentions.
              </p>
              <p>
                We built it because every planner we tried made us feel worse. We wanted
                one that made us feel like things were okay even on the days they weren&apos;t.
              </p>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="mb-16">
            <h2 className="font-serif text-3xl text-ink mb-6">Pricing</h2>
            <div className="bg-sage-tint/50 rounded-2xl p-8">
              <p className="font-serif text-3xl text-ink mb-2">Free during early access.</p>
              <p className="text-base text-muted leading-relaxed">
                We&apos;re focused on building something good. When we add paid features, you&apos;ll
                know first, and your early-access status will be remembered.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="font-serif text-3xl text-ink mb-6">FAQ</h2>
            <div className="space-y-6">
              <FAQ
                q="Is it actually for ADHD brains, or is that just marketing?"
                a="It's actually for ADHD brains. The whole product is built around the things that go wrong with traditional productivity tools — forgetting where you put tasks, abandoning the system after one bad day, feeling guilty about a streak you missed. We tried to remove those failure modes."
              />
              <FAQ
                q="Do I need to set anything up?"
                a="No. Open it. Type a task. That's setup."
              />
              <FAQ
                q="Will my data be safe?"
                a="Yes. We use Supabase (encrypted in transit and at rest). We don't sell data, share it, or use it to train AI. See our Privacy Policy for details."
              />
              <FAQ
                q="Can I cancel anytime?"
                a="Yes. Delete your account anytime from settings. Your data goes with it within 30 days."
              />
              <FAQ
                q="Does it work on mobile?"
                a="Yes. There's a web app that works on mobile, and you can add it to your home screen as a PWA. Native iOS and Android may come later."
              />
              <FAQ
                q="What about offline?"
                a="Some things work offline, but Align is mostly meant to be online so it can sync across your devices."
              />
              <FAQ
                q="Can I import from another app?"
                a="Not yet. You can paste tasks in. We're prioritizing the core experience first."
              />
              <FAQ
                q="What if I have feedback?"
                a={
                  <>
                    Email{' '}
                    <a href="mailto:support@realign.day" className="text-sage hover:text-sage-deep underline">
                      support@realign.day
                    </a>
                    . A human will read it.
                  </>
                }
              />
            </div>
          </section>

          <div className="text-center mt-16">
            <a
              href="/#early-access"
              className="inline-block px-7 py-3.5 bg-sage hover:bg-sage-deep text-white rounded-full text-sm font-medium transition-colors"
            >
              Start planning, sort of
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-2 border-sage/30 pl-5 py-1">
      <p className="font-medium text-ink mb-1">{title}</p>
      <p className="text-sm">{desc}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="border-b border-hairline/60 pb-5 group">
      <summary className="cursor-pointer flex items-start gap-3 list-none">
        <span className="text-sage mt-1 transition-transform group-open:rotate-45">+</span>
        <span className="font-medium text-ink flex-1">{q}</span>
      </summary>
      <p className="mt-3 ml-7 text-base text-muted leading-relaxed">{a}</p>
    </details>
  )
}
