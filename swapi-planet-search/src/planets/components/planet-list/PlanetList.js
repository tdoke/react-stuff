import React from 'react'
import FlexView from 'react-flexview/lib';
import './PlanetList.css'

const PlanetList = ({ planets }) => (
  <div className="planet-list-container">
    <FlexView column>
      {
        planets.map((planet, index) =>
          <FlexView className="planet-row" key={index} width={800}>
            <FlexView hAlignContent="left" width="50%">{planet.name}</FlexView>
            <FlexView hAlignContent="right" width="50%">{planet.population}</FlexView>
          </FlexView>
        )
      }
    </FlexView>
  </div>
)
export default PlanetList