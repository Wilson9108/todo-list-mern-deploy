
import { defineConfig } from "eslint/config";

export default defineConfig([

  // Backend files (Node + Jest)
  {
    files: ["todo-backend/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest }, // Node + Jest globals
      ecmaVersion: "latest",
      sourceType: "module"
    },
    extends: ["@eslint/js/recommended"], // use full package name
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error"
    }
  }
]);
