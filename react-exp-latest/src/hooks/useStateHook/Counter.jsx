import { useState } from "react";

const initPrimaryCount = () => {
    let primaryCount = 0;
    // expensive operation
    for (let index = 0; index < 10000; index++) {
        primaryCount = primaryCount + 1;
    }
    console.log('initPrimaryCount');
    return primaryCount;
}
const Counter = () => {
    const [primaryCount, setPrimaryCount] = useState(initPrimaryCount);
    const [countKey, setCountKey] = useState(1);
    const [count, setCount] = useState(10);
    const resetCount = () => setCountKey(prevCountKey => prevCountKey + 1);
    const increment = () => {
        //setCount(count + 1);
        setCount(prevCount => prevCount + 1);
        console.log(count);
    };
    const decrement = () => {
        //setCount(count - 1);
        setCount(prevCount => prevCount - 1);
        console.log(count);
    };

    return (<div key={countKey}>
        {primaryCount}<br/>
        {count}
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={resetCount}>reset count</button>
        </div>
    </div>);
}

export default Counter;