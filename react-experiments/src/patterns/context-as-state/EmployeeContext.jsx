import * as React from 'react';

const EmployeeContext = React.createContext({});
export const EmployeeContextProvider = EmployeeContext.Provider;
export const EmployeeContextConsumer = EmployeeContext.Consumer;

export function useEmployeeContext() {
  const employeeContext = React.useContext(EmployeeContext);
  return employeeContext;
}