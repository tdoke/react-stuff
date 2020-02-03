import React from "react";
import { useEmployees } from "./useEmployees";

const EmployeeList = () => {
  const employees = useEmployees();
  
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
