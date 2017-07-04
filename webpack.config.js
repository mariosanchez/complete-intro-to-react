const path = require('path'); // module that resolves relative paths for us

module.exports = {
    context: __dirname, // it says we are runing webpack in the root directory always
    entry: './js/ClientApp.jsx', // frontdoor to our project
    devtool: "cheap-eval-source-map", // it says to inline all my sourcemaps in dev version
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: { // report format and info
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [ // list of loaders; tools that webpack is using on out code
            {
                enforce: 'pre', // runing before babel
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/, // function or regex
                loader: 'babel-loader'
            }
        ]
    }
}