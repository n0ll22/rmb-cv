import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/RMB-CV/', // The base URL for GitHub Pages
  plugins: [react()],
});
