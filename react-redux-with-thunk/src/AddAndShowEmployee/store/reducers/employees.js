import { createReducer } from "@reduxjs/toolkit";
import { fetchEmployees, deleteEmployee, postEmployee, updateEmployee } from "../actions/thunks";

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
        })
        .addCase(updateEmployee.fulfilled, (state, action) => {
            const indx = state.findIndex((emp) => emp.id === action.payload.id);
            state[indx] = action.payload;
        });
});


export default employeeReducer;
