import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(process.env.endpoint)
    return (<div>
      <h2>This is App component: </h2>
    </div>);
  }
}

export default App;