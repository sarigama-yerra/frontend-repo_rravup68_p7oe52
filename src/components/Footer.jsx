import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Aarohan Future School</h4>
            <p className="mt-2 text-slate-600">Blending Indian wisdom with a tech-first future. Admissions open for 2025.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Quick Links</h5>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#facilities" className="hover:text-indigo-700">Facilities</a></li>
              <li><a href="#culture" className="hover:text-indigo-700">Culture & Tech</a></li>
              <li><a href="#home" className="hover:text-indigo-700">Back to top</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Connect</h5>
            <div className="mt-2 flex items-center gap-4 text-slate-600">
              <a href="#" aria-label="Facebook" className="hover:text-indigo-700"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-700"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-indigo-700"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Aarohan Future School. All rights reserved.</p>
      </div>
    </footer>
  )
}
