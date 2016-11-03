import { createStore } from 'redux'
import { ADD_QUESTION, addQuestion } from '../actions/question.jsx'
import reducers from '../reducers'

let store = createStore(reducers);

store.subscribe(() =>
  console.log(store.getState())
)

let id = 1
setInterval(() =>
  store.dispatch(addQuestion({text: "Q" + id, who: 'interlock', id: id++}))
, 5000)


export default store;
