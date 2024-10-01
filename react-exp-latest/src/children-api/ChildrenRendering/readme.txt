There's also a lesser-known technique as well: if a React component returns the exact same element reference in its render 
output as it did the last time, React will skip re-rendering that particular child. There's at least a couple ways to 
implement this technique:

If you include props.children in your output, that element is the same if this component does a state update
If you wrap some elements with useMemo(), those will stay the same until the dependencies change

Conceptually, we could say that the difference between these two approaches is:

React.memo(): controlled by the child component
Same-element references: controlled by the parent component
For all of these techniques, skipping rendering a component means React will also skip rendering that entire subtree, 
because it's effectively putting a stop sign up to halt the default "render children recursively" behavior.