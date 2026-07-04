import { ThemeProvider } from './context/ThemeProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Highlights } from './components/sections/Highlights'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-svh overflow-x-hidden px-4 py-4">
        <Navbar />
        <main>
          <Hero />
          <Highlights />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
