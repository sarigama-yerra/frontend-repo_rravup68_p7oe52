import { useState } from 'react'
import { Menu, X, School } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#culture', label: 'Culture & Tech' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <School size={20} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">
            Aarohan Future School
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-indigo-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#facilities"
            className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Apply Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#facilities"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
