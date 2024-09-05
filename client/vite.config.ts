import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CV/', // Base path for GitHub Pages
  plugins: [react()],
});
