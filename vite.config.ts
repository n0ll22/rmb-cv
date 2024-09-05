import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rmb-cv/', // The base URL for GitHub Pages
  plugins: [react()],
});
