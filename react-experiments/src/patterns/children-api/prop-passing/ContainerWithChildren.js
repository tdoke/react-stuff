import React, { Component } from "react";

const employees = [{ test: "1-emp" }, { test: "2-emp" }, { test: "3-emp" }, { test: "4-emp" }];

class ContainerWithChildProp extends Component {
  constructor(props) {
    super(props);
    this.state = { employees };
  }
  render() {
    const { children } = this.props;
    return React.cloneElement(children, { list: this.state.employees });
  }
}

export default ContainerWithChildProp;
