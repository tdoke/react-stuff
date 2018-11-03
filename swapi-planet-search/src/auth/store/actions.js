import axios from 'axios'
export const actionTypes = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED"
}

export const login = ({ userName, password }) => {
  return dispatch => {
    dispatch(loginStart())
    axios
      .get(`https://swapi.co/api/people/?search=${userName}`)
      .then(response => response.data)
      .then(personData => {
        (personData.count === 1 && personData.results[0].birth_year === password) ?
          dispatch(loginSuccess(personData.results[0])) : 
          dispatch(loginFailed("invalid credentials"))
      })
      .catch(error => dispatch(loginFailed(error)))
  }
}

export const loginStart = () => ({ type: actionTypes.LOGIN_START })
export const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user
})
export const loginFailed = error => ({
  type: actionTypes.LOGIN_FAILED,
  payload: error
})
