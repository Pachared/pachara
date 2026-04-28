import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/")) return "three";
          if (
            id.includes("node_modules/@react-three/") ||
            id.includes("node_modules/three-stdlib/") ||
            id.includes("node_modules/three-mesh-bvh/")
          ) {
            return "react-three";
          }
        },
      },
    },
  },
})
