import { createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_GET_EMPLOYEES, HTTP_POST_EMPLOYEE, HTTP_DELETE_EMPLOYEE } from "./actionTypes";
import { makeGet, makePost, makeDelete } from '../../../http/baseApi';


export const fetchEmployees = createAsyncThunk(HTTP_GET_EMPLOYEES, () => {
    return makeGet("/employees")
        .then(resp => resp.data);
});

export const postEmployee = createAsyncThunk(HTTP_POST_EMPLOYEE, (employee) => {
    return makePost("/employees", employee)
        .then(resp => resp.data);
});

export const deleteEmployee = createAsyncThunk(HTTP_DELETE_EMPLOYEE, (id) => {
    return makeDelete(`/employees/${id}`)
        .then(resp => resp.data);
});