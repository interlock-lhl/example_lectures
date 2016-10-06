// actions
export const ADD_QUESTION = 'ADD_ACTION'
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const DEL_QUESTION = 'DEL_ACTION'

// action creators
export const addQuestion = question => ({
  type: ADD_QUESTION,
  question
})

export const delQuestion = question => ({
  type: DEL_QUESTION,
  question
})

export const fetchQuestions = () => ({
  type:  REQUEST_QUESTIONS
})
