import React from 'react';

const PrintInput = class extends React.Component {
  componentWillMount() {
    // executed before rendering component
    /*
    Called immediately before mounting occurs, and before Component#render. Avoid introducing any side-effects or 
    subscriptions in this method.
    */
    console.log("componentWillMount")
  }
  componentDidMount() {
    /*
    Called immediately after a component is mounted. Setting state here will trigger re-rendering.

    is executed after the first render only on the client side. This is where AJAX requests and DOM or state 
    updates should occur. This method is also used for integration with other JavaScript frameworks and any 
    functions with delayed execution such as setTimeout or setInterval.
    */
    console.log("componentDidMount")
  }
  componentWillReceiveProps(nextProps) {
    /* 
    called when props passed to component are changed
    */
    console.log("componentWillReceiveProps", JSON.stringify(nextProps))
  }
  shouldComponentUpdate(nextProps, nextState) {
    /*
    Called to determine whether the change in props and state should trigger a re-render.
    Component always returns true. PureComponent implements a shallow comparison on props and state and returns true 
    if any props or states have changed.
    If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.
    */
    console.log("shouldComponentUpdate")
    return true;
  }
  componentWillUpdate() {
    /* 
    Called immediately before rendering when new props or state is received. Not called for the initial render.
    */
    console.log("componentWillUpdate")
  }
  componentDidUpdate() {
    /* 
    Called immediately after updating(Component#render) occurs. Not called for the initial render.
    */
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    /**
     * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as 
     * cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
     * 
     */
    console.log("componentWillUnmount")
  }
  render() {
    console.log("render")
    return (<h3>{this.props.name}</h3>)
  }
}

export const GetInput = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.onNameInputChange = this.onNameInputChange.bind(this)
  }
  onNameInputChange = (event) => {
    this.setState({ name: event.target.value })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onNameInputChange} />
        <PrintInput name={this.state.name} />
      </div>
    )
  }
}

/**
 * 1] lifecycle order of execution when component mounts  to DOM
 * componentWillMount => render => componentDidMount
 * 
 * 2] lifecycle order of execution when component gets new properties
 * componentWillReceiveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate
 */