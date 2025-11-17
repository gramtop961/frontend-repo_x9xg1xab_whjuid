import { Menu, Mail, Instagram, Dribbble, Github } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold tracking-wide text-gray-900">Avery Bloom</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:hello@avery.design" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:shadow transition-all">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a aria-label="Instagram" href="#" className="p-2 text-gray-600 hover:text-gray-900"><Instagram className="h-5 w-5"/></a>
            <a aria-label="Dribbble" href="#" className="p-2 text-gray-600 hover:text-gray-900"><Dribbble className="h-5 w-5"/></a>
            <a aria-label="GitHub" href="#" className="p-2 text-gray-600 hover:text-gray-900"><Github className="h-5 w-5"/></a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
