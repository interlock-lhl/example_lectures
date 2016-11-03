const express = require('express');
const app = express();
const server = require('http').Server(app);
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
const io = require('./lib/socketio');

require('dotenv').config({silent: true});

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// setup webpack middleware
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

// bind socketio
io.initialize(server);

// configure slack
(function() {
  var Slack = require('./lib/slack');
  var slack = new Slack(process.env.SLACK_TOKEN);
  slack.on('message', function(message) {
    console.log("Message:", message.user.name, message.channel.name, message.text);
    if (message.text.match(/^[Qq]:/)) {
      io.emit('question', message);
    }
  });
})();

// spin up our express server
server.listen(port, function () {
  console.log('Example app listening on port:', port);
});
