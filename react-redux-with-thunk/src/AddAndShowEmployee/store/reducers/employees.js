import { createReducer } from "@reduxjs/toolkit";
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from '../actions/actionTypes';

const initialState = [];


const employeeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_EMPLOYEE, (state, action) => {
            return [...state, action.payload.employee];
        })
        .addCase(REMOVE_EMPLOYEE, (state, action) => {
            return state.filter((emp) => emp.id !== action.payload.employeeId);
        });

});


export default employeeReducer;
