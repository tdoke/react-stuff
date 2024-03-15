import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployee, deleteEmployee } from '../store/actions/thunks';

import AddEmployee from '../components/AddEmployee';
import ShowEmployee from '../components/ShowEmployee';

const AddAndShowEmployeesContainer = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    const saveEmployee = (emp) => dispatch(postEmployee({ ...emp, id: nanoid() }));
    const deleteEmp = (id) => dispatch(deleteEmployee(id));

    return (<>
        <AddEmployee saveEmployee={saveEmployee} />
        <ShowEmployee employees={employees} deleteEmployee={deleteEmp} />
    </>);
}

export default AddAndShowEmployeesContainer;