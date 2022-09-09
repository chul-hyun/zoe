const path = require('path');

module.exports = {
  extends: ['airbnb', path.resolve(__dirname, './javascript'), path.resolve(__dirname, './react')],
  rules: {
    'react/jsx-max-depth': ['warn', { max: 2 }],
  },
};
