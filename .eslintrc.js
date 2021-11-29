module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'max-len': 'off',
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 9000,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true
      },
    ],
    'comma-dangle': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4
      },
      multiline: {
        max: 1
      }
    }]
  }
};
