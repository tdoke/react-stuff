import React from 'react';
import Button from '@material-ui/core/Button';
import FlexView from 'react-flexview/lib';

export const QuizStart = ({ onStartBtnClick }) => (
  <div>
    <FlexView column hAlignContent='center' marginTop={48}>
      <FlexView>
        <h1>Cricket Quiz</h1>
      </FlexView>
      <FlexView column marginTop={32}>
        <FlexView marginBottom={16}>
          <FlexView hAlignContent='left' marginRight={32}>Total Questions</FlexView>
          <FlexView hAlignContent='right' marginLeft={32}>10</FlexView>
        </FlexView>
        <FlexView>
          <FlexView hAlignContent='left' marginRight={32} grow>Passing</FlexView>
          <FlexView hAlignContent='right' marginLeft={32} basis={16}>80%</FlexView>
        </FlexView>
      </FlexView>
      <FlexView column hAlignContent='center' marginTop={48}>
        <Button
          variant="contained"
          color="primary"
          aria-label="start"
          onClick={onStartBtnClick}>
          START
            </Button>
      </FlexView>
    </FlexView>
  </div>
)
