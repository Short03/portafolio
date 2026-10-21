import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección que cruza la franja central de la pantalla.
 * `ids` debe ser estable (definido fuera del componente) para no reiniciar el observador.
 */
export function useSeccionActiva(ids: readonly string[]): string | null {
  const [activa, setActiva] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setActiva(entrada.target.id)
        }
      },
      // Solo cuenta una franja delgada a media pantalla.
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ids) {
      const elemento = document.getElementById(id)
      if (elemento) observador.observe(elemento)
    }

    // La última sección es corta y nunca llega al centro: al tocar el fondo, se marca ella.
    const alHacerScroll = () => {
      const alFondo =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      const ultima = ids.at(-1)
      if (alFondo && ultima) setActiva(ultima)
    }
    window.addEventListener('scroll', alHacerScroll, { passive: true })

    return () => {
      observador.disconnect()
      window.removeEventListener('scroll', alHacerScroll)
    }
  }, [ids])

  return activa
}
