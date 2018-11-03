import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth/store/reducer'
import planetReducer from './planets/store/reducer'

export default combineReducers({
  auth: authReducer,
  planets: planetReducer,
  form: formReducer
})
