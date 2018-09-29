import React, { Component } from 'react';
import FlexView from 'react-flexview';
import 'react-flexview/lib/flexView.css';

class App extends Component {
  render() {
    return (
      <div>
        <FlexView column hAlignContent='center' vAlignContent='center' marginTop={56}>
          <FlexView>loading...</FlexView>
        </FlexView>
      </div>
    );
  }
}

export default App;
