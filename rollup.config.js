import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

const extensions = [".ts"];

export default {
  input: "./src/index.ts",

  external: [...Object.keys(pkg.dependencies || {})],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    json(),
    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ["src/**/*"], babelHelpers: "runtime" }),
  ],

  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
  ],
};
