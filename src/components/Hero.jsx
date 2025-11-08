import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2JmD5E2h3Vb0Xf7T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 shadow-sm border border-slate-200 mb-6">
          <Sparkles className="text-indigo-600" size={18} />
          <span className="text-sm font-medium text-slate-800">Where Tradition meets Tomorrow</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Aarohan Future School
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
          A futuristic learning sanctuary rooted in Indian values — blending Vedic wisdom, holistic education, and cutting-edge technology.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#facilities"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Explore Facilities
            <ArrowRight size={18} />
          </a>
          <a
            href="#culture"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow border border-slate-200 hover:bg-slate-50"
          >
            Culture & Tech
          </a>
        </div>
      </div>
    </section>
  )
}
