import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore generated and config files
  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "build/**",
      "*.log",
      "eslint.config.*",
      ".eslintrc.*",
    ],
  },
  // Default config for JS files in this Node project
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      ecmaVersion: 2020,
    },
    rules: {
      // Mirror legacy rule from .eslintrc.js
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
]);
