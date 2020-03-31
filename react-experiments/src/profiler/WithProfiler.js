import React, { Component } from "react";

function printRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  console.log('id', id);
  console.log('phase', phase);
  console.log('actualDuration', actualDuration);
  console.log('baseDuration', baseDuration);
  console.log('startTime', startTime);
  console.log('commitTime', commitTime);
  console.log('interactions', interactions);
}

export default function WithProfiler(profilerId, WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        // <Profiler id={profilerId} onRender={printRender}>
          <WrappedComponent {...this.props} />
        // </Profiler>
      );
    }
  };
}
