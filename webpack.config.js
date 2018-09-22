const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const firebaseConfig = require('./firebase.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  // Order matters
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: './src/index.html',
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
      { from: 'src/images/*', to: 'images/', flatten: true },
      { from: 'src/manifest.json', to: './', flatten: true },
    ]),
  ],
};
