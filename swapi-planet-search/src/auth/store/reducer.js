import { actionTypes } from './actions';
const defaultState = {
  user: {},
  loggedIn: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loggedIn: true }
      
    default:
      return state
  }
}