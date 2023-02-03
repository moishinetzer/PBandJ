import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

// export default defineConfig({
//   entry: ["src/index.ts"],
//   splitting: false,
//   sourcemap: true,
//   clean: true,
// });

export default defineConfig({
  // @ts-expect-error
  esbuildPlugins: [cssModulesPlugin()],
  format: ["cjs", "esm"],
});
