import React from 'react';
import { B } from './B';

export default class A extends React.Component {

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

  componentDidMount() {
    console.log("componentDidMount A")
  }

  render() {
    return (
      <div>
        <div>----------------PROP PASSING PARENT STATEFUL CHILDREN STATEFULL----------------------------------------------------------------</div>
        USER INPUT IN PARENT : <input value={this.state.userInput} onChange={this.handleInputChange} />
        <B parentState={this.state} />
        <div>--------------------------------------------------------------------------------</div>
      </div>
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate for A')
  }
}
