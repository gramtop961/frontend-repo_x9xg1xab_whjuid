function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 p-8 sm:p-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">Let’s build something beautiful</h3>
              <p className="mt-4 text-gray-600">Available for brand, web and editorial projects. I typically book 4–6 weeks in advance.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-start md:justify-end">
              <a href="mailto:hello@avery.design" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow transition-all">Email me</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-all">Portfolio PDF</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Avery Bloom — Graphic Designer</p>
      </div>
    </section>
  )
}

export default Contact
