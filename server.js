/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const lodash = require('lodash');
const fs = require('fs');
// HMR for universal rendering
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpack = require('webpack');
const compression = require('compression');
const App = require('./js/App').default;
// HMR for universal rendering
// const config = require('./webpack.config');

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
// It's not recommended to use readFileSync, but it's goint to be executed once, so it's fine
const baseTemplate = fs.readFileSync('./index.html');
const template = lodash.template(baseTemplate);

const server = express();

// Universal HMR compiler
/*
const compiler = webpack(config);
server.use(
    webpackDevMiddleware(compiler, { publicPath: config.output.publicPath})
);
server.use(webpackHotMiddleware(compiler));
*/

server.use(compression());
server.use('/public', express.static('./public'));

server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({body}));
  res.end();
});

console.log(`listening on port ${port}`);
server.listen(port);
