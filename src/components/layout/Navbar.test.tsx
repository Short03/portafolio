import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import { Navbar } from './Navbar'

function abrirMenu() {
  const user = userEvent.setup()
  render(<Navbar />)
  const boton = screen.getByRole('button', { name: 'Abrir menú' })
  const menu = document.getElementById('menu-movil') as HTMLElement
  return { user, boton, menu }
}

describe('menú móvil', () => {
  test('abre y cierra con Escape', async () => {
    const { user, boton, menu } = abrirMenu()
    expect(boton).toHaveAttribute('aria-expanded', 'false')
    expect(menu).not.toBeVisible()

    await user.click(boton)
    expect(boton).toHaveAttribute('aria-expanded', 'true')
    expect(boton).toHaveAccessibleName('Cerrar menú')
    expect(menu).toBeVisible()

    await user.keyboard('{Escape}')
    expect(boton).toHaveAttribute('aria-expanded', 'false')
    expect(menu).not.toBeVisible()
    expect(boton).toHaveFocus()
  })

  test('se cierra al elegir un enlace', async () => {
    const { user, boton, menu } = abrirMenu()

    await user.click(boton)
    await user.click(within(menu).getByRole('link', { name: 'Proyectos' }))

    expect(boton).toHaveAttribute('aria-expanded', 'false')
    expect(menu).not.toBeVisible()
  })
})
