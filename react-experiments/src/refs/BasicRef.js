import React from 'react';

const BasicRef = () => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (<React.Fragment>
   please enter: <input ref={inputRef} />
  </React.Fragment>  );
}
 
export default BasicRef;