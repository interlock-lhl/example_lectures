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
      this.io.emit(type, data);
      // this.io.apply(arguments)
    }
  },

  onConnection: function(socket) {
    console.log('id', socket.id);
    socket.emit('message', 'hello');

    // let id = 1;
    // setInterval(() => {
    //   socket.emit('question', {
    //     text: 'Hello world',
    //     username: 'james',
    //     channel: 'lecture',
    //     id: id++
    //   });
    // }, 1000);
  }
};
