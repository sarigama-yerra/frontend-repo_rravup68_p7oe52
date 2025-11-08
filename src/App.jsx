import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Facilities from './components/Facilities'
import CultureTech from './components/CultureTech'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <CultureTech />
      </main>
      <Footer />
    </div>
  )
}

export default App
