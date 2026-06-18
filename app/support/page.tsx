// app/support/page.tsx — realign.day/support
// Required for App Store Connect (Support URL). Self-contained styling so it
// drops into the landing repo regardless of global CSS.
//
// ⚠ ONE THING TO EDIT: set SUPPORT_EMAIL to the inbox you actually check.

const SUPPORT_EMAIL = 'support@realign.day';

import type { ReactNode } from 'react';

export const metadata = {
  title: 'Support — align',
  description: 'Help and support for the align app.',
};

const C = {
  bg: '#FEFBFD', ink: '#36215C', ink2: '#6E5499', ink3: '#9F88C9',
  accent: '#FF5FB0', sun: '#FCD93D', card: '#FFFDF9', border: '#C9B8E6',
};

const faq: { q: string; a: ReactNode }[] = [
  {
    q: 'How do I connect my Google Calendar?',
    a: <>Open align, go to Settings, and choose <b>Connect Google Calendar</b>. You&apos;ll sign in with Google and grant calendar access. align only reads your events to show them next to your tasks — see exactly how we use this on the <a href="/google-data-use" style={{ color: C.accent }}>Google data use</a> page.</>,
  },
  {
    q: "I can't log in.",
    a: <>Try a password reset from the login screen first. If you signed up with Google, use the <b>Continue with Google</b> button rather than email + password. Still stuck? Email us and we&apos;ll sort it out.</>,
  },
  {
    q: 'How do I delete my account and data?',
    a: <>The fastest way is right in the app: go to <strong>Settings &rarr; Delete account</strong>, confirm, and your account and all associated data (tasks, lists, photos, reflections) are permanently deleted immediately. Prefer email? Write to <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: C.accent }}>{SUPPORT_EMAIL}</a> from the address on your account with the subject &quot;Delete my account&quot; and we&apos;ll remove everything within 30 days and confirm by email.</>,
  },
  {
    q: 'How is my data handled?',
    a: <>Your tasks, photos, and reflections are private to your account. The full details live in our <a href="/privacy" style={{ color: C.accent }}>privacy policy</a>.</>,
  },
  {
    q: 'Something looks broken.',
    a: <>First, refresh the app (pull down on mobile, or hard-refresh in a browser). If the problem sticks around, email us with a screenshot and what you were doing — we read everything.</>,
  },
];

export default function SupportPage() {
  return (
    <main style={{ minHeight: '100vh', background: C.bg, padding: '48px 16px', fontFamily: "'Inter Tight', system-ui, sans-serif", color: C.ink }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* header */}
        <a href="/" style={{ textDecoration: 'none', color: C.ink }}>
          <div style={{ fontFamily: "'Press Start 2P', 'VT323', monospace", fontSize: 22, letterSpacing: 1 }}>
            align <span style={{ color: C.accent }}>✦</span>
          </div>
        </a>
        <p style={{ color: C.ink2, margin: '8px 0 32px', fontSize: 14 }}>Support &amp; help</p>

        {/* contact window */}
        <section style={{ background: C.card, border: `2px solid ${C.ink}`, borderRadius: 12, boxShadow: '4px 4px 0 rgba(54,33,92,0.18)', overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: C.sun, borderBottom: `2px solid ${C.ink}` }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FF6FB5', border: `1.5px solid ${C.ink}` }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#9B5CFF', border: `1.5px solid ${C.ink}` }} />
            <span style={{ fontFamily: "'VT323', monospace", fontSize: 18, textTransform: 'uppercase', letterSpacing: 1, marginLeft: 4 }}>Contact_us.exe</span>
          </div>
          <div style={{ padding: '20px 20px 22px' }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
              The fastest way to reach us is email:
            </p>
            <p style={{ margin: '12px 0 14px' }}>
              <a href={`mailto:${SUPPORT_EMAIL}`}
                style={{ display: 'inline-block', background: C.accent, color: '#fff', border: `2px solid ${C.ink}`, borderRadius: 8, boxShadow: '2px 2px 0 rgba(54,33,92,0.2)', padding: '10px 18px', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                ✉ {SUPPORT_EMAIL}
              </a>
            </p>
            <p style={{ margin: 0, fontSize: 13, color: C.ink2, lineHeight: 1.6 }}>
              We reply within 2 business days — usually much faster. Include a screenshot if something looks off; it helps a lot.
            </p>
          </div>
        </section>

        {/* FAQ window */}
        <section style={{ background: C.card, border: `2px solid ${C.ink}`, borderRadius: 12, boxShadow: '4px 4px 0 rgba(54,33,92,0.18)', overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: '#DAC4FF', borderBottom: `2px solid ${C.ink}` }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FF6FB5', border: `1.5px solid ${C.ink}` }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: C.sun, border: `1.5px solid ${C.ink}` }} />
            <span style={{ fontFamily: "'VT323', monospace", fontSize: 18, textTransform: 'uppercase', letterSpacing: 1, marginLeft: 4 }}>Faq.exe</span>
          </div>
          <div style={{ padding: '8px 20px 18px' }}>
            {faq.map((item, i) => (
              <div key={i} style={{ borderBottom: i < faq.length - 1 ? `1.5px dashed ${C.border}` : 'none', padding: '14px 0' }}>
                <h2 style={{ margin: '0 0 6px', fontSize: 14.5, fontWeight: 700, color: C.ink }}>{item.q}</h2>
                <p style={{ margin: 0, fontSize: 13.5, color: C.ink2, lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* footer links */}
        <p style={{ fontSize: 12.5, color: C.ink3, lineHeight: 1.7 }}>
          More: <a href="/privacy" style={{ color: C.ink2 }}>Privacy policy</a> · <a href="/google-data-use" style={{ color: C.ink2 }}>Google data use</a> · <a href="/" style={{ color: C.ink2 }}>realign.day</a>
        </p>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: C.ink3, textTransform: 'uppercase', letterSpacing: 1 }}>
          ★ momentum, not pressure ★
        </p>
      </div>
    </main>
  );
}
