import { actionTypes } from './actions';

const defaultState = {
  searchPlanetResults: [],
  searchLog: {
    count: 0,
    currentSearchTimeLog: null
  },
  showSearchLimitMessage: false
}
export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_PLANET_SUCCESS:
      return { ...state, searchPlanetResults: [...action.payload] }
    case actionTypes.ADD_SEARCH_LOG:
      const newCount = state.searchLog.count + 1;
      return {
        ...state, searchLog: {
          count: newCount,
          currentSearchTimeLog: new Date()
        }
      }
    case actionTypes.RESET_SEARCH_LOG:
      return { ...state, searchLog: defaultState.searchLog }
    case actionTypes.SHOW_SEARCH_LIMIT_MESSAGE:
      return { ...state, showSearchLimitMessage: action.payload }
    default:
      return state
  }
}