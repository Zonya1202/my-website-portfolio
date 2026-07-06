import { ThemeProvider } from '@/context/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Highlights } from '@/components/sections/Highlights'
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
          <Highlights />
          <Skills />
          <Contacts />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
