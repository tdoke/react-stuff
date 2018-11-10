import React from 'react'
import debounce from 'lodash/debounce'
import includes from 'lodash/includes'
import FlexView from 'react-flexview/lib'
import TextField from '@material-ui/core/TextField'
import Message from '../../../common/message/Message'
import './SearchPlanetBar.css'

const searchLimit = 15
const usersWithNoSearchLimits = ["Luke Skywalker"]

export default class SearchPlanetBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.debouncedOnSearchInputChange = debounce(this.debouncedOnSearchInputChange, 500)
  }

  debouncedOnSearchInputChange = (value) => {
    value.length && this.props.onSearchInputChange(value)
  }

  isTimeExpired = () => {
    const { currentSearchTimeLog } = this.props
    return currentSearchTimeLog && ((new Date().getTime() - currentSearchTimeLog.getTime()) / 60000) > 1
  }

  handleSearchInputChange = (event) => {
    if (this.isTimeExpired()) {
      this.props.onTimeLimitExpire()
      this.props.onSearchLimitShowMessage(false)
      this.debouncedOnSearchInputChange(event.target.value)
    } else {
      const { count } = this.props
      if (count <= searchLimit - 1 || includes(usersWithNoSearchLimits, this.props.currentUserName)) {
        this.debouncedOnSearchInputChange(event.target.value)
      } else {
        this.props.onSearchLimitShowMessage(true)
      }
    }
  }

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
        {
          this.props.searchLimitMessageFlag &&
          <FlexView marginTop={32}>
            <Message text={`only ${searchLimit} searches allowed in a minute`} />
          </FlexView>
        }
      </div>
    )
  }
}
