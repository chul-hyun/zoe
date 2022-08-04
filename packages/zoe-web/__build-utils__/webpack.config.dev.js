const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge.merge(commonConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: true,
      progress: true,
    },
  },
});
