import React from "react";
import { EmployeeContextProvider } from "./EmployeeContext";
import { useEmployee } from './useEmployee';
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";


function EmployeeContainer() {
  const employeeBag = useEmployee();

  return (
    <EmployeeContextProvider value={employeeBag}>
      <EmployeeForm />
      <EmployeeList />
    </EmployeeContextProvider>
  );
}

export default EmployeeContainer;
