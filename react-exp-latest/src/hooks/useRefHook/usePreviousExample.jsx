import { useState, useEffect, useRef } from "react";

const usePreviousTest = (value) => {
  // create a new reference
  const refTest = useRef();

  // store current value in ref
  useEffect(() => {
    refTest.current = value;
  }, [value]); // only re-run if value changes

  // return previous value (happens before update in useEffect above)
  return refTest.current;
};

const Example = () => {
  const [count, setCount] = useState(0);

  // get the previous value passed into the hook on the last render
  const prevCount = usePreviousTest(count);

  // show both current and previous value
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Example;