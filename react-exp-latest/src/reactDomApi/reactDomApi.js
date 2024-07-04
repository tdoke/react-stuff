import ReactDom from 'react-dom';

const { render, hydrate, unmountComponentAtNode, findDOMNode, createPortal } = ReactDom;

/*
ReactDOM.render(element, container[, callback])

Render a React element into the DOM in the supplied container and return a reference to the component
(or returns null for stateless components).

If the React element was previously rendered into container, this will perform an update on it and
only mutate the DOM as necessary to reflect the latest React element.

If the optional callback is provided, it will be executed after the component is rendered or updated.


ReactDOM.createPortal(child, container)
Creates a portal. Portals provide a way to render children into a DOM node that exists
outside the hierarchy of the DOM component.

*/