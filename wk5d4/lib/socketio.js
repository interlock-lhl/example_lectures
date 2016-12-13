/**
 * Our socket.io code to handle connections and related events
 */

module.exports = {
  io: null,
  initialize: function(httpServer) {
    this.io = require('socket.io')(httpServer);
    this.io.on('connection', this.onConnection);
  },

  emit: function(type, data) {
    if (this.io) {
      if (type === 'message' && data.text.match(/^Q:/i) ) {
        this.io.emit(type, data);
      }

      // this.io.apply(arguments)
    }
  },

  onConnection: function(socket) {
    console.log('client connected:', socket.id);

  }
};
