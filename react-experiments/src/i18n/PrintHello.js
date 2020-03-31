import React, { Component } from "react";
import withTrans from "./WithTrans";

class HelloComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { i18n } = this.props;
    return <label>hi, {i18n("common.hello")}</label>;
  }
}

export default withTrans(HelloComponent);
