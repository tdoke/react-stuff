import React, { useState } from 'react';

const Count = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <React.Fragment>
      <label>count val: {count}</label>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </React.Fragment>
  )
}

export default Count;