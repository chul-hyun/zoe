const path = require('path');

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
        packageDir: path.resolve(__dirname, '.'),
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
        project: [path.resolve(__dirname, './tsconfig.json')],
      },
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: path.resolve(__dirname, '.'),
            devDependencies: false,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
      },
    },
    {
      files: ['./**/*.test.{ts,tsx}'],
      extends: ['zoe/typescript'],
      parserOptions: {
        project: [path.resolve(__dirname, './tsconfig.json')],
      },
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: path.resolve(__dirname, '.'),
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
