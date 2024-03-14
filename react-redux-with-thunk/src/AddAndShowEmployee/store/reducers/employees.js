import { createReducer } from "@reduxjs/toolkit";
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, HTTP_GET_EMPLOYEES, HTTP_POST_EMPLOYEE, HTTP_DELETE_EMPLOYEE } from '../actions/actionTypes';

const initialState = [];


const employeeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(`${HTTP_GET_EMPLOYEES}/fulfilled`, (state, action) => {
            return action.payload;
        })
        .addCase(ADD_EMPLOYEE, (state, action) => {
            return [...state, action.payload.employee];
        })
        .addCase(`${HTTP_POST_EMPLOYEE}/fulfilled`, (state, action) => {
            return [...state, action.payload];
        })
        .addCase(`${HTTP_DELETE_EMPLOYEE}/fulfilled`, (state, action) => {
            return state.filter((emp) => emp.id !== action.payload.id);
        })
        .addCase(REMOVE_EMPLOYEE, (state, action) => {
            return state.filter((emp) => emp.id !== action.payload.employeeId);
        });

});


export default employeeReducer;
