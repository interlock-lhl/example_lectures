import { ADD_QUESTION, addQuestion } from '../actions/question.jsx'

// initial state
const initialState = []

// state calculator, only calculates and never does anything else
function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [...state, action.question];
    default:
      return state;
  }
}


export default questionsReducer;
