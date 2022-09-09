const path = require('path');

module.exports = {
  extends: [
    path.resolve(__dirname, './javascript'),
    path.resolve(__dirname, './typescript'),
    path.resolve(__dirname, './react'),
  ],
  rules: {},
};
