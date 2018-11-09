import React from 'react'
import debounce from 'lodash/debounce'
import FlexView from 'react-flexview/lib'
import TextField from '@material-ui/core/TextField'
import './SearchPlanetBar.css'

export default class SearchPlanetBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.debouncedOnSearchInputChange = debounce(this.debouncedOnSearchInputChange, 500)
  }

  debouncedOnSearchInputChange = (value) => {
    value.length && this.props.onSearchInputChange(value)
  }

  handleSearchInputChange = (event) => this.debouncedOnSearchInputChange(event.target.value)

  render() {
    return (
      <div className="search-planet-bar-container">
        <FlexView width={500}>
          <TextField
            label="Planet"
            fullWidth
            autoFocus={true}
            onChange={this.handleSearchInputChange}
          />
        </FlexView>
      </div>
    )
  }
}
