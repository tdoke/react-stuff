import { createReducer } from "@reduxjs/toolkit";
import { fetchEmployees, deleteEmployee, postEmployee } from "../actions/thunks";

const initialState = [];

const employeeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(postEmployee.fulfilled, (state, action) => {
            return [...state, action.payload];
        })
        .addCase(deleteEmployee.fulfilled, (state, action) => {
            return state.filter((emp) => emp.id !== action.payload.id);
        });
});


export default employeeReducer;
