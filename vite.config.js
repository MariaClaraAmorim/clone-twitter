import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: resolve("src/assets"),
      },
      {
        find: "@common",
        replacement: resolve("src/common"),
      },
      {
        find: "@components",
        replacement: resolve("src/components"),
      },
      {
        find: "@config",
        replacement: resolve("src/config"),
      },
      {
        find: "@contexts",
        replacement: resolve("src/contexts"),
      },
      {
        find: "@hooks",
        replacement: resolve("src/hooks"),
      },
      {
        find: "@services",
        replacement: resolve("src/services"),
      },
      {
        find: "@styles",
        replacement: resolve("src/styles"),
      },
      {
        find: "@",
        replacement: resolve("src"),
      },
    ],
  },
});
