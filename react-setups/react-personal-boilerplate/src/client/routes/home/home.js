import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<div>
      <Helmet><title>Home</title></Helmet>
      <h2>This is home component</h2>
    </div>);
  }
}

export default Home;