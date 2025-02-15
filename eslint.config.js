import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['src/**/*.{js}'],
    extends: [
      'eslint:recommended', 
      'plugin:astro/recommended',
      'plugin:prettier/recommended', 
    ],
    plugins: ['astro', 'prettier'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prettier/prettier': 'error',
    },
  },
]);
