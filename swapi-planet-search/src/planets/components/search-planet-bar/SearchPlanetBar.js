import React from 'react'
import TextField from '@material-ui/core/TextField'
import './SearchPlanetBar.css'

const SearchPlanetBar = ({ onSearchInputChange }) => (
  <div className="search-planet-bar-container">
    <TextField
      label="Planet"
      fullWidth
      onChange={(event) => onSearchInputChange(event.target.value)}
    />
  </div>
)

export default SearchPlanetBar