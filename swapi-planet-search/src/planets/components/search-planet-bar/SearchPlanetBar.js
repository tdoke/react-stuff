import React from 'react'
import debounce from 'lodash/debounce'
import FlexView from 'react-flexview/lib'
import TextField from '@material-ui/core/TextField'
import './SearchPlanetBar.css'

export default class SearchPlanetBar extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { onSearchInputChange } = this.props;
    return (
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
  }
}
