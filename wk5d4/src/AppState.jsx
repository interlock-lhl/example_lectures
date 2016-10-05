import { createStore } from 'redux'
import { ADD_QUESTION, addQuestion } from './Actions.jsx'

// initial state
const initialState = {
  questions: []
}

// state calculator, only calculates and never does anything else
function app(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          action.question
        ]
      });
    default:
      return state;
  }
}

let store = createStore(app);

store.subscribe(() =>
  console.log(store.getState())
)

let id = 1
setInterval(() =>
  store.dispatch(addQuestion({text: "Q", who: 'interlock', id: id++}))
, 1000)


export default store;
