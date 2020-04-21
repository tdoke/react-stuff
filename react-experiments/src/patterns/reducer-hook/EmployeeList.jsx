import PropTypes from "prop-types";
import React from "react";

const EmployeeList = ({ employees = [] }) => {
  return (
    <ol>
      {employees.length > 0 && employees.map((emp, index) => (
        <li key={index}>{`${emp.firstName}, ${emp.lastName}`}</li>
      ))}
    </ol>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array
}

export default EmployeeList;
