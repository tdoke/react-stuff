import React from 'react';

const PrintPosition = ({x, y}) => {
  return (
    <React.Fragment>
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({x}, {y})
      </p>
    </React.Fragment>
  );
};

export default PrintPosition;
