import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      setupFiles: [fileURLToPath(new URL("./vitest.setup.ts", import.meta.url))],
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "\\.css$": "identity-obj-proxy",
      },
    },
    define: {
      "import.meta.env.MODE": '"test"',
    },
    plugins: [
      {
        name: "ignore-css",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".css") || id.endsWith(".scss")) {
            return { code: "" };
          }
        },
      },
    ],
  }),
);
