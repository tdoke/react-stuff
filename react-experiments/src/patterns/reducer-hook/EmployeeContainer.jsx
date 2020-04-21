import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const ACTION_TYPES = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE"
};
const initialState = { employees: [] };

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_EMPLOYEE:
      const employeesArr = [...state.employees, { ...action.payload }];
      return { ...state, employees: employeesArr };
    default:
      return state;
  }
}

function EmployeeContainer() {
  const [state, dispatch] = React.useReducer(employeeReducer, initialState);
  const handleSubmit = employee => {
    dispatch({ type: ACTION_TYPES.ADD_EMPLOYEE, payload: employee });
  }

  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} />
      <EmployeeList employees={state.employees} />
    </div>
  );
}

export default EmployeeContainer;
