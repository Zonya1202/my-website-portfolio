import { ThemeProvider } from '@/context/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contacts } from '@/components/sections/Contacts'

export default function App() {
  return (
    <ThemeProvider>
      {/* overflow-x-clip (не hidden!) — режет горизонтальный вылет орбиты,
          но не создаёт скролл-контейнер, поэтому sticky у Navbar работает */}
      <div className="min-h-svh overflow-x-clip px-4 py-4">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contacts />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
