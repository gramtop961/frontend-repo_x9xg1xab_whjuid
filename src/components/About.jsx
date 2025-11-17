function About() {
  return (
    <section id="about" className="relative py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Designer with a camera-first mindset</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            I’m Avery Bloom, a graphic designer blending visual identity, editorial systems, and photography to craft minimal yet expressive brand worlds. I work with startups and studios to create refined and timeless visuals that communicate clearly and feel contemporary.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-3xl font-semibold text-gray-900">8+</p>
              <p className="text-sm text-gray-600">Years experience</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-3xl font-semibold text-gray-900">40+</p>
              <p className="text-sm text-gray-600">Projects shipped</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="h-72 w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1640&auto=format&fit=crop" alt="camera" />
          <img className="h-72 w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1640&auto=format&fit=crop" alt="studio" />
          <img className="h-72 w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1640&auto=format&fit=crop" alt="workspace" />
          <img className="h-72 w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1640&auto=format&fit=crop" alt="mood" />
        </div>
      </div>
    </section>
  )
}

export default About
