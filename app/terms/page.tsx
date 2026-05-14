import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms for using Align. Plain language. Updated May 2026.',
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.22em] uppercase text-muted font-semibold mb-4">
            The fine print
          </p>
          <h1 className="font-serif text-5xl text-ink mb-4">Terms of Service</h1>
          <p className="text-sm text-soft italic mb-12">Last updated: May 13, 2026</p>

          <Section title="1. Agreement">
            By using <em className="italic">Align</em> (realign.day, app.realign.day, and related
            services), you agree to these terms. If you don&apos;t agree, please don&apos;t use Align.
          </Section>

          <Section title="2. Who can use Align">
            You must be 13 or older. If you&apos;re under 18 in your country, you need a parent
            or guardian&apos;s permission.
          </Section>

          <Section title="3. Your account">
            You&apos;re responsible for keeping your login secure. Tell us if you suspect
            unauthorized access. We&apos;ll do our part to protect your account but we can&apos;t
            guarantee absolute security (nobody can).
          </Section>

          <Section title="4. Your content">
            Your tasks, lists, and notes belong to you. We don&apos;t claim ownership. We just
            store them so the app works.
          </Section>

          <Section title="5. Acceptable use">
            Don&apos;t use Align to do illegal things. Don&apos;t try to break the service, scrape
            our data, or abuse other users. Don&apos;t upload content that violates someone
            else&apos;s rights.
          </Section>

          <Section title="6. Price">
            Right now Align is free during early access. If we add paid features in the
            future, we&apos;ll give you notice before charging anything.
          </Section>

          <Section title="7. Service availability">
            We&apos;ll do our best to keep Align running but we can&apos;t guarantee 100% uptime.
            Sometimes things break. We&apos;ll fix them as fast as we can.
          </Section>

          <Section title="8. Termination">
            You can delete your account anytime. We can suspend or terminate accounts that
            violate these terms.
          </Section>

          <Section title="9. Disclaimers">
            Align is provided &quot;as is&quot;. We don&apos;t warrant the service is error-free or
            uninterrupted. We&apos;re not responsible if you miss an appointment because Align
            didn&apos;t remind you the way you wanted it to.
          </Section>

          <Section title="10. Limitation of liability">
            To the maximum extent permitted by law, we&apos;re not liable for indirect or
            consequential damages from using Align.
          </Section>

          <Section title="11. Changes to terms">
            We may update these terms. If we make material changes, we&apos;ll email you. Continuing
            to use Align after changes means you accept the new terms.
          </Section>

          <Section title="12. Governing law">
            These terms are governed by the laws of [YOUR STATE/COUNTRY].
          </Section>

          <Section title="13. Contact">
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
      <div className="text-base text-muted leading-relaxed">{children}</div>
    </div>
  )
}
