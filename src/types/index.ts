export type Idioma = 'es' | 'en'

/** Un texto escrito en cada idioma. TypeScript exige los dos. */
export type Traducible = Record<Idioma, string>

/** Para nombres que pueden ser iguales en ambos idiomas: un string se usa tal cual. */
export type Texto = string | Traducible

/** Un enlace con su texto visible. */
export interface Enlace {
  etiqueta: Texto
  url: string
}

/** Una fila del recuadro "Disponible para trabajar". */
export interface DatoRapido {
  etiqueta: Traducible
  valor: Texto
}

/** Una sección de la página: da el id del ancla, el número y el título. */
export interface InfoSeccion {
  id: string
  numero: string
  titulo: Texto
}

export interface Perfil {
  nombre: string
  /** Se muestran en gris, después del nombre. */
  apellidos: string
  dominio: string
  rol: Traducible
  presentacion: Traducible
  /** Título y descripción de la pestaña y de Google, por idioma. */
  meta: {
    titulo: Traducible
    descripcion: Traducible
  }
  cv: {
    etiqueta: Traducible
    etiquetaCorta: string
    ruta: string
  }
  verProyectos: Enlace
  github: Enlace
  linkedin: Enlace
  disponible: {
    sello: Traducible
    titulo: Traducible
    datos: DatoRapido[]
  }
  contacto: {
    correo: string
    telefono: string
    /** Número en formato internacional para el enlace tel:. */
    telefonoEnlace: string
  }
  pie: string
}

export interface Tecnologia {
  nombre: Texto
  /** Las principales se resaltan con el color de acento. */
  destacada?: boolean
}

export interface GrupoStack {
  titulo: Traducible
  tecnologias: Tecnologia[]
}

export interface Trabajo {
  puesto: Traducible
  organizacion: Texto
  /** Opcional: si falta, no se muestra fecha. */
  fecha?: Traducible
  logros: Traducible[]
}

/** El estado es una clave fija; su texto en cada idioma vive en src/i18n/ui.ts. */
export type EstadoProyecto = 'Código abierto' | 'En desarrollo' | 'En línea'

export interface Proyecto {
  nombre: Texto
  estado: EstadoProyecto
  descripcion: Traducible
  tecnologias: string[]
  /** Opcional: si falta, el título no es enlace. */
  enlace?: string
}

export interface Estudio {
  titulo: Traducible
  detalle: Traducible
}
