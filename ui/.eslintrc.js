module.exports = {
  env: {
    browser: true,
    es6: true,
    'vue/setup-compiler-macros': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended',
    '@vue/prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 'off',
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': [
      'warn',
      {
        htmlWhitespaceSensitivity: 'strict',
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}
