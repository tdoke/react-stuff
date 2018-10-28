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

const getFixedDepositsAccounts = (bankSaving) => bankSaving.accounts.filter(acc => acc.type === "FIXED");
const getMaturedCompundedAmount = (yearlyRate, years, startingAmount) =>
  (Number(startingAmount) * Math.pow((1 + (Number(yearlyRate) / (1 * 100))), (1 * Number(years))));

export const getFDMaturedAmounts = bankSavings => bankSavings.map(bankSaving => ({
  name: bankSaving.bankName,
  value: getFixedDepositsAccounts(bankSaving).reduce((accm, account) =>
    accm = Number(accm) + getMaturedCompundedAmount(account.interestRate, account.years, account.amount), 0),
  color: bankSaving.color
}))  