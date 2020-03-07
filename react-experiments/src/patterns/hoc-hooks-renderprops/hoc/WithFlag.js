import React, { Component } from "react";

export function WithFlag(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        flagCountry: "IN"
      };
    }

    render() {
      return <WrappedComponent {...this.props} flag={this.state.flagCountry} />;
    }
  };
}
