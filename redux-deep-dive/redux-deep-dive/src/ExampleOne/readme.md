1] basic redux flow<br/>
user does some action in UI ---> redux action is dispatched ---> <br/>
root reducer reads the action and returns a new root state  (i.e action flows through all the slices.)<br/>
rootReducer(state, action) return newState.  -----><br/>
commponents subscribed to root state slices rerender.
<br/><br/>
2] useSelector behaviour: <br/>
lets your React components read data from the Redux store.<br/>
useSelector accepts a single function, which we call a selector function. A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result.<br/>
So, selectors can return values from the Redux store state, and also return derived values based on that state as well.<br/>
Fortunately, useSelector automatically subscribes to the Redux store for us! That way, any time an action is dispatched, it will call its selector function again right away. If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data. All we have to do is call useSelector() once in our component, and it does the rest of the work for us.<br/>
useSelector compares its results using strict === reference comparisons, so the component will re-render any time the selector result is a new reference! This means that if you create a new reference in your selector and return it, your component could re-render every time an action has been dispatched, even if the data really isn't different.<br/>
// Bad: always returning a new reference<br/>
const selectTodoDescriptions = state => {<br/>
  // This creates a new array reference!<br/>
  return state.todos.map(todo => todo.text)<br/>
}<br/>
<br/><br/>
3] If 2 components are reading from 2 different slices, then update of one component wouldn't cause another component to rerender.<br/>
     counterA updates ------> state.counterA, this wont cause counterB to rerender<br/>
     counterB updates -----------> state.counterB, this wont cause counterA to rerender<br/>
why this is happpening ? read section 2]<br/>
<br/><br/>
4] when reducer updates state.counterA, <br/>
     1] new redux root state object is created<br/>
     2] new state.counterA object is created, so state.counterA reference changes. components reading  state.counterA are rerendered.<br/>
     3] state.counterB object is not recreated. so state.counterB reference remains same. components reading  state.counterB are not rerendered.<br/>
