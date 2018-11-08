import React from 'react'
import FlexView from 'react-flexview/lib';
import TextField from '@material-ui/core/TextField'
import './SearchPlanetBar.css'

const SearchPlanetBar = ({ onSearchInputChange }) => (
  <div className="search-planet-bar-container">
  <FlexView width={500}>
    <TextField
      label="Planet"
      fullWidth
      onChange={(event) => onSearchInputChange(event.target.value)}
    />
    </FlexView>
  </div>
)

export default SearchPlanetBar