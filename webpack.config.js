const path = require('path'); // module that resolves relative paths for us
const webpack = require('webpack');

module.exports = {
  context: __dirname, // it says we are runing webpack in the root directory always
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx', // frontdoor to our project
  ],
  devtool: 'cheap-eval-source-map', // it says to inline all my sourcemaps in dev version
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/', // Must be the same as in devServer
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true, // tells your dev server if not recognices something let handle to the client
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    // report format and info
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // Send down the name of components for debugging pourposes
  ],
  module: {
    rules: [
      // list of loaders; tools that webpack is using on out code
      {
        enforce: 'pre', // runing before babel
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // function or regex
        loader: 'babel-loader',
      },
    ],
  },
};
