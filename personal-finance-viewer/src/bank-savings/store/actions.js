export const actionTypes = {
  CREATE_BANK_SAVING: "CREATE_BANK_SAVING",
  READ_BANK_SAVING: "READ_BANK_SAVING",
  UPDATE_BANK_SAVING: "UPDATE_BANK_SAVING",
  DELETE_BANK_SAVING: "DELETE_BANK_SAVING"
}

export const createBankSaving = (bankSaving) => ({
  type: actionTypes.CREATE_BANK_SAVING,
  payload: bankSaving
})

export const updateBankSaving = (bankSaving) => ({
  type: actionTypes.UPDATE_BANK_SAVING,
  payload: bankSaving
})



