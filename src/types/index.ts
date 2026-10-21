/** Un enlace con su texto visible. */
export interface Enlace {
  etiqueta: string
  url: string
}

/** Una fila del recuadro "Disponible para trabajar". */
export interface DatoRapido {
  etiqueta: string
  valor: string
}

/** Una sección de la página: da el id del ancla, el número y el título. */
export interface InfoSeccion {
  id: string
  numero: string
  titulo: string
}

export interface Perfil {
  nombre: string
  /** Se muestran en gris, después del nombre. */
  apellidos: string
  dominio: string
  rol: string
  presentacion: string
  cv: {
    etiqueta: string
    etiquetaCorta: string
    ruta: string
  }
  verProyectos: Enlace
  github: Enlace
  linkedin: Enlace
  disponible: {
    sello: string
    titulo: string
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
  nombre: string
  /** Las principales se resaltan con el color de acento. */
  destacada?: boolean
}

export interface GrupoStack {
  titulo: string
  tecnologias: Tecnologia[]
}

export interface Trabajo {
  puesto: string
  organizacion: string
  /** Opcional: si falta, no se muestra fecha. */
  fecha?: string
  logros: string[]
}

export type EstadoProyecto = 'Código abierto' | 'En desarrollo' | 'En línea'

export interface Proyecto {
  nombre: string
  estado: EstadoProyecto
  descripcion: string
  tecnologias: string[]
  /** Opcional: si falta, el título no es enlace. */
  enlace?: string
}

export interface Estudio {
  titulo: string
  detalle: string
}
