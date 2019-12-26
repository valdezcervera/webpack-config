const path = require('path');
const config = require('./package.json');

module.exports = {
  mode: 'development',
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
          /** CSS TO FILE
           // postcss-loader need a config file
           // with the plugins to be used.
           // Example:
           // plugins: {
           //   autoprefixer: { browsers: ['last 2 versions'], grid: true },

          // Folder to load the compiled css
          // this need the autoprefixer module
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            },
          },
          'extract-loader',
          // Creates `style` nodes from JS strings
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          // Create css file from compiled Sass to css
          'postcss-loader',
          */

          /** CSS TO JS */
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',

        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    publicPath: '/build/',
    port: 8081,
    clientLogLevel: 'silent',
  },
};
