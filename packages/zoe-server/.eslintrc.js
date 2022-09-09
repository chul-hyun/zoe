const path = require('path');

const packageDir = path.resolve(__dirname, '.');
const tsconfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  extends: ['zoe'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir,
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  overrides: [
    {
      files: ['./**/*.{ts,tsx}'],
      extends: ['zoe/typescript'],
      parserOptions: {
        project: [tsconfigPath],
      },
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir,
            devDependencies: false,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],

        'class-methods-use-this': 'off',
      },
    },
    {
      files: ['./**/*.test.{ts}'],
      extends: ['zoe/typescript'],
      parserOptions: {
        project: [tsconfigPath],
      },
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir,
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        'no-magic-numbers': 'off',
      },
    },
  ],
};
