const path = require('path');

module.exports = {
  extends: [path.resolve(__dirname, './javascript'), 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  plugins: [],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],

    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
      {
        selector: ['variable', 'objectLiteralProperty', 'memberLike'],
        format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: ['variable', 'function'],
        types: ['function'],
        format: ['strictCamelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['class', 'interface', 'typeAlias'],
        format: ['PascalCase'],
      },
      {
        selector: ['enum'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
    ],

    '@typescript-eslint/no-unused-vars': 'off',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
