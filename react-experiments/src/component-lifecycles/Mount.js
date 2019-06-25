import React from 'react';

class MountExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      temp: ''
    }
    console.log('constructor called')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called with')
    console.log('props', props)
    console.log('state', state)

    return {
      temp: 'test'
    }
  }

  render() {
    console.log('render called')
    return (
      <h3>mount example, printing state {JSON.stringify(this.state)}</h3>
    )

    /*
    Now that we have completed the first render pass, our render() method returns a single React Element. 
    This Element may have children elements. Those children may also have children, and so on.
    With the potential for an n depth tree of Elements, each of the Elements need to go through their own entire 
    life cycle process. Just like the parent Element, React creates a new instance for each child. They go through 
    construction, default props, initial state, componentWillMount() and render(). If the child has children, the process 
    starts again...all the way down.
    */
  }

  componentDidMount() {
    console.log('componentDidMount called')
    /* a component is not mounted until all react elements under it are resolved to html primitives */
  }
}

export default MountExample;