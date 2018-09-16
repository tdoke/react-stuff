import  { actionTypes } from './actions';

const defaultState = {
  start: false,
  end: false,
  currentQuestion: -1
}

export default function (state = defaultState, action) {

  switch (action.type) {
    case actionTypes.START_QUIZ:
      return { ...state, start: action.payload, currentQuestion: 0 }
    case actionTypes.END_QUIZ:
      return { ...state, end: action.payload }
    case actionTypes.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload }
    default:
      return state
  }
}