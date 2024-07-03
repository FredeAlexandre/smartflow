import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import UnoCSS from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  base: "https://fredealexandre.github.io/smartflow/",
  resolve: { 
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  }
});
