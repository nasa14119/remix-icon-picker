import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfig from "vite-tsconfig-paths";
// import path from "path";
// https://vite.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@lib": path.resolve("src/package/lib"),
  //     "@components": path.resolve("src/package/components"),
  //     "@hooks": path.resolve("src/package/hooks"),
  //   },
  // },
  plugins: [react(), tsconfig()],
});
