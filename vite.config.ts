import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "aastha-portfolio";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",
  plugins: [react()],
  appType: "custom",
}));
