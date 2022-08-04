const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.resolve(rootPath, './src');
const distPath = path.resolve(rootPath, './dist');
const publicPath = path.resolve(rootPath, './public');

module.exports = {
  entry: path.resolve(srcPath, './index.tsx'),
  output: {
    path: distPath,
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {},
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(ico|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
              plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
              assumptions: {
                setPublicClassFields: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, './index.hbs'),
    }),
    new ESLintPlugin({
      cwd: rootPath,
      files: path.join(srcPath, '**/*.{ts,tsx,js,jsx}'),
      emitError: true,
      emitWarning: false,
    }),
    new CopyPlugin({
      patterns: [{ from: publicPath }],
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
