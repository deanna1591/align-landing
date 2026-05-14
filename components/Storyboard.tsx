export default function Storyboard() {
  const steps = [
    {
      label: 'plan',
      title: 'See the whole week at a glance',
      desc: 'Seven columns. Monday to Sunday. That\'s it. That\'s the system.',
      image: '/card-week-zoomed.svg',
    },
    {
      label: 'capture',
      title: 'Catch the thought before it disappears',
      desc: 'Brain dump captures whatever your mind throws at you. Sort it later. Or never.',
      image: '/card-braindump.svg',
    },
    {
      label: 'focus',
      title: 'One task. One timer. Everything else dimmed.',
      desc: 'When you need deep work and the rest of the world can wait.',
      image: '/half-iphone-braindump.svg',
    },
    {
      label: 'close',
      title: 'End the day kindly',
      desc: 'A quieter day still counts. Streaks that forgive. Closure without guilt.',
      image: '/card-closure.svg',
    },
  ]

  return (
    <section className="py-24 md:py-36 bg-sage-tint/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs tracking-[0.25em] uppercase text-muted font-semibold mb-5">
            how it feels
          </p>
          <h2 className="h-display-tight text-5xl md:text-7xl text-ink">
            Plan your day.
            <br />
            <em className="italic text-sage">Forgive yourself.</em>
            <br />
            Move on.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:pl-10' : 'md:pr-10'}>
                <p className="text-xs tracking-[0.25em] uppercase text-sage-deep font-semibold mb-4">
                  {step.label}
                </p>
                <h3 className="h-display-tight text-4xl md:text-5xl lg:text-6xl text-ink mb-6">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="flex justify-center">
                <img src={step.image} alt="" className="w-full max-w-md h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
