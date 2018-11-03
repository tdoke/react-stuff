import { actionTypes } from './actions';

const defaultState = {
  searchPlanetResults: []
}
export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_PLANET_SUCCESS:
      return { ...state, searchPlanetResults: [...action.payload] }
    default:
      return state
  }
}