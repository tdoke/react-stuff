import React, { Component } from "react";
import List from "./List";

const employees = [{ test: 1 }, { test: 2 }, { test: 3 }, { test: 4 }];

class ContainerWithHardboundList extends Component {
  constructor(props) {
    super(props);
    this.state = { employees };
  }
  render() {
    return <List list={this.state.employees} />;
  }
}

export default ContainerWithHardboundList;