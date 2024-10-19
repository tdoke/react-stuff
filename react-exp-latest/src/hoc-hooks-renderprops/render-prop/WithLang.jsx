import { Component } from "react";

export default class WithLang extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "en" };
  }

  render() {
    return this.props.children(this.state);
  }
}
