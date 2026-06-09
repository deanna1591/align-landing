import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Align handles your data, including Google user data: what Align accesses, how it is used, stored, and shared.',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 pb-24" style={{ background: '#FDF1F9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            style={{
              background: '#FFFDF9',
              border: '2px solid #4A2E7A',
              borderRadius: 12,
              boxShadow: '4px 4px 0 rgba(91,62,142,0.22)',
              overflow: 'hidden',
            }}
          >
            {/* window title bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                padding: '8px 12px',
                background: '#DAC4FF',
                borderBottom: '2px solid #4A2E7A',
              }}
            >
              <span style={{ display: 'inline-flex', gap: 5 }}>
                <span style={{ width: 11, height: 11, borderRadius: 999, background: '#FF6FB5', border: '1.5px solid #4A2E7A' }} />
                <span style={{ width: 11, height: 11, borderRadius: 999, background: '#FCD93D', border: '1.5px solid #4A2E7A' }} />
                <span style={{ width: 11, height: 11, borderRadius: 999, background: '#9B5CFF', border: '1.5px solid #4A2E7A' }} />
              </span>
              <span style={{ flex: 1, fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '1rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#4A2E7A' }}>
                PRIVACY.TXT
              </span>
            </div>

            <article className="px-6 sm:px-9 py-9">
              <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8B6FB8' }}>
                The fine print
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl mb-3" style={{ color: '#4A2E7A' }}>Privacy Policy</h1>
              <p className="text-sm italic mb-10" style={{ color: '#B49ED6' }}>Last updated: June 9, 2026</p>

              <Section title="Overview">
                Align (&quot;Align&quot;, &quot;we&quot;, &quot;us&quot;) is a weekly planner that helps you organize tasks and,
                optionally, sync with your Google Calendar. This policy explains what information we collect,
                how we use it, how we store and share it, and the choices you have &mdash; with specific detail
                about how Align accesses and uses Google user data.
              </Section>

              <Section title="Information we collect">
                <ul>
                  <li><strong>Account information</strong> &mdash; your email address when you sign up.</li>
                  <li><strong>Your content</strong> &mdash; the tasks, lists, notes, and planning data you create in Align.</li>
                  <li><strong>Google account data</strong> &mdash; only if you choose to connect Google Calendar. See below.</li>
                  <li><strong>Limited usage data</strong> &mdash; basic analytics such as page views. No cross-site tracking, no fingerprinting, no advertising identifiers.</li>
                </ul>
              </Section>

              <Section title="How Align uses Google user data">
                <p>Connecting your Google Calendar is <strong>optional</strong>. If you connect it, Align requests the following access and uses it <strong>only</strong> for these purposes:</p>
                <ul>
                  <li><strong>Your Google account email address</strong> &mdash; to identify which Google account is connected and to label it in your settings.</li>
                  <li><strong>Reading your calendar events</strong> &mdash; to display your existing events alongside your tasks in the planner, so you can plan around them.</li>
                  <li><strong>Creating, updating, and deleting calendar events</strong> &mdash; to write an event to your Google Calendar when you add or change a task that has a date and time, and to remove an event when you delete it in Align. Align only creates, changes, or deletes an event as the direct result of an action you take in the app.</li>
                  <li><strong>Reading your list of calendars</strong> &mdash; to let you choose which calendar Align should write new events to.</li>
                </ul>
                <p>Align does not use Google user data for any purpose other than providing these calendar features to you.</p>
              </Section>

              <Section title="How Align stores Google user data">
                <ul>
                  <li><strong>OAuth tokens</strong> &mdash; Google provides Align with access and refresh tokens, stored in our database (Supabase, US-based servers) solely to make calendar requests on your behalf. They are encrypted in transit (TLS) and at rest, and used only for the actions above.</li>
                  <li><strong>Event data</strong> &mdash; Align may store a limited copy of event details (title, time, calendar source) to display them and to link an event to the task it came from. This is deleted when you disconnect the account or delete your Align account.</li>
                  <li>We retain Google-derived data only while your Google connection is active.</li>
                </ul>
              </Section>

              <Section title="How Align shares Google user data">
                <ul>
                  <li>We <strong>do not sell</strong> your Google user data.</li>
                  <li>We <strong>do not share it with advertisers</strong> or use it for advertising or marketing.</li>
                  <li>We <strong>do not use it to train or improve generalized AI / machine-learning models.</strong> Align&apos;s optional text-parsing feature (provided by Anthropic) only processes the short text you type into the capture box; it does not receive your Google Calendar data.</li>
                  <li><strong>Service providers (sub-processors)</strong> that process data only on our instructions, strictly to operate Align: <strong>Supabase</strong> (database hosting/storage), <strong>Vercel</strong> (application hosting), and <strong>Google</strong> (the Calendar API itself). We do not transfer Google user data to any other third party.</li>
                  <li>We may disclose data if required by law, to prevent fraud or abuse, or to protect our users &mdash; and, in a merger or acquisition, with notice to you.</li>
                  <li>We <strong>do not allow humans to read your Google user data</strong>, except: (a) with your explicit consent (for example, to troubleshoot a support request you raise); (b) where necessary for security, to comply with law, or to prevent abuse; or (c) where the data has been aggregated and anonymized.</li>
                </ul>
              </Section>

              <Section title="Limited Use disclosure">
                Align&apos;s use and transfer of information received from Google APIs to any other app will adhere to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="underline" style={{ color: '#FF5FB0' }}>
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </Section>

              <Section title="Retention and deletion">
                <ul>
                  <li><strong>Disconnect</strong> a Google account anytime in Align (Settings &rarr; disconnect); Align promptly deletes that account&apos;s tokens and synced event data.</li>
                  <li><strong>Delete your Align account</strong> and all your data &mdash; including Google-derived data &mdash; is permanently deleted within 30 days.</li>
                  <li><strong>Revoke access</strong> directly from your Google Account anytime at{' '}
                    <a href="https://myaccount.google.com/permissions" className="underline" style={{ color: '#FF5FB0' }}>myaccount.google.com/permissions</a>.
                  </li>
                  <li>Email <a href="mailto:support@realign.day" className="underline" style={{ color: '#FF5FB0' }}>support@realign.day</a> for export, correction, or deletion; honored within 30 days.</li>
                </ul>
              </Section>

              <Section title="Security">
                Data is encrypted in transit (TLS) and at rest. Access to production systems is restricted.
                OAuth tokens are stored encrypted and used only to make authorized calendar requests on your behalf.
              </Section>

              <Section title="Other information we handle">
                <ul>
                  <li>Your email and the content you create are stored to provide the service and shown back to you. We never sell it.</li>
                  <li><strong>Cookies</strong> &mdash; a single session cookie keeps you signed in. No third-party advertising or tracking cookies.</li>
                </ul>
              </Section>

              <Section title="Children">
                Align is not directed to children under 13 (or the minimum age required in your jurisdiction),
                and we do not knowingly collect their personal information.
              </Section>

              <Section title="Changes to this policy">
                If we make material changes, we will update this page and notify you by email.
              </Section>

              <Section title="Contact">
                Questions or requests: <a href="mailto:support@realign.day" className="underline" style={{ color: '#FF5FB0' }}>support@realign.day</a>
                <br />
                Mailing address: 2901 E Greenway Rd, Phoenix, AZ 85032
              </Section>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <h2 className="font-serif text-2xl mb-3" style={{ color: '#FF5FB0' }}>{title}</h2>
      <div
        className="text-base leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-2 [&_p]:mb-3"
        style={{ color: '#4A2E7A' }}
      >
        {children}
      </div>
    </div>
  )
}
