import React from 'react'
import FlexView from 'react-flexview/lib'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPlanet, resetSearchLog, showSearchLimitMessage } from './store/actions'
import SearchPlanetBar from './components/search-planet-bar/SearchPlanetBar'
import PlanetList from './components/planet-list/PlanetList'

const SearchPlanetsContainer = ({ searchLog,
  currentUserName,
  searchLimitMessageFlag,
  showSearchLimitMessage,
  searchPlanet,
  resetSearchLog,
  searchPlanetsResult }) => (
    <div>
      <FlexView column marginTop={56}>
        <FlexView hAlignContent="center">
          <SearchPlanetBar
            {...searchLog}
            currentUserName={currentUserName}
            searchLimitMessageFlag={searchLimitMessageFlag}
            onSearchLimitShowMessage={showSearchLimitMessage}
            onSearchInputChange={searchPlanet}
            onTimeLimitExpire={resetSearchLog} />
        </FlexView>
        <FlexView marginTop={56} hAlignContent="center">
          <PlanetList planets={searchPlanetsResult} />
        </FlexView>
      </FlexView>
    </div>
  )

const mapStateToProps = (state) => ({
  searchPlanetsResult: state.planets.searchPlanetResults,
  searchLog: state.planets.searchLog,
  searchLimitMessageFlag: state.planets.showSearchLimitMessage,
  currentUserName: state.auth.user.name
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchPlanet, resetSearchLog, showSearchLimitMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanetsContainer);


