const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './app/javascript/components/assets/scss/material-kit-react.scss',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\/src\/js\/(?:.*)\.css$/, 
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'}
        ]
      },
      {
        test: [/\.scss$/, /\.sass$/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              root: path.join(__dirname, './app/javascript/components/assets/scss'),
              includeRoot: true,
              absolute: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              sourceMap: true,
              includePaths: [
                './app/javascript/components/assets/scss',
              ],
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/app/javascript/components/assets/scss',
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]-[chunkhash].css',
      chunkFilename: '[name]-[chunkhash].css', // Ensure each chunk has a unique id
    }),
  ],

  devtool: 'source-map'
};