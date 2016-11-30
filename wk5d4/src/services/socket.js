
var id = 1;

// fake socket messages emitter
const SocketService = {
  _questions: [], // Array of messages
  _onCallbacks: [], // Array of callbacks to notify when we change _questions

  // called once, initialize our service
  initialize: () => {
    setInterval(() => {
      SocketService._questions.push({text: "Q" + id, who: 'interlock', id: id++});
      SocketService.emit();
    }, 1000)
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
