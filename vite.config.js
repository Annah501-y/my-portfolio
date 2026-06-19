import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// Vite uses this config file to understand that this is a React project.
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
});