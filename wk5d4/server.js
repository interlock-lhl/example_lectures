const express = require('express');
const app = express()
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);

app.set('view engine', 'ejs');

// setup webpack middleware
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}));

// routing
app.use(require('./routes/home'));

// spin up our express server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
