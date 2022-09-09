const path = require('path');

module.exports = {
  extends: [path.resolve(__dirname, './javascript')],
  rules: {
    'no-undef': 'off',
  },
};
