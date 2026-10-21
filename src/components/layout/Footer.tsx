import { perfil } from '../../data/perfil'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1040px] px-5 pt-8 pb-16 font-mono text-xs text-tenue">
      {perfil.pie}
    </footer>
  )
}
