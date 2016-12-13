const express = require('express');
const app = express();
const server = require('http').Server(app);
const socket = require('./lib/socketio').initialize(server);


const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);

require('dotenv').config({silent: true});
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// setup webpmessageack middleware
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}));

app.use(require("webpack-hot-middleware")(compiler));

// routing
app.use(require('./routes/home'));

// configure slack
(function() {
  var Slack = require('./lib/slack');
  var slack = new Slack(process.env.SLACK_TOKEN);
  slack.on('message', function(message) {
    require('./lib/socketio').emit('message', message);
    console.log("Message:", message.user.name, message.channel.name, message.text);
  });
})();


// spin up our express server
server.listen(port, function () {
  console.log('Example app listening on port:', port);
});
