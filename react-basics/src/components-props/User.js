import React from 'react';
import { Address } from './Address';

export class User extends React.Component {

  render() {
    const { name, address } = this.props;
    return (
      <div>
        Users name is: {name}
        <Address address={address} />
      </div>
    )

  }
}