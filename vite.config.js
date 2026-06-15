import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite uses this config file to understand that this is a React project.
export default defineConfig({
  plugins: [react()],
});