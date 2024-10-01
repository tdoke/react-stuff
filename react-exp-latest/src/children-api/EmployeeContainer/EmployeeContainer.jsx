import React, { Component, useEffect, useState } from "react";
const employeesArr = [
  { id: 1, name: "Trushant", department: "IT" },
  { id: 2, name: "Doke", department: "MANAGEMENT" }
];

export default function EmployeeContainer({ children }) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    setTimeout(() => setEmployees(employeesArr), 500); // mock async
  }, []);

  return React.cloneElement(children, { employees });
}
