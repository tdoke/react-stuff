import { startProgressBar, stopProgressBar } from './actions'
const progressBar = store => next => action => {
  const { dispatch } = store
  if (action.type && action.type.indexOf("_START") !== -1) {
    dispatch(startProgressBar())
  }
  if (action.type && (action.type.indexOf("_SUCCESS") !== -1 || action.type.indexOf("_FAILED") !== -1)) {
    dispatch(stopProgressBar())
  }
  next(action)
}

export default progressBar;
