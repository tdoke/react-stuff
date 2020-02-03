import React, { useEffect, useState } from "react";
import fetchEmployees from "./fetchEmployees";

const Table = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(emps => setEmployees(emps));
  }, []);
  
  return (
    <table>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td style={{ textAlign: "left", padding: "0.2rem" }}>{emp.name}</td>
            <td style={{ textAlign: "left", padding: "0.2rem" }}>
              {emp.department}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
