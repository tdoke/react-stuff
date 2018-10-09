import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const getSumofAccounts = (accounts) =>
  accounts.reduce((a, b) => Number(a) + Number(b.amount), 0);

const formatToPieChartInput = (bankSavings) => bankSavings.map(bankSaving => ({
  name: bankSaving.bankName,
  value: Number(getSumofAccounts(bankSaving.accounts)),
  color: bankSaving.color
}))


export const BankSavingsPieChart = ({ bankSavings }) => {
  const data = formatToPieChartInput(bankSavings)
  if(bankSavings.length === 0) return null
  return (
    <div>
      <PieChart height={200} width={200}>
        <Pie
          data={data}
          dataKey="value"
          cx={90}
          cy={90}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}>
          {
            data.map((entry, index) => <Cell key={entry.name} fill={entry.color} />)
          }
        </Pie>
      </PieChart>
    </div>
  )
}
