import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Align handles your data. Read-only calendar access, never sold, deletable anytime.',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-10 prose prose-neutral">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-4">
            The fine print
          </p>
          <h1 className="font-serif text-5xl text-ink mb-4">Privacy Policy</h1>
          <p className="text-sm text-soft italic mb-12">Last updated: May 13, 2026</p>

          <Section title="What this covers">
            This policy explains how <em className="italic">Align</em> (&quot;we&quot;, &quot;us&quot;) handles the
            information you give us when you use realign.day, app.realign.day, or any
            Align product. Plain English first; legal language only where the law requires it.
          </Section>

          <Section title="What we collect">
            <ul>
              <li><strong>Your email</strong> when you join the waitlist or sign up for an account.</li>
              <li><strong>Your tasks and lists</strong> — the actual content you write into Align — stored in our database so we can show it back to you.</li>
              <li><strong>Calendar events</strong> if you connect Google Calendar (read-only). We never write to your calendar without asking.</li>
              <li><strong>Usage data</strong> — basic analytics about page views, no fingerprinting or cross-site tracking.</li>
            </ul>
          </Section>

          <Section title="What we don't collect">
            <ul>
              <li>We don&apos;t sell your data. Ever. To anyone.</li>
              <li>We don&apos;t use it to train AI models.</li>
              <li>We don&apos;t share it with advertisers.</li>
            </ul>
          </Section>

          <Section title="Google API Services User Data Policy">
            Align&apos;s use and transfer of information received from Google APIs adheres to
            the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className="text-sage hover:text-sage-deep underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. We use Google Calendar data only to
            display your events alongside your tasks in Align. We do not transfer it,
            use it for ads, or allow humans to read it (except with your permission for
            support).
          </Section>

          <Section title="How long we keep it">
            For as long as you have an account. Delete your account and your data goes
            with it within 30 days.
          </Section>

          <Section title="Your rights">
            You can export, correct, or delete your data anytime. Email{' '}
            <a href="mailto:support@realign.day" className="text-sage hover:text-sage-deep underline">
              support@realign.day
            </a>{' '}
            and we&apos;ll do it within 30 days.
          </Section>

          <Section title="Where we store data">
            On Supabase (US-based servers) and Vercel (global edge). Encrypted in transit
            and at rest.
          </Section>

          <Section title="Cookies">
            We use a minimal session cookie to keep you logged in. No tracking pixels, no
            third-party advertising cookies.
          </Section>

          <Section title="Contact">
            Questions? Email{' '}
            <a href="mailto:support@realign.day" className="text-sage hover:text-sage-deep underline">
              support@realign.day
            </a>
            . We&apos;ll reply within a few business days.
            <br />
            Mailing address: [YOUR PHYSICAL ADDRESS]
          </Section>

          <p className="text-sm text-soft italic mt-12">
            If we update this policy, we&apos;ll email you. No surprises.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-2xl text-ink mb-3">{title}</h2>
      <div className="text-base text-muted leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-2 [&_a]:text-sage">
        {children}
      </div>
    </div>
  )
}
