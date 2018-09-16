export const actionTypes = {
  START_QUIZ: "START_QUIZ",
  END_QUIZ: "END_QUIZ",
  SET_CURRENT_QUESTION: "SET_CURRENT_QUESTION"
}

const startQuiz = (flag) => ({ type: actionTypes.START_QUIZ, payload: flag })
const endQuiz = (flag) => ({ type: actionTypes.END_QUIZ, payload: flag })
const setCurrentQuestion = (questionPosition) => 
  ({ type: actionTypes.SET_CURRENT_QUESTION, payload: questionPosition })

export const actions = {
  startQuiz,
  endQuiz,
  setCurrentQuestion
}