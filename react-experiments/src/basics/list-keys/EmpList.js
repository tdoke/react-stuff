import React from 'react';

export const EmpList = ({ employees }) => (
  <ol>
    {
      employees.map(e => <li key={e.id}>{e.name}</li>)
    }
  </ol>
)

/*
Keys help React identify which items have changed, are added, or are removed. 
Keys should be given to the elements inside the array to give the elements a stable identity:
*/