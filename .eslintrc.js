module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true, // Set to true if your code runs in browsers
    node: true, // Set to true if your code runs in Node.js
    es2020: true, // Enables globalThis and other ES2020 features
  },
  rules: {
    // Add your custom ESLint rules here
  },
}
