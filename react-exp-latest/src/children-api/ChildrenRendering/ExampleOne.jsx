import React, { useState } from 'react';

// The `props.children` content won't re-render if we update state
function SomeProvider({ children }) {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Count: {counter}</button>
            {/* <OtherChildComponent /> */}
            {children}
        </div>
    );
}

function OtherChildComponent() {
    console.log("OtherChildComponent: rendering");
    return (<>Other Child component</>);
}

function ExampleOne() {
    return (<><SomeProvider>
        <OtherChildComponent />
    </SomeProvider></>);
}

export default ExampleOne;

