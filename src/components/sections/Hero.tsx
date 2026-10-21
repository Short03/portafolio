import { Download } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { perfil } from '../../data/perfil'
import { Boton } from '../ui/Boton'
import { IconoGitHub, IconoLinkedIn } from '../ui/IconosMarca'

// Solo se desliza, sin desvanecerse: el título es el elemento más grande (LCP) y debe verse de inmediato.
const subir = (retraso: number) => ({
  initial: { y: 14 },
  animate: { y: 0 },
  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const, delay: retraso },
})

export function Hero() {
  const reducir = useReducedMotion()
  const animar = (retraso: number) => (reducir ? {} : subir(retraso))
  const { disponible } = perfil

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="grid gap-10 border-b border-linea pt-10 pb-9 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:pt-16 md:pb-12"
    >
      <div className="min-w-0">
        <p className="mt-0 mb-3.5 font-mono text-[13px] tracking-[0.06em] text-acento uppercase">
          {perfil.rol}
        </p>
        <motion.h1
          id="inicio-titulo"
          {...animar(0)}
          className="m-0 font-display text-[clamp(44px,8.5vw,96px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance"
        >
          {perfil.nombre} <span className="font-normal text-tenue">{perfil.apellidos}</span>
        </motion.h1>
        <motion.p {...animar(0.08)} className="mt-6 mb-0 max-w-[58ch] text-[clamp(17px,2vw,20px)]">
          {perfil.presentacion}
        </motion.p>
        <motion.div {...animar(0.16)} className="mt-7 flex flex-wrap gap-3">
          <Boton
            href={perfil.cv.ruta}
            download
            icono={<Download aria-hidden="true" className="size-4" />}
          >
            {perfil.cv.etiqueta}
          </Boton>
          <Boton href={perfil.verProyectos.url} variante="fantasma">
            {perfil.verProyectos.etiqueta}
          </Boton>
          <Boton href={perfil.github.url} externo variante="fantasma" icono={<IconoGitHub />}>
            {perfil.github.etiqueta}
          </Boton>
          <Boton href={perfil.linkedin.url} externo variante="fantasma" icono={<IconoLinkedIn />}>
            {perfil.linkedin.etiqueta}
          </Boton>
        </motion.div>
      </div>

      <aside
        aria-label={disponible.titulo}
        className="relative w-full max-w-80 border-[1.5px] border-dashed border-linea bg-superficie p-[18px] font-mono text-xs text-tenue md:w-[230px] md:rotate-[1.5deg]"
      >
        <p className="absolute -top-[22px] right-2 m-0 grid size-[84px] -rotate-[14deg] place-items-center rounded-full border-2 border-sello bg-superficie text-center text-[10px] leading-tight font-medium tracking-[0.06em] text-sello uppercase md:-right-[18px]">
          <span>
            {disponible.sello.split(' ').map((palabra) => (
              <span key={palabra} className="block">
                {palabra}
              </span>
            ))}
          </span>
        </p>
        <dl className="m-0 grid gap-2">
          {disponible.datos.map((dato) => (
            <div key={dato.etiqueta}>
              <dt className="text-[10px] tracking-[0.08em] uppercase">{dato.etiqueta}</dt>
              <dd className="m-0 text-[13px] text-tinta">{dato.valor}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  )
}
