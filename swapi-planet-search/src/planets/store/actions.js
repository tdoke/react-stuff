import axios from 'axios'
export const actionTypes = {
  SEARCH_PLANET_START: "SEARCH_PLANET_START",
  SEARCH_PLANET_SUCCESS: "SEARCH_PLANET_SUCCESS",
  SEARCH_PLANET_FAILED: "SEARCH_PLANET_FAILED",
  ADD_SEARCH_LOG: "ADD_SEARCH_LOG",
  RESET_SEARCH_LOG: "RESET_SEARCH_LOG",
  SHOW_SEARCH_LIMIT_MESSAGE: "SHOW_SEARCH_LIMIT_MESSAGE"

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
  return item1.population - item2.population;
})

export const addSearchLog = () => ({ type: "ADD_SEARCH_LOG" })
export const resetSearchLog = () => ({ type: "RESET_SEARCH_LOG" })
export const showSearchLimitMessage = (flag) => ({ type: "SHOW_SEARCH_LIMIT_MESSAGE", payload: flag })

export const searchPlanet = name => {
  return dispatch => {
    dispatch(searchPlanetStart())
    axios
      .get(`https://swapi.co/api/planets/?search=${name}`)
      .then(response => response.data)
      .then(data => ({
        unknownPupulationPlanets: data.results.filter(planet => isNaN(planet.population)),
        knownPupulationPlanets: data.results.filter(planet => !isNaN(planet.population))
      }))
      .then(({ unknownPupulationPlanets, knownPupulationPlanets }) => {
        dispatch(searchPlanetSuccess([...unknownPupulationPlanets, ...sortByPopultaion(knownPupulationPlanets)]))
        dispatch(addSearchLog())
      })
      .catch(error => dispatch(searchPlanetFailed(error)))
  }
}
