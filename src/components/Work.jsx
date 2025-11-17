function Work() {
  const projects = [
    {
      title: 'Lumina Camera Co.',
      tags: ['Brand Identity', 'Art Direction'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1640&auto=format&fit=crop',
    },
    {
      title: 'Vista Studio',
      tags: ['Web Design', 'Photography'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1640&auto=format&fit=crop',
    },
    {
      title: 'Frame Magazine',
      tags: ['Editorial', 'Typography'],
      image: 'https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=1640&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Selected Work</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all →</a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl bg-gray-100">
              <img src={p.image} alt={p.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-4 bottom-4">
                <h3 className="text-white text-xl font-medium">{p.title}</h3>
                <p className="mt-1 text-white/80 text-sm">{p.tags.join(' • ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
