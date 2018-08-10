const { GenerateSW } = require('workbox-webpack-plugin');
const firebaseConfig = require('./firebase.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './public/index.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  // Order matters
  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      minify: true,
      template: './public/index.html',
      firebaseConfig,
    }),

    new GenerateSW({
      clientsClaim: true,
      importWorkboxFrom: 'local',
      navigateFallback: '/',
      skipWaiting: true,
      swDest: 'sw.js',
    }),
  ],
};
