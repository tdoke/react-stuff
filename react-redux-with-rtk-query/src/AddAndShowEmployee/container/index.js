import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployee, deleteEmployee, fetchEmployees, updateEmployee } from '../store/actions/thunks';

import AddORUpdateEmployee from '../components/AddORUpdateEmployee';
import ShowEmployee from '../components/ShowEmployee';



const AddAndShowEmployeesContainer = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    const [employeeToUpdateId, setEmployeeToUpdateId] = useState("");
    const empToUpdate = employees.find(({ id }) => id === employeeToUpdateId);

    const addEmpApi = (emp) => dispatch(postEmployee({ ...emp, id: nanoid() }));
    const deleteEmpApi = (id) => dispatch(deleteEmployee(id));
    const updateEmpApi = (emp) => {
        dispatch(updateEmployee(emp));
        setEmployeeToUpdateId("")
    }

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (<>
        <AddORUpdateEmployee saveEmployee={empToUpdate ? updateEmpApi : addEmpApi} employeeToUpdate={empToUpdate} />
        <ShowEmployee employees={employees} deleteEmployee={deleteEmpApi} setEmployeeToUpdateId={setEmployeeToUpdateId} />
    </>);
}

export default AddAndShowEmployeesContainer;