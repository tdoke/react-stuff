import React from 'react';
import withLoginDetails from './WithLoginDetails';

class Comments extends React.Component {

  render() {

    return (
      <div>
        <h2>show comments layout</h2>
      </div>
    )
  }
}

export default withLoginDetails(Comments);