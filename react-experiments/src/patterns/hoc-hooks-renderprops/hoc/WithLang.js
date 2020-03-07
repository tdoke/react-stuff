import React, { Component } from "react";

export function WithLang(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { language: "en" };
    }

    render() {
      return <WrappedComponent {...this.props} lang={this.state.language} />;
    }
  };
}
