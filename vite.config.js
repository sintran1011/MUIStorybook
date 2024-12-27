import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const { dirname } = path;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@stories": path.resolve(__dirname, "src/stories"),
    },
  },
});
