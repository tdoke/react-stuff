import React from 'react';

export class C extends React.Component {

  state = {
    stateOfC: {

    }
  }

  componentDidMount() {
    console.log("componentDidMount C")
  }

  render() {
    return (
      <div>
        {`PROPS PASSED TO C ${JSON.stringify(this.props)}`}
      </div>
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate for C')
  }
}
