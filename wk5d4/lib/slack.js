const slack = require('slack');
const EventEmitter = require('events');
const async = require('async');

/**
 * Slack class
 *
 * Wrapper to get real time slack messages and emit them as events via EventEmitter
 */
class Slack extends EventEmitter {

  constructor(token) {
    super();
    this.token = token;
    this.users = {};
    this.channels = {};
    this.bot = slack.rtm.client();
    this.bot.hello(this._handleHello);
    this.bot.message(this._handleMessage.bind(this));
    this.bot.listen({token: this.token});
  }

  // handle our hello message (confirms connection to slack)
  _handleHello(message) {
    console.log(`Got a message: ${message.type}`);
  }

  // handle messages, all messages come here
  _handleMessage(message) {
    var self = this;
    console.log(message);
    // slack returns channel names and user names as unique identifiers, we need to look them up
    async.parallel([
      function(cb) {
        self._getUser(message.user, cb);
      },
      function(cb) {
        self._getChannel(message.channel, cb);
      }
    ], (err, results) => {
      if (err) {
        return console.log(err);
      }
      self.emit('message', { id: message.ts, user: results[0], channel: results[1], text: message.text});
    });
  }

  // lookup a user identifier via the slack API
  _getUser(user, cb) {
    if (this.users[user]) {
      setImmediate(cb, null, this.users[user]);
      // cb(null, this.users[user]);
      return;
    }
    console.log('fetching user:', user);
    slack.users.info({token: this.token, user: user}, (err, data) => {
      if (err) {
        return cb(err);
      }
      // console.log(data);
      this.users[user] = data.user;
      cb(null, data.user);
    });
  }

  // look up a channel identifier via slack API
  _getChannel(channel, cb) {
    if (this.channels[channel]) {
      setImmediate(cb, null, this.channels[channel]);
      return;
    }
    console.log('fetching channel:', channel);
    slack.channels.info({token: this.token, channel: channel}, (err, data)=> {
      if (err) {
        return cb(err);
      }
      this.channels[channel] = data.channel;
      cb(null, data.channel);
    });
  }
}

module.exports = Slack;
