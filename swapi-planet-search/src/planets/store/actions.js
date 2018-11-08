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
  return item1.population - item2.population;
})

export const searchPlanet = name => {
  return dispatch => {
    dispatch(searchPlanetStart())
    axios
      .get(`https://swapi.co/api/planets/?search=${name}`)
      .then(response => response.data)
      .then(data => {
        const unknownPupulationPlanets = data.results.filter(planet => isNaN(planet.population));
        const knownPupulationPlanets = data.results.filter(planet => !isNaN(planet.population));
        dispatch(searchPlanetSuccess([...unknownPupulationPlanets, ...sortByPopultaion(knownPupulationPlanets)]));
      })
      .catch(error => dispatch(searchPlanetFailed(error)))
  }
}
