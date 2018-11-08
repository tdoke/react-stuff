import { actionTypes } from './actions'

const defaultState = {
  inProgress: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.START_PROGRESS_BAR:
      return { inProgress: true }
    case actionTypes.STOP_PROGRESS_BAR:
      return { inProgress: false }
    default:
      return state
  }
}