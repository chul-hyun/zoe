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
      files: ['./src/**/*.{ts,tsx}'],
      extends: ['zoe/typescript-angular'],
      parserOptions: {
        project: [tsconfigPath],
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
      files: ['./src/**/*.{scss}'],
      extends: ['zoe/angular'],
      parserOptions: {
        project: [tsconfigPath],
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
  ],
};
