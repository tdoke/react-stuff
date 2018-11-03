import React from 'react'
import FlexView from 'react-flexview/lib'
import SearchPlanetBar from './components/search-planet-bar/SearchPlanetBar'
export const SearchPlanetsContainer = () => (
  <div>
    <FlexView height={200}>
      <FlexView hAlignContent="center" vAlignContent="center" height='100%' width='100%'>
        <SearchPlanetBar />
      </FlexView>
    </FlexView>
  </div>
)