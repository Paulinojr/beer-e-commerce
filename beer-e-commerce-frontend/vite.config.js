import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Import the path module


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        "./src"
      ),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:8000/"
    },
  },
});
