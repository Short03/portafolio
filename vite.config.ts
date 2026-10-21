import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
// defineConfig de 'vitest/config' acepta la configuración de Vite y además la clave `test`.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // jsdom simula el DOM del navegador dentro de Node para poder dibujar componentes.
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
