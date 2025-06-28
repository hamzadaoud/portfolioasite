import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // supports path aliases from tsconfig.json
  ],
  server: {
    port: 3000,          // You can change the port if you want
    host: "localhost",   // or use "0.0.0.0" for external access
    strictPort: true     // fails if port 3000 is taken
  },
  build: {
    outDir: "dist",       // default output folder for builds
    chunkSizeWarningLimit: 1000 // optional: reduce if needed
  }
});
