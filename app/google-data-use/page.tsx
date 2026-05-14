import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Google data use',
  description: "How Align uses Google Calendar data. Read-only, never stored beyond what's needed, never shared.",
}

export default function GoogleDataUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-4">
            The fine print
          </p>
          <h1 className="font-serif text-5xl text-ink mb-4">Google data use</h1>
          <p className="text-sm text-soft italic mb-12">Last updated: May 13, 2026</p>

          <p className="text-lg text-ink leading-relaxed mb-12">
            This page explains exactly what Google data <em className="italic">Align</em> accesses,
            what we do with it, and what we don&apos;t.
          </p>

          <Section title="What we request">
            <ul>
              <li>
                <strong>Read-only access to your Google Calendar</strong> (
                <code className="text-xs bg-whisper px-1.5 py-0.5 rounded">
                  https://www.googleapis.com/auth/calendar.readonly
                </code>
                )
              </li>
            </ul>
            <p className="mt-3">That&apos;s it. One scope. Read-only.</p>
          </Section>

          <Section title="What we use it for">
            We pull your calendar events and show them next to your tasks in Align, so
            you can see &quot;9am team standup&quot; sitting next to &quot;draft Q3 plan&quot;
            without flipping tabs.
          </Section>

          <Section title="What we don't do">
            <ul>
              <li>We don&apos;t write to your calendar.</li>
              <li>We don&apos;t delete or modify your events.</li>
              <li>We don&apos;t share calendar data with anyone.</li>
              <li>We don&apos;t use it to train AI models.</li>
              <li>We don&apos;t serve ads based on it.</li>
              <li>No human at Align reads your calendar unless you ask us to (e.g. support).</li>
            </ul>
          </Section>

          <Section title="Google API Services User Data Policy">
            Align&apos;s use and transfer to any other app of information received from
            Google APIs will adhere to{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className="text-sage hover:text-sage-deep underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </Section>

          <Section title="How we store it">
            Calendar event titles and times are cached in our database (Supabase, US-based,
            encrypted at rest) so the app loads fast. We refresh from Google on a schedule.
            When you disconnect Google, we delete the cache within 24 hours.
          </Section>

          <Section title="How to disconnect">
            <ol className="list-decimal pl-5 space-y-1 mt-2">
              <li>Go to Settings → Connections in Align</li>
              <li>Click &quot;Disconnect&quot; next to Google Calendar</li>
              <li>
                Or revoke access directly at{' '}
                <a
                  href="https://myaccount.google.com/permissions"
                  className="text-sage hover:text-sage-deep underline"
                >
                  myaccount.google.com/permissions
                </a>
              </li>
            </ol>
          </Section>

          <Section title="Contact">
            Questions about Google data?{' '}
            <a href="mailto:support@realign.day" className="text-sage hover:text-sage-deep underline">
              support@realign.day
            </a>
          </Section>
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
