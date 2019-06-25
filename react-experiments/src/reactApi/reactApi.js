// https://reactjs.org/docs/react-api.html
import React from 'react';

const { Component, PureComponent, memo } = React; // component creation base classes
const { createElement, createFactory, cloneElement, isValidElement, Children } = React; // create and transform react elements
const { Fragment } = React; // Fragments
const { createRef, forwardRef } = React; // create and use of refs
const { Suspense, lazy } = React; // suspense and lazy loading
const { useState } = React; // hooks

/*
React.Component = React.Component is the base class for React components when they are defined using ES6 classes:


React.PureComponent = React.PureComponent is similar to React.Component. The difference between them is that
React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a
shallow prop and state comparison.
React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects.
If these contain complex data structures, it may produce false-negatives for deeper differences.
Only extend PureComponent when you expect to have simple props and state, or use forceUpdate() when you know
deep data structures have changed. Or, consider using immutable objects to facilitate fast comparisons of nested data.




React.memo = ;

React.memo is a higher order component. It’s similar to React.PureComponent but for function components 
instead of classes.

If your function component renders the same result given the same props, you can wrap it in a call to React.memo 
for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

By default it will only shallowly compare complex objects in the props object. If you want control over the 
comparison, you can also provide a custom comparison function as the second argument.

This method only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can 
lead to bugs.

*/

const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);


createElement()
React.createElement(
  type, // 'div', 'h1', React component type (class or function) or fragment type 
  [props],
  [...children]
)

// React.Children provides utilities for dealing with the this.props.children opaque data structure.
const { count, map, forEach, only, toArray } = React.Children;


