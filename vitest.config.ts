import { configDefaults, defineConfig } from "vitest/config";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [...configDefaults.exclude],
      deps: { fallbackCJS: true },
      globals: true,
      environment: "jsdom",
      mockReset: true,
    },
  })
);
