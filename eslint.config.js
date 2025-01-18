import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['src/**/*.{js}'],
    extends: [
      'eslint:recommended',           // 基本的なESLintの推奨設定
      'plugin:astro/recommended',     // Astro用の推奨設定
      'plugin:prettier/recommended',  // Prettierとの統合
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
