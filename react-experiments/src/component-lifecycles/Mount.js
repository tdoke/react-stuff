import React from 'react';

class MountExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      temp: ''
    }
    console.log('constructor called')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called with')
    console.log('props', props)
    console.log('state', state)

    return {
      temp: 'test'
    }
  }

  render() {
    console.log('render called')
    return (
      <h3>mount example, printing state {JSON.stringify(this.state)}</h3>
    )
  }

  componentDidMount() {
    console.log('componentDidMount called')
  }
}

export default MountExample;