import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import type { InfoSeccion } from '../../types'

interface SeccionProps {
  info: InfoSeccion
  children: ReactNode
}

/**
 * Sección numerada: en móvil la etiqueta va arriba; desde `md`, a la izquierda
 * (200 px) y el contenido a la derecha, como en la referencia.
 */
export function Seccion({ info, children }: SeccionProps) {
  const reducir = useReducedMotion()
  const idTitulo = `${info.id}-titulo`

  return (
    <section
      id={info.id}
      aria-labelledby={idTitulo}
      className="grid gap-[18px] border-b border-linea py-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 md:py-14"
    >
      <div className="font-mono text-[13px] text-tenue">
        {info.numero}
        <h2
          id={idTitulo}
          className="mt-1 font-display text-2xl font-semibold tracking-[-0.01em] text-tinta"
        >
          {info.titulo}
        </h2>
      </div>
      <motion.div
        className="min-w-0"
        initial={reducir ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
