import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser, // Use browser globals for front-end code
    },
    extends: [
      js.configs.recommended, // Use recommended ESLint configurations from @eslint/js
    ],
  },
  {
    files: ["webpack.config.js"], // Specifically target webpack config file
    languageOptions: {
      globals: {
        ...globals.node, // Add Node.js globals like require and __dirname
      },
    },
    extends: [
      js.configs.recommended, // Using recommended ESLint configurations for Node.js
    ],
  },
]);
