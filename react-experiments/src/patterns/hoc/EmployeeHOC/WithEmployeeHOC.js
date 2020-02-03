import React, { Component } from 'react';

const employees = [
  { id: 1, name: "Trushant", department: "IT" },
  { id: 2, name: "Doke", department: "MANAGEMENT" }
];

export default function WithEmployee(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { employees: [] };
    }
    componentDidMount() {
      setTimeout(() => this.setState({ employees }), 500); // mock async
    }
    render() {
      return (
        <WrappedComponent {...this.props} employees={this.state.employees} />
      );
    }
  };
}
