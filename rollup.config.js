import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import { main, module, typings } from "./package.json";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "./src/index.ts",
    output: [
      {
        file: main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [commonjs(), typescript()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: typings,
      format: "esm",
    },
    plugins: [dts()],
  },
];