import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@images": resolve(__dirname, "src/images"),
      "@test": resolve(__dirname, "src/test"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
});
