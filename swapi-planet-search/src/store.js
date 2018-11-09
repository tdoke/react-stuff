import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import progressBar from './common/progress-bar/store/middleware'
import reducers from './reducers'

export default createStore(
  reducers,
  applyMiddleware(progressBar, thunk, logger)
);