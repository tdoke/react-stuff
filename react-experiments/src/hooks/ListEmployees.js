import React, { useEffect, useState } from 'react';
import { get } from './MockApi';

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log('fetch employees using useEffect')
    get()
      .then(employees => setEmployees(employees))
      .catch((error) => console.log(error))
  }, []) // passing empty array to useEffect making it run only after first render.

  return (
    <React.Fragment>
      <ul>
        {employees.map((emp) => <li key={emp.id}>{emp.name}</li>)}
      </ul>
    </React.Fragment>
  )
}

export default ListEmployees;