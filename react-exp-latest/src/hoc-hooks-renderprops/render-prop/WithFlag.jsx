import { Component } from "react";

export default class WithFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagCountry: "IN"
    };
  }

  render() {
    return this.props.children(this.state);
  }
}
