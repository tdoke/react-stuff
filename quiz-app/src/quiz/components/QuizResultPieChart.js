import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import FlexView from 'react-flexview/lib';
import './QuizResultPieChart.css';

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

const formatToPercentage = (questions) => (
  {
    correct: 100 * questions.filter(q => q.answer === q.usersAnswer).length / questions.length,
    wrong: 100 * questions.filter(q => q.usersAnswer !== 0 && q.answer !== q.usersAnswer).length / questions.length,
    skipped: 100 * questions.filter(q => q.usersAnswer === 0).length / questions.length
  }
)
const QuizResultPieChart = ({ questions }) => {
  const data = formatToPieChartInput(questions)
  const { correct, wrong, skipped } = formatToPercentage(questions)
  return (
    <div className='pie-chart-container'>
      <FlexView>
        <FlexView hAlignContent='left'>
          <PieChart height={200} width={300}>
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
                data.map((entry, index) => <Cell key={entry.name} fill={COLORS[entry.name.toLowerCase()]} />)
              }
            </Pie>
          </PieChart>
        </FlexView>
        <FlexView column hAlignContent='left' marginTop={40} className='chart-stat'>
          <FlexView marginBottom={8} style={{ width: '100%' }}>
            <FlexView hAlignContent='left' vAlignContent='center' marginRight={8} style={{ width: '20%' }}><div className='color-box correct'></div></FlexView>
            <FlexView hAlignContent='left' vAlignContent='center' style={{ width: '60%' }} marginRight={16}>Correct</FlexView>
            <FlexView hAlignContent='right' vAlignContent='center' style={{ width: '20%' }}>{correct}%</FlexView>
          </FlexView>
          <FlexView marginBottom={8} style={{ width: '100%' }}>
            <FlexView hAlignContent='left' vAlignContent='center' marginRight={8} style={{ width: '20%' }}><div className='color-box wrong'></div></FlexView>
            <FlexView hAlignContent='left' vAlignContent='center' style={{ width: '60%' }} marginRight={16}>Wrong</FlexView>
            <FlexView hAlignContent='right' vAlignContent='center' style={{ width: '20%' }}>{wrong}%</FlexView>
          </FlexView>
          <FlexView marginBottom={8} style={{ width: '100%' }}>
            <FlexView hAlignContent='left' vAlignContent='center' marginRight={8} style={{ width: '20%' }}><div className='color-box not-attempted'></div></FlexView>
            <FlexView hAlignContent='left' vAlignContent='bottom' style={{ width: '60%' }} marginRight={16}>Not Attempted</FlexView>
            <FlexView hAlignContent='right' vAlignContent='center' style={{ width: '20%' }}>{skipped}%</FlexView>
          </FlexView>
        </FlexView>
      </FlexView>
    </div>
  )
}

export default QuizResultPieChart;
