import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // MapLibre (Contact map) starts its worker as an ES module worker
    worker: { format: 'es' },
  },
});
