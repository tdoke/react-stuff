import React from 'react';
import { useEmployees } from './useEmployees';

export const Employees = () => {
  const employees = useEmployees()

  return (
    <React.Fragment>
      <ol>
        {employees.map((emp) => <li key={emp.id}>{emp.name}</li>)}
      </ol>
    </React.Fragment>
  )
}