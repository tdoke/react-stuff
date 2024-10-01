import React from "react";
import { useEmployeeContext } from "./EmployeeContext";

const EmployeeList = () => {
  const { employees } = useEmployeeContext();
  return (
    <ol>
      {employees.length > 0 &&
        employees.map((emp, index) => (
          <li key={index}>{`${emp.firstName}, ${emp.lastName}`}</li>
        ))}
    </ol>
  );
};

export default EmployeeList;
