import React, { useState, useEffect } from 'react';

function CouterParent() {
    const [count, setCount] = useState(0);
    const [mf, setMF] = useState(1);
    const [mft, setMFT] = useState(1);
    return (<>
        {count > 0 && <CounterView count={count} mft={mft} />}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment by 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <div>
            <input value={mf} onChange={(e) => setMF(e.target.value)}></input>
            <button onClick={() => setMFT(mf)}>Multiply by {mf}</button>
        </div>
    </>);
}

function CounterView({ count, mft }) {
    useEffect(() => {
        console.log("useEffect run after render for mft", mft);
        return () => console.log("useEffect cleanup for mft", mft);
    }, [mft]);

    return (<div>{count*mft}</div>);
}

export default CouterParent;