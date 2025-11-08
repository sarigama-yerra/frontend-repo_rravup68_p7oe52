import { Cpu, BookOpen, Sun, Radio } from 'lucide-react'

const pillars = [
  {
    title: 'Vedic Roots',
    icon: Sun,
    points: [
      'Morning mindfulness, yoga, and shloka chanting',
      'Festivals and sabhas celebrating Indian heritage',
      'Value education inspired by the Panchatantra'
    ]
  },
  {
    title: 'Global Readiness',
    icon: BookOpen,
    points: [
      'Cambridge-aligned curriculum with Indian context',
      'Public speaking, Sanskrit + regional languages',
      'Exchange programs and hackathons'
    ]
  },
  {
    title: 'Tech-forward',
    icon: Cpu,
    points: [
      'AI literacy from early years',
      'Design thinking and entrepreneurship',
      'Real-world projects with community impact'
    ]
  },
  {
    title: 'Broadcast & Clubs',
    icon: Radio,
    points: [
      'Student-run radio, newsletter, and podcast',
      'Classical music & dance troupes',
      'Eco, astronomy, and robotics clubs'
    ]
  }
]

export default function CultureTech() {
  return (
    <section id="culture" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Culture infused with Tech</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Rooted in Indian ethos, elevated by innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-50 text-orange-700">
                  <p.icon size={22} />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                {p.points.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
