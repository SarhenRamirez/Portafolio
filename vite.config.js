import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa: el sitio funciona en la raíz de un dominio o en una subcarpeta (GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [react()],
});
