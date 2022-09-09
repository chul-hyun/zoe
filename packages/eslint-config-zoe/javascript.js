const path = require('path');

module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
    babelOptions: {
      configFile: path.resolve(__dirname, './react.babel.config.js'),
    },
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        arrowParens: 'always',
      },
    ],

    complexity: ['warn', { max: 10 }],

    // 'max-lines': ['warn', { max: 80, skipBlankLines: true, skipComments: true }],

    'max-lines-per-function': 'off',
    'max-depth': ['warn', { max: 2 }],

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],

    'no-use-before-define': 'off',

    'import/prefer-default-export': 'off',

    'lines-between-class-members': 'off',

    'no-useless-constructor': 'error',
    'no-empty-function': 'error',
    'no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: true,
      },
    ],

    'no-plusplus': 'off',
    'no-minusminus': 'off',

    'eslint-comments/disable-enable-pair': 'off',

    'no-nested-ternary': 'off',

    'spaced-comment': ['error', 'always', { markers: ['/'] }],

    'object-curly-newline': 'off',

    'import/no-default-export': 'error',

    'eslint-comments/no-unused-disable': 'error',
  },
};
