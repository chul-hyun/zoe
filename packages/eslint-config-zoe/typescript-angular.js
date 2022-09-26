const path = require('path');

module.exports = {
  extends: [path.resolve(__dirname, './javascript'), path.resolve(__dirname, './typescript')],
  rules: {
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',

    '@typescript-eslint/no-useless-constructor': ['off'],
    '@typescript-eslint/no-empty-function': 'off',
    'import/no-default-export': 'off',
    'dot-notation': 'off',
  },
};
