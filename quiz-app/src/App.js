import React, { Component } from 'react';
import FlexView from 'react-flexview';
import QuizContainer from './quiz/containers/QuizContainer';
import 'react-flexview/lib/flexView.css';
import './assets/css/font_lato.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FlexView column hAlignContent='center' vAlignContent='center' marginTop={56}>
          <FlexView><QuizContainer /></FlexView>
        </FlexView>
      </div>
    );
  }
}

export default App;
