import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">Available for freelance</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-white drop-shadow-xl">
            Graphic Designer crafting visual stories for modern brands
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Minimal, modern and photography-led design across identities, web, and campaigns.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-lg transition-all">See my work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all">Let’s collaborate</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  )
}

export default Hero
