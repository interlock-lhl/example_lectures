import { createStore } from 'redux'
import { ADD_QUESTION, addQuestion } from '../actions/question.jsx'
import reducers from '../reducers'
import io from 'socket.io-client'

let store = createStore(reducers);

store.subscribe(() =>
  console.log(store.getState())
)

let id = 1;
// setInterval(() =>
//   store.dispatch(addQuestion({text: "Q" + id, who: 'interlock', id: id++}))
// , 5000)

const socket = io.connect();

socket.on('message', function (data) {
  console.log(data);
});

socket.on('question', function(data) {
  console.log("question:", data.text);
  store.dispatch(addQuestion(data));
});

export default store;
