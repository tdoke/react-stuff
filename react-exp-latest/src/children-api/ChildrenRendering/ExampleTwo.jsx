import React, { useState, useMemo } from 'react';

function OptimizedParent() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const memoizedElement = useMemo(() => {
        // This element stays the same reference if counter 2 is updated,
        // so it won't re-render unless counter 1 changes
        return <ExpensiveChildComponent />;
    }, [counter1]);

    return (
        <div>
            <button onClick={() => setCounter1(counter1 + 1)}>
                Counter 1: {counter1}
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Counter 2: {counter2}
            </button>
            {memoizedElement}
        </div>
    );
}

function ExpensiveChildComponent() {
    console.log("ExpensiveChildComponent: rendering");
    return <>--ExpensiveChildComponent--</>;
}

export default OptimizedParent;

