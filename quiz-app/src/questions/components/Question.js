import React from 'react';
import FlexView from 'react-flexview/lib';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './Question.css';

export const Question = ({ 
  id,
  questionText,
  options,
  usersAnswer,
  isLast,
  onAnswerRadioBtnClick,
  onLastAnswerSubmit }) => (

    <div className="question">
      <FlexView marginBottom={16} marginTop={48} hAlignContent="left">
        <label className="question-label">{questionText}</label>
      </FlexView>
      <FlexView marginBottom={16} hAlignContent="left">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="question"
            name="question"
            value={String(usersAnswer)}
            onChange={(event) => onAnswerRadioBtnClick(id, Number(event.target.value))}>
            {
              options.map(option =>
                <FormControlLabel
                  key={option.id}
                  value={String(option.id)}
                  control={<Radio />}
                  label={option.text} />
              )
            }
          </RadioGroup>
        </FormControl>
      </FlexView>
      { isLast && 
      <FlexView hAlignContent="center">
        <Button
          variant="contained"
          color="primary"
          aria-label="start"
          onClick={onLastAnswerSubmit}>
          SUBMIT
      </Button>
      </FlexView>
      }
    </div>
  )