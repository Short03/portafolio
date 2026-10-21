import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { perfil } from '../data/perfil'
import type { Idioma } from '../types'
import { ContextoIdioma } from './contexto'

const CLAVE = 'idioma'

// localStorage puede fallar (modo privado, cookies bloqueadas): en ese caso, español.
function idiomaGuardado(): Idioma {
  try {
    return localStorage.getItem(CLAVE) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

interface IdiomaProviderProps {
  children: ReactNode
  /** Para pruebas: idioma con el que arranca, sin leer localStorage. */
  inicial?: Idioma
}

export function IdiomaProvider({ children, inicial }: IdiomaProviderProps) {
  // La función dentro de useState solo corre en el primer render.
  const [idioma, setIdioma] = useState<Idioma>(() => inicial ?? idiomaGuardado())

  // Sincroniza lo que vive fuera de React: <html lang>, título y descripción.
  useEffect(() => {
    document.documentElement.lang = idioma
    document.title = perfil.meta.titulo[idioma]
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', perfil.meta.descripcion[idioma])
    try {
      localStorage.setItem(CLAVE, idioma)
    } catch {
      // Sin almacenamiento, el idioma solo dura mientras la página está abierta.
    }
  }, [idioma])

  // useMemo evita crear un objeto nuevo en cada render y redibujar a todos los consumidores.
  const valor = useMemo(() => ({ idioma, cambiarIdioma: setIdioma }), [idioma])

  return <ContextoIdioma.Provider value={valor}>{children}</ContextoIdioma.Provider>
}
