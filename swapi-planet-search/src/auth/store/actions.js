export const actionTypes = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED"
}

export const loginStart = ({usernName, password}) => {
  // connect to swaapi
  // on success
  // 
} 

export const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user
})

export const loginFailed = error => ({
  type: actionTypes.LOGIN_FAILED,
  payload: error
})