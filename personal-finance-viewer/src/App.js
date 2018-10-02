import React, { Component } from 'react';
import FlexView from 'react-flexview';
import 'react-flexview/lib/flexView.css';
import BankSavingsBar from './bank-savings/components/bank-savings-bar/BankSavingsBar';

class App extends Component {
  render() {
    return (
      <div>
        <FlexView column hAlignContent='center' vAlignContent='center' marginTop={56}>
          <FlexView><BankSavingsBar /></FlexView>
        </FlexView>
      </div>
    );
  }
}

export default App;
