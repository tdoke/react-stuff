import React from 'react';

export class A extends React.Component {

  state = {
    userInput: '',
    inputMeta: {
      length: 0
    }
  }

  handleInputChange = (event) => this.setState({
    userInput: event.target.value,
    inputMeta: event.target.value.length
  })

  render() {
    return (
      <div>
        <div>----------------PROP PASSING PARENT STATEFUL CHILDREN STATELESS----------------------------------------------------------------</div>
        USER INPUT IN PARENT : <input value={this.state.userInput} onChange={this.handleInputChange} />
        <B parentState={this.state} />
        <div>--------------------------------------------------------------------------------</div>
      </div>
    )

  }
}

const B = (props) => <div>
  {`PROPS PASSED TO B ${JSON.stringify(props)}`}
  <C {...props} />
</div>

const C = (props) => <div>{`PROPS PASSED TO C ${JSON.stringify(props)}`}</div>
