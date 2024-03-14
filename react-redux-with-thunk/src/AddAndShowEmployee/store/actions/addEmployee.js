import { createAction, nanoid } from '@reduxjs/toolkit';
import { ADD_EMPLOYEE } from './actionTypes';

export default createAction(ADD_EMPLOYEE, (employee) => {
    return {
        payload: {
            employee,
            id: nanoid(),
            createdAt: new Date().toISOString()
        }
    }
});
