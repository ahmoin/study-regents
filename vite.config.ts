import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/study-regents/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        chemistry: resolve(__dirname, "chemistry/index.html"),
        algebratwo: resolve(__dirname, "algebratwo/index.html"),
      },
    },
  },
});
