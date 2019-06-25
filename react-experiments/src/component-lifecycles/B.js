import React from 'react';

export class B extends React.Component {

  state = {

  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called')
    console.log('props', props)
    console.log('state', state)
    return {}
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate called')
    return true;
  }

  render() {
    console.log('render called')
    return (
      <div>
        {`PROPS PASSED TO B ${JSON.stringify(this.props)}`}
      </div>
    )

  }

  componentDidUpdate() {
    console.log('componentDidUpdate called')
  }
}
