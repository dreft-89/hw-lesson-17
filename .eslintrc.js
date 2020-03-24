module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'jest'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
  }
}
