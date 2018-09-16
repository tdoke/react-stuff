import React from 'react';
import FlexView from 'react-flexview/lib';

const calculateScore = (questions) => {
  const totalQuestions = questions.length;
  const correctQuestions = questions.filter(q => q.answer === q.usersAnswer).length;
  return 100*correctQuestions/totalQuestions;
}

export const QuizEnd = ({ questions }) => (
  <div>
    <FlexView column hAlignContent='center' marginTop={48}>
      <FlexView>
        <h1>Cricket Quiz Result</h1>
      </FlexView>
      <FlexView column marginTop={32}>
        <FlexView marginBottom={16}>
          <FlexView hAlignContent='left' marginRight={32}>Total Questions</FlexView>
          <FlexView hAlignContent='right' marginLeft={32}>{questions.length}</FlexView>
        </FlexView>
        <FlexView>
          <FlexView hAlignContent='left' marginRight={32} grow>Score</FlexView>
          <FlexView hAlignContent='right' marginLeft={32} basis={16}>{calculateScore(questions)}&nbsp;%</FlexView>
        </FlexView>
      </FlexView>
    </FlexView>
  </div>
)
