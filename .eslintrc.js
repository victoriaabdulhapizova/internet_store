module.exports = {
  extends: 'airbnb-base',
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'no-console': 'error',
    'no-underscore-dangle': [2, { allowAfterThis: true, }],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always',
      imports: 'always',
      exports: 'always',
      functions: 'never',
    }],
    'no-unused-vars': ['error', { argsIgnorePattern: 'next', }],
    'no-var': ['off'],
    'one-var': ['off'],
    'func-names': 0,
    'class-methods-use-this': ['off'],
  },
};
