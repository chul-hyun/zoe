module.exports = {
  plugins: ['react-hooks', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/prop-types': 'off',

    'react/jsx-props-no-spreading': 'off',

    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression'],
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
        classes: 'defaultProps',
        functions: 'defaultArguments',
      },
    ],
  },
};
