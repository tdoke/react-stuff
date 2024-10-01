import React from 'react';

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item.test}</li>
      ))}
    </ul>
  );
};

export default List;
