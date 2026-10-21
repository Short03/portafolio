import type { EstadoProyecto, Idioma } from '../types'

/** Textos de la interfaz (no del CV): botones, avisos y etiquetas para lectores de pantalla. */
interface TextosUi {
  saltarAlContenido: string
  navegacion: string
  abrirMenu: string
  cerrarMenu: string
  /** Nombre accesible del botón que cambia al otro idioma. */
  cambiarIdioma: string
  /** Lo que se ve en el botón: el idioma al que cambia. */
  etiquetaOtroIdioma: string
  copiar: string
  copiado: string
  seleccionaYCopia: string
  correoCopiado: string
  telefonoCopiado: string
  estados: Record<EstadoProyecto, string>
}

export const textosUi: Record<Idioma, TextosUi> = {
  es: {
    saltarAlContenido: 'Saltar al contenido',
    navegacion: 'Principal',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    cambiarIdioma: 'Switch to English',
    etiquetaOtroIdioma: 'EN',
    copiar: 'Copiar',
    copiado: 'Copiado',
    seleccionaYCopia: 'Selecciona y copia',
    correoCopiado: 'Correo copiado',
    telefonoCopiado: 'Teléfono copiado',
    estados: {
      'Código abierto': 'Código abierto',
      'En desarrollo': 'En desarrollo',
      'En línea': 'En línea',
    },
  },
  en: {
    saltarAlContenido: 'Skip to content',
    navegacion: 'Main',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    cambiarIdioma: 'Cambiar a español',
    etiquetaOtroIdioma: 'ES',
    copiar: 'Copy',
    copiado: 'Copied',
    seleccionaYCopia: 'Select and copy',
    correoCopiado: 'Email copied',
    telefonoCopiado: 'Phone copied',
    estados: {
      'Código abierto': 'Open source',
      'En desarrollo': 'In development',
      'En línea': 'Live',
    },
  },
}
