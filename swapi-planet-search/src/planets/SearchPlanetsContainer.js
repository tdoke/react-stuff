import React from 'react'
import FlexView from 'react-flexview/lib'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPlanet } from './store/actions'
import SearchPlanetBar from './components/search-planet-bar/SearchPlanetBar'

const SearchPlanetsContainer = ({ searchPlanet }) => (
  <div>
    <FlexView height={200}>
      <FlexView hAlignContent="center" vAlignContent="center" height='100%' width='100%'>
        <SearchPlanetBar onSearchInputChange={searchPlanet} />
      </FlexView>
    </FlexView>
  </div>
)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchPlanet }, dispatch)

export default connect(null, mapDispatchToProps)(SearchPlanetsContainer);


