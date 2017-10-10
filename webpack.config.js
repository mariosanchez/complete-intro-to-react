const path = require('path'); // module that resolves relative paths for us
const webpack = require('webpack');

const config = {
  context: __dirname, // it says we are runing webpack in the root directory always
  entry: [
    // Dev server HRM entries
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://loacalhost:8080',
    // Universal HMR entry
    // 'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000',
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
    alias: {
      react: 'preact-compat', // This is for use preact instead of React
      'react-dom': 'preact-compat', // This is for use preact instead of React
    },
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
        // This is for use preact instead of React
        include: [path.resolve('js'), path.resolve('node-modules/preact-compat/src')],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'prod') {
  config.entry = './js/ClientApp.jsx';
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
