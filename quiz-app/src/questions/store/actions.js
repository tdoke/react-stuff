export const actionTypes = {
  SET_ANSWER : 'SET_ANSWER'
}
const setAnswer = (questionId, answerId) => ({
  type: actionTypes.SET_ANSWER,
  payload: { questionId, answerId }
})
export const actions = {
  setAnswer
}
