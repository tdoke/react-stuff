import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { Question } from '../../questions/components/Question';
import { QuizStart } from '../components/QuizStart';
import { QuizEnd } from '../components/QuizEnd';
import { actions as questionActions } from '../../questions/store/actions';
import { actions as quizActions } from '../store/actions';
import './QuizContainer.css';

const QuizContainer = ({
  quiz,
  questions,
  startQuiz,
  endQuiz,
  setAnswer,
  setCurrentQuestion }) => (
    <div>
      <Paper elavation={3} className='quiz-container'>
        {
          (!quiz.start && !quiz.end) &&
          <QuizStart onStartBtnClick={() => startQuiz(true)} />
        }
        {
          (quiz.end) &&
          <QuizEnd questions={questions} />
        }
        {
          quiz.start && (
            <div>
              <Question
                {...questions[quiz.currentQuestion]}
                isLast={questions.length === (quiz.currentQuestion + 1)}
                onAnswerRadioBtnClick={setAnswer}
                onLastAnswerSubmit={() => {
                  startQuiz(false)
                  endQuiz(true)
                }}
              />
              {
                !(questions.length === (quiz.currentQuestion + 1)) &&
                <div className='btn-right-icon'>
                  <Button
                    variant="fab"
                    color="primary"
                    aria-label="right"
                    onClick={() => setCurrentQuestion(quiz.currentQuestion + 1)}>
                    <ChevronRight />
                  </Button>
                </div>
              }
              <div className='btn-left-icon'>
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="left"
                  onClick={() =>
                    quiz.currentQuestion === 0 ?
                      startQuiz(false) : setCurrentQuestion(quiz.currentQuestion - 1)}>
                  <ChevronLeft />
                </Button>
              </div>
            </div>
          )
        }
      </Paper>
    </div>
  )

const mapStateToProps = (state) => ({
  quiz: state.quiz,
  questions: state.questions
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...quizActions, ...questionActions }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
