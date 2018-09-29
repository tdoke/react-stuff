import { combineReducers } from 'redux';
import bankSavingsReducer from './bank-savings/store/reducer';

export default combineReducers({
  bankSavings: bankSavingsReducer
})
