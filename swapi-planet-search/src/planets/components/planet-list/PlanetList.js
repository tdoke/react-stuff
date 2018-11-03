import React from 'react'

const PlanetList = ({ planets }) => (
  <div>
    {
      planets.map((planet, index) => 
        <div key={index} style={{ fontSize: (100+index*20)+'%' }}>
          <span>{planet.name}</span><span>({planet.population})</span>
        </div>
      )
    }
  </div>
)
export default PlanetList