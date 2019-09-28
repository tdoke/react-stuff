import React from 'react';

const userLoggedIn = false;
const withLoginDetails = (ChildComponent) => {

  class ComposedComponent extends React.Component {
    render() {
      return (
        <div>
          {
            userLoggedIn ? <ChildComponent {...this.props} /> : <h2>User not logged in</h2>
          }
        </div>
      )
    }
  }

  return ComposedComponent;
}

export default withLoginDetails;