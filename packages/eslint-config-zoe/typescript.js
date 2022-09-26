const path = require('path');

module.exports = {
  extends: [path.resolve(__dirname, './javascript'), 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
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

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    '@typescript-eslint/no-useless-constructor': ['off'],
    '@typescript-eslint/no-empty-function': 'off',

    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'default-case': 'off',
  },
};
