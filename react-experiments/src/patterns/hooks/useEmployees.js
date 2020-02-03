import { useState, useEffect } from "react";
import fetchEmployees from "./fetchEmployees";

export function useEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(emps => setEmployees(emps));
  }, []);

  return employees;
}
/**
 * How useState and useEffect align themselves with life cycle of component where useEmployees() is called, is
 * Magic of Hooks.
 * Hooks provide a way of explicitly isolating state from a component, and still keep that state
 * linked to a components(where hook is called) lifecycle.
 * state(employees) and state modifying logic (line 8), is reused across components(List,Table).
 */
