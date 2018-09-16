import { combineReducers } from 'redux';
import quizReducer from './quiz/store/reducer';
import questionsReducer from './questions/store/reducer';

export default combineReducers({
  quiz: quizReducer,
  questions: questionsReducer
})
