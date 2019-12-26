/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');
const config = require('./package.json');

module.exports = {
  mode: 'production',
  entry: [path.resolve(__dirname, config.main), path.resolve(__dirname, 'scss/base.scss')],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            },
          },
          'extract-loader',
          // Creates `style` nodes from JS strings
          'css-loader',
          // Postcss
          'postcss-loader',
          // Compiles Sass/Scss to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
