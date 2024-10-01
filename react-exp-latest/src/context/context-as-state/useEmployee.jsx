import * as React from "react";

export function useEmployee() {
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

  const [state, dispatch] = React.useReducer(employeeReducer, initialState);

  function handleSubmit(employee) {
    dispatch({ type: ACTION_TYPES.ADD_EMPLOYEE, payload: employee });
  }

  return {
    ...state,
    handleSubmit
  };
}
