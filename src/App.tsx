import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { MotionConfig } from 'motion/react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Contacto } from './components/sections/Contacto'
import { Experiencia } from './components/sections/Experiencia'
import { Formacion } from './components/sections/Formacion'
import { Hero } from './components/sections/Hero'
import { Proyectos } from './components/sections/Proyectos'
import { Stack } from './components/sections/Stack'

export default function App() {
  return (
    // reducedMotion="user": si el sistema pide menos movimiento, motion no anima.
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-superficie focus:px-4 focus:py-3 focus:text-tinta"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="mx-auto max-w-[1040px] px-5 pt-16 outline-none">
        <Hero />
        <Stack />
        <Experiencia />
        <Proyectos />
        <Formacion />
        <Contacto />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </MotionConfig>
  )
}
