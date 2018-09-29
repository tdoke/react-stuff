import { actionTypes } from './actions';
// const defaultBankSavings = [{
//   bankName: '',
//   depositAmount: 0,
//   rateOfInterest: 0,
//   duration: 0
// }]
export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_BANK_SAVING:
      return [...state, action.payload]
    default:
      return state;
  }
}
