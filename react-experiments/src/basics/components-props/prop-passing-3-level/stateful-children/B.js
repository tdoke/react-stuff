import React from 'react';
import { C } from './C';

export class B extends React.Component {

  state = {
    stateOfB: {

    }
  }

  componentDidMount() {
    console.log("componentDidMount B")
  }

  render() {
    return (
      <div>
        {`PROPS PASSED TO B ${JSON.stringify(this.props)}`}
        <C {...this.props} />
      </div>
    )

  }

  componentDidUpdate() {
    console.log('componentDidUpdate for B')
  }
}
