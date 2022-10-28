/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    es2021: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  ignorePatterns: [
    'vite.config.ts',
    'src/vite-env.d.ts',
    'package.json',
    'node_modules',
    'tsconfig.*.json',
    '.tubro/',
    '.vscode',
    'jest.config.cjs',
    '.eslintrc.cjs',
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
  },
};
