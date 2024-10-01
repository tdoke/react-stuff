import React from "react";
const EmployeeList = ({ employees }) => {
  return (
    <ol>
      {employees.map(e => (
        <li key={e.id}>
          {e.name}({e.department})
        </li>
      ))}
    </ol>
  );
};

export default EmployeeList;
