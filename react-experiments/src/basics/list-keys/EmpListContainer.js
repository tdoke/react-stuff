import React from 'react';
import { EmpList } from './EmpList';
const Employees = [
  { id: 1, name: 'trushant'},
  { id: 2, name: 'doke'}
]

export const EmpListCotainer = () => (
  <EmpList employees={Employees} />
)