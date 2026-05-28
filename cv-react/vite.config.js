import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Reemplaza 'cv-react' por el nombre exacto de tu repositorio en GitHub si es diferente
  base: '/cv_jorge_almarales/', 
  plugins: [react(), tailwindcss()],
})
