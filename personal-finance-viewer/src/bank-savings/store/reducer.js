import { actionTypes } from './actions';
export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_BANK_SAVING:
      return [...state, action.payload]
    case actionTypes.UPDATE_BANK_SAVING:
      const bankSaving = action.payload;
      const filteredBankSavings = state.filter(bank => bank.id !== bankSaving.id);
      console.log(bankSaving, filteredBankSavings,[...filteredBankSavings, bankSaving])
      return [...filteredBankSavings, ...[bankSaving]];
    default:
      return state;
  }
}
