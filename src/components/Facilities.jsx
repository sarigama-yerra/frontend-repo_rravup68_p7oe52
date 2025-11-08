import { Wifi, Beaker, Palette, Trees, Cpu, Library, Shield, Dumbbell } from 'lucide-react'

const facilities = [
  {
    title: 'Smart Classrooms',
    icon: Wifi,
    desc: 'AI-assisted learning pods with AR/VR, interactive boards, and personalized dashboards.'
  },
  {
    title: 'Innovation Lab',
    icon: Beaker,
    desc: 'Robotics, drones, 3D printing, and IoT studio to build real-world solutions.'
  },
  {
    title: 'Classical Arts',
    icon: Palette,
    desc: 'Bharatanatyam, Hindustani & Carnatic music, and fine arts nurtured by maestros.'
  },
  {
    title: 'Gurukul Greens',
    icon: Trees,
    desc: 'Ayurvedic garden, meditation courtyard, and open-air amphitheatre for baithaks.'
  },
  {
    title: 'AI & Coding',
    icon: Cpu,
    desc: 'Foundational to advanced programming with ethics and Sanskrit logic puzzles.'
  },
  {
    title: 'Knowledge Centre',
    icon: Library,
    desc: 'Hybrid library with palm-leaf manuscripts digitized alongside e-books.'
  },
  {
    title: 'Safety & Wellness',
    icon: Shield,
    desc: '24x7 campus security, trained counsellors, and nutritious satvik cafeteria.'
  },
  {
    title: 'Sports Arena',
    icon: Dumbbell,
    desc: 'Indoor sports hub with kabbadi, kho-kho, yoga, and modern fitness zone.'
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">World-Class Facilities</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A campus that honours heritage while empowering the innovators of tomorrow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700">
                  <f.icon size={22} />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
