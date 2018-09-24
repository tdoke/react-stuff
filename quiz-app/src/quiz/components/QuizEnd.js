import React from 'react';
import FlexView from 'react-flexview/lib';
import QuizResultPieChart from './QuizResultPieChart';

const calculateScore = (questions) => {
  const totalQuestions = questions.length;
  const correctQuestions = questions.filter(q => q.answer === q.usersAnswer).length;
  return 100 * correctQuestions / totalQuestions;
}

export const QuizEnd = ({ questions }) => (
  <div>
    <FlexView column hAlignContent='center' marginTop={48}>
      <FlexView>
        <h1>Cricket Quiz Result</h1>
      </FlexView>
      <FlexView column marginTop={16}>
        <FlexView marginBottom={16} hAlignContent='center'>
          <FlexView hAlignContent='left' marginRight={32} style={{ width: '40%' }}>Total Questions</FlexView>
          <FlexView hAlignContent='right' marginLeft={32} style={{ width: '40%' }}>{questions.length}</FlexView>
        </FlexView>
        <FlexView marginBottom={16} hAlignContent='center'>
          <FlexView hAlignContent='left' marginRight={32} style={{ width: '40%' }}>Score</FlexView>
          <FlexView hAlignContent='right' marginLeft={32} style={{ width: '40%' }}>{calculateScore(questions)}&nbsp;%</FlexView>
        </FlexView>
        <FlexView>
          <QuizResultPieChart questions={questions} />
        </FlexView>
      </FlexView>
    </FlexView>

  </div >
)
