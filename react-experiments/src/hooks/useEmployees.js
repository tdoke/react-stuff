import { useState, useEffect } from 'react';
import { get } from './MockApi';

export const useEmployees = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log('fetch employees using useEffect')
    get()
      .then(employees => setEmployees(employees))
      .catch((error) => console.log(error))

    return () => console.log('componentDidMount clean up, using useEffect return function')
  }, []) // passing empty array to useEffect making it run only after first render.

  return employees;

}