</br>1] useSelector returning new reference in each render, forcing component to rerender each time even though prop value remain same. component Todos.
</br> getting message in console.
</br>
Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization 