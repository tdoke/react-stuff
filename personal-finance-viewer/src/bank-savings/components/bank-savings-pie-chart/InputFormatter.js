const getSumofAccounts = (accounts) =>
  accounts.reduce((a, b) => Number(a) + Number(b.amount), 0);

export const getTotalAmountByBank = (bankSavings) => bankSavings.map(bankSaving => ({
  name: bankSaving.bankName,
  value: Number(getSumofAccounts(bankSaving.accounts)),
  color: bankSaving.color
}))

export const getTotalAmountByBankByAccountType = (bankSavings, accountType) => bankSavings.map(bankSaving => ({
  name: bankSaving.bankName,
  value: Number(getSumofAccounts(bankSaving.accounts.filter(account => account.type === accountType))),
  color: bankSaving.color
}))
