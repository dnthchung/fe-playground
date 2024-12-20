// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   { ignores: ["dist"] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
//     },
//   },
// );

// //path : tanstack-plg/eslint.config.js

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import queryPlugin from "@tanstack/eslint-plugin-query";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "coverage"] }, // Added additional ignored folders
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      queryPlugin.configs.recommended, // Add TanStack Query plugin configuration
    ],
    files: ["**/*.{ts,tsx,js,jsx}"], // Support both TypeScript and JavaScript files
    languageOptions: {
      ecmaVersion: 2020, // Supports modern JavaScript features
      globals: globals.browser, // Include browser globals
      sourceType: "module", // Allows the use of ES Modules
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@tanstack/query": queryPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...queryPlugin.configs.recommended.rules, // Add rules for TanStack Query
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Additional custom rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }], // Warn on `console.log` but allow `console.warn` and `console.error`
      "react-hooks/exhaustive-deps": "warn", // Ensure dependencies for hooks are correct
    },
  },
);
