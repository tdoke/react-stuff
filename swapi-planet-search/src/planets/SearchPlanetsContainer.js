import React from 'react'
import FlexView from 'react-flexview/lib'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPlanet } from './store/actions'
import SearchPlanetBar from './components/search-planet-bar/SearchPlanetBar'
import PlanetList from './components/planet-list/PlanetList'
 
const SearchPlanetsContainer = ({ searchPlanet, searchPlanetsResult }) => (
  <div>
    <FlexView column marginTop={56}>
      <FlexView hAlignContent="center">
        <SearchPlanetBar onSearchInputChange={searchPlanet} />
      </FlexView>
      <FlexView marginTop={96} hAlignContent="center">
        <PlanetList planets={searchPlanetsResult} />
      </FlexView>
    </FlexView>
  </div>
)

const mapStateToProps = (state) => ({
  searchPlanetsResult: state.planets.searchPlanetResults
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchPlanet }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanetsContainer);


