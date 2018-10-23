import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

export const BankSavingsPieChart = ({ inputData, labelText }) => {
  console.log(inputData);
  if (inputData.length === 0) return null
  return (
    <div>
      <PieChart height={200} width={200}>
        <Pie
          data={inputData}
          dataKey="value"
          cx={90}
          cy={90}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}>
          {
            inputData.map((entry, index) => <Cell key={entry.name} fill={entry.color} />)
          }
          <Label value={labelText} position="center" />
        </Pie>
      </PieChart>
    </div>
  )
}
