import React, { useEffect, useState } from "react";
import fetchEmployees from "./fetchEmployees";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(emps => setEmployees(emps));
  }, []);
  
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
