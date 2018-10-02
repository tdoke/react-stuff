import { combineReducers } from 'redux';
import bankSavingsReducer from './bank-savings/store/reducer';
import { bankDetailsDialogReducer } from './bank-savings/components/bank-detail-dialog/store';

export default combineReducers({
  bankSavings: bankSavingsReducer,
  bankDetailsDialog: bankDetailsDialogReducer
})
