import React, { Component } from 'react';
import { RoutesConfig } from './common/routes/RoutesConfig';
import 'react-flexview/lib/flexView.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoutesConfig />
      </div>
    );
  }
}

export default App;
