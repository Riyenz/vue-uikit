module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'arrow-body-style': 0,
    'max-len': ['error', {
      code: 150,
    }],
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': [1, {
      max: 1,
    }],
    indent: ['error', 2],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
