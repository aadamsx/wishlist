const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './public/index.js',
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[chunkhash:8].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: './public/index.html',
    }),
  ],
};
