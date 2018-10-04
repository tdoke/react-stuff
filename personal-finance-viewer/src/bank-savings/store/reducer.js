import { actionTypes } from './actions';
export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_BANK_SAVING:
      return [...state, action.payload]
    default:
      return state;
  }
}
