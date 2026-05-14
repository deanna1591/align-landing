export default function OneScreen() {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="h-display-tight text-5xl md:text-7xl lg:text-8xl text-ink text-center mb-6">
          One screen.
          <br />
          <em className="italic text-sage">Not 47 tabs.</em>
        </h2>

        <p className="text-center text-base md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-16">
          Align holds your week, your tasks, and your real calendar in
          <br className="hidden md:block" />
          one quiet place. Drag, drop, breathe.
        </p>

        {/* Big zoomed week view */}
        <div className="relative max-w-6xl mx-auto">
          <img
            src="/card-week-zoomed.svg"
            alt="Align week view"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
