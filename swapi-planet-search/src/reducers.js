import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth/store/reducer'
import planetReducer from './planets/store/reducer'
import progressBarReducer from './common/progress-bar/store/reducer'

export default combineReducers({
  auth: authReducer,
  planets: planetReducer,
  progressBar: progressBarReducer,
  form: formReducer
})
