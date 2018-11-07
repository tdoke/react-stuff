import React, { Component } from 'react';
import { TimeTicker } from './jsx/TimeTicker';
import { User } from './components-props/User';
import { Clock } from './state-lifecycle/Clock';
import { Printer } from './event-handling/Printer';
import { EmpListCotainer } from './list-keys/EmpListContainer';
import { NameForm } from './forms/NameForm';
import { ContextApp } from './context/ContextApp';
import { GetInput } from './state-lifecycle/LogLIfeCycles';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeTicker />
        <User name="trushant" address="102,prathmesh" />
        <Clock />
        <Printer />
        <EmpListCotainer />
        <NameForm />
        <ContextApp />
        <GetInput />
      </div>
    );
  }
}

export default App;
