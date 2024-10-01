import React from "react";

const Table = ({ employees }) => {
  return (
    <table>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td style={{ textAlign: "left", padding: "0.2rem" }}>{emp.name}</td>
            <td style={{ textAlign: "left", padding: "0.2rem" }}>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
