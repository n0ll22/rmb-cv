import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/RMV-CV/', // Base path for GitHub Pages
  plugins: [react()],
});
