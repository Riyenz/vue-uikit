module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', {
      code: 150,
    }],
    'no-multiple-empty-lines': [1, {
      max: 1,
    }],
    indent: ['error', 2],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
