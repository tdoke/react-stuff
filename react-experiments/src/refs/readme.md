ref = reference to actual dom element.
1] you can execute dom level functions like .focus() on ref to input
2] close search results panel, when user clicks somewhere in page. create a ref and pass it to input component
3] close tooltip when user clicks anywhere else on page. create a ref and pass it to tooltip component


In rare cases, you might want to have access to a child’s DOM node from a parent component. This is generally not recommended because it breaks component encapsulation, but it can occasionally be useful for triggering focus or measuring the size or position of a child DOM node.

While you could add a ref to the child component, this is not an ideal solution, as you would only get a component instance rather than a DOM node. Additionally, this wouldn’t work with function components.

If you use React 16.3 or higher, we recommend to use ref forwarding for these cases. Ref forwarding lets components opt into exposing any child component’s ref as their own. You can find a detailed example of how to expose a child’s DOM node to a parent component in the ref forwarding documentation.

https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components