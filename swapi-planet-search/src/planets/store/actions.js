import axios from 'axios'
export const actionTypes = {
  SEARCH_PLANET_START: "SEARCH_PLANET_START",
  SEARCH_PLANET_SUCCESS: "SEARCH_PLANET_SUCCESS",
  SEARCH_PLANET_FAILED: "SEARCH_PLANET_FAILED"
}

const searchPlanetStart = () => ({
  type: actionTypes.SEARCH_PLANET_START
})
const searchPlanetSuccess = planets => ({
  type: actionTypes.SEARCH_PLANET_SUCCESS,
  payload: planets
})
const searchPlanetFailed = () => ({
  type: actionTypes.SEARCH_PLANET_FAILED
})
const sortByPopultaion = (data) => data.sort((item1, item2) => {
  if (isNaN(item1.population) || isNaN(item2.population)) return -1;
  return item1.population - item2.population;
})

export const searchPlanet = name => {
  return dispatch => {
    dispatch(searchPlanetStart())
    axios
      .get(`https://swapi.co/api/planets/?search=${name}`)
      .then(response => response.data)
      .then(data => {
        dispatch(searchPlanetSuccess(sortByPopultaion(data.results)))
      })
      .catch(error => dispatch(searchPlanetFailed(error)))
  }
}
