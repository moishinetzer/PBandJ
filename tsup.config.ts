import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  // @ts-expect-error - bug due to inconsistent esbuild versions
  esbuildPlugins: [cssModulesPlugin()],
  format: ["cjs", "esm"],
  injectStyle: true,
});
