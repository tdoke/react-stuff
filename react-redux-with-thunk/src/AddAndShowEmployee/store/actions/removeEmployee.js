import { createAction, nanoid } from '@reduxjs/toolkit';
import { REMOVE_EMPLOYEE } from './actionTypes';

export default createAction(REMOVE_EMPLOYEE, (employeeId) => {
    return {
        payload: {
            employeeId,
            id: nanoid(),
            createdAt: new Date().toISOString()
        }
    }
});
