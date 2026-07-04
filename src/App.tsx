import { ThemeProvider } from './context/ThemeProvider'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-svh overflow-x-hidden px-4 py-4">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  )
}
