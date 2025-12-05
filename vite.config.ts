import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const isDev = mode === "development";
  const isReplit = process.env.REPL_ID !== undefined;
  
  const plugins = [
    react(),
    tailwindcss(),
  ];

  // Only load Replit plugins in development on Replit
  if (isDev && isReplit) {
    try {
      const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      const { devBanner } = await import("@replit/vite-plugin-dev-banner");
      plugins.push(runtimeErrorOverlay(), cartographer(), devBanner());
    } catch (e) {
      // Replit plugins not available, continue without them
    }
  }

  // Only load metaImagesPlugin if available
  try {
    const { metaImagesPlugin } = await import("./vite-plugin-meta-images");
    plugins.push(metaImagesPlugin());
  } catch (e) {
    // metaImagesPlugin not available, continue without it
  }

  return {
    base: mode === "production" ? "/Monthly-Report/" : "/",
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
