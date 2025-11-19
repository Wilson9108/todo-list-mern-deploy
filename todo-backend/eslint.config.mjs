import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Frontend files (React/Vite)
  {
    files: ["frontend/**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser, // browser globals
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  // Backend files (Node + Jest)
  {
    files: ["backend/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest }, // Node + Jest globals
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error"
    }
  }
]);
