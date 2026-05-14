export default function SiteFooter() {
  return (
    <footer className="bg-white py-16 md:py-20 border-t border-hairline/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Brand reveal */}
        <div className="text-center py-12 md:py-20 mb-16 border-b border-hairline/40">
          <div className="flex justify-center mb-8">
            <img src="/align-icon.svg" alt="Align" className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          <div className="flex justify-center">
            <img
              src="/align-logo-wordmark.svg"
              alt="Align"
              className="h-20 md:h-28 w-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="h-display text-2xl md:text-3xl text-ink mb-3">
              <em className="italic">Align.</em>
            </p>
            <p className="text-sm text-muted">
              A planner for the rest of us.
              <br />
              Made for chaotic brilliant brains.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-soft font-semibold mb-4">
                Product
              </p>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="text-muted hover:text-ink transition-colors">Features</a></li>
                <li><a href="/about#why-bother" className="text-muted hover:text-ink transition-colors">Why bother</a></li>
                <li><a href="/about#pricing" className="text-muted hover:text-ink transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-muted hover:text-ink transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-soft font-semibold mb-4">
                The fine print
              </p>
              <ul className="space-y-3 text-sm">
                <li><a href="/terms" className="text-muted hover:text-ink transition-colors">Terms</a></li>
                <li><a href="/privacy" className="text-muted hover:text-ink transition-colors">Privacy</a></li>
                <li><a href="/google-data-use" className="text-muted hover:text-ink transition-colors">Google data use</a></li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-widest uppercase text-soft font-semibold mb-4">
              Get in
            </p>
            <a
              href="#early-access"
              className="inline-block px-5 py-2.5 bg-ink text-white rounded-full text-sm font-medium hover:bg-ink/90 transition-colors mb-4"
            >
              Start planning, sort of
            </a>
            <p className="text-xs text-soft italic">
              <a href="mailto:support@realign.day" className="hover:text-ink transition-colors">
                support@realign.day
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-hairline/40">
          <p className="text-xs text-soft">
            © {new Date().getFullYear()} <em className="italic">Align</em>. Built quietly.
          </p>
          <p className="text-xs text-soft italic">made for the rest of us.</p>
        </div>
      </div>
    </footer>
  )
}
