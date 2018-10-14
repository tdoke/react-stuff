export const actionTypes = {
  OPEN_BANK_DETAILS_DIALOG: "OPEN_BANK_DETAILS_DIALOG",
  CLOSE_BANK_DETAILS_DIALOG: "CLOSE_BANK_DETAILS_DIALOG"
}
export const openBankDetailsDialog = (bankSaving = {}) => ({
  type: actionTypes.OPEN_BANK_DETAILS_DIALOG,
  payload: bankSaving
})
export const closeBankDetailsDialog = () => ({
  type: actionTypes.CLOSE_BANK_DETAILS_DIALOG
})
export const bankDetailsDialogReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case actionTypes.OPEN_BANK_DETAILS_DIALOG:
      return { ...state, open: true, bankSaving: action.payload }
    case actionTypes.CLOSE_BANK_DETAILS_DIALOG:
      return { ...state, open: false }
    default:
      return state;
  }
}