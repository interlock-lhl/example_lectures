
var id = 1;

// fake socket messages emitter
const SocketService = {
  _questions: [], // Array of messages
  _onCallbacks: [], // Array of callbacks to notify when we change _questions
  _socket: null,

  // called once, initialize our service
  initialize: () => {
    SocketService._socket = io.connect();
    SocketService._socket.on('message', SocketService._handleMessage);
  },

  _handleMessage: (data) => {
    SocketService._questions.push(data);
    SocketService.emit();
  },

  // subscribe to getting updates to questions
  on: function(cb) {
    SocketService._onCallbacks.push(cb);
  },

  // send notification to subscribers
  emit: function() {
    SocketService._onCallbacks.forEach((cb) => {
      cb(SocketService._questions);
    });
  }
}

export default SocketService;
