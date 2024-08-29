import React, { useState, useEffect } from 'react';

function CouterParent() {
    const [count, setCount] = useState(0);
    return (<>
        {count > 0 && <CounterView count={count} />}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment by 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>);
}

function CounterView({ count }) {
    useEffect(() => {
        console.count("useEffect run after render");
        return () => console.count("useEffect cleanup");
    });

    return (<div>{count}</div>);
}

export default CouterParent;