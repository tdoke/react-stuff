import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './QuizResultPieChart';

// const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 }
// ];
//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = {
  correct: '#00C49F',
  wrong: '#FF0000',
  skipped: '#FFBB28'
}
const formatToPieChartInput = (questions) => ([
  {
    name: 'Correct',
    value: questions.filter(q => q.answer === q.usersAnswer).length
  },
  {
    name: 'Wrong',
    value: questions.filter(q => q.usersAnswer !== 0 && q.answer !== q.usersAnswer).length
  },
  {
    name: 'Skipped',
    value: questions.filter(q => q.usersAnswer === 0).length
  }
])

const QuizResultPieChart = ({ questions }) => {
  const data = formatToPieChartInput(questions)
  return (
    <ResponsiveContainer
    >
      <PieChart
        width={400}
        height={400}
      >
        <Pie
          data={data}
          dataKey="value"
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
        >
          {
            data.map((entry, index) => <Cell key={entry.name} fill={COLORS[entry.name.toLowerCase()]} />)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default QuizResultPieChart;
