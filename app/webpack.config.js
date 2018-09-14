const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const firebaseConfig = require('./firebase.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './public/index.js',
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  // Order matters
  plugins: [
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

    new CopyWebpackPlugin([
      { from: 'public/images/*', to: 'images/', flatten: true },
      { from: 'public/manifest.json', to: './', flatten: true },
    ]),
  ],
};
