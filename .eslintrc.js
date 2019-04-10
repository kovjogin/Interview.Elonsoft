module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [2],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'vue/html-indent': 'off',
    'vue/script-indent': ['error', 2, {baseIndent: 1}],
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}],
    'vue/max-attributes-per-line': [1, {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],

    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'any'
      },
      'svg': 'always',
      'math': 'always'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
