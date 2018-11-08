export const actionTypes = {
  START_PROGRESS_BAR: "START_PROGRESS_BAR",
  STOP_PROGRESS_BAR: "STOP_PROGRESS_BAR",
}

export const startProgressBar = () => ({ type: actionTypes.START_PROGRESS_BAR })
export const stopProgressBar = () => ({ type: actionTypes.STOP_PROGRESS_BAR })