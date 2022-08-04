const path = require('path');

const packageDir = path.resolve(__dirname, '.');

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
      files: ['**/{.*,*}.js', '.*/**/{.*,*}.js'],
      extends: ['zoe/javascript'],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'warn',
          {
            packageDir,
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        // quotes: ["error", "double"]
      },
    },
    {
      files: ['./**/*.{ts,tsx}'],
      extends: ['zoe/typescript-react'],
      parserOptions: {
        project: [path.resolve(__dirname, './tsconfig.json')],
      },
      env: {
        browser: true,
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
