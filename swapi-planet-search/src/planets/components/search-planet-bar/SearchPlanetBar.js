import React from 'react'
import TextField from '@material-ui/core/TextField'
import './SearchPlanetBar.css'

const onChangeText = (event) => console.log(event.target.value)

const SearchPlanetBar = () => (
  <div className="search-planet-bar-container">
    <TextField
      label="Planet"
      fullWidth
      onChange={onChangeText}
    />
  </div>
)

export default SearchPlanetBar