import { createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_GET_EMPLOYEES, HTTP_POST_EMPLOYEE, HTTP_DELETE_EMPLOYEE } from "./actionTypes";
import { makeGet, makePost, makeDelete } from '../../../http/baseApi';

export const fetchEmployees = createAsyncThunk(HTTP_GET_EMPLOYEES, async () => {
    const resp = await makeGet("/employees");
    return resp.data;
});

export const postEmployee = createAsyncThunk(HTTP_POST_EMPLOYEE, async (employee) => {
    const resp = await makePost("/employees", employee);
    return resp.data;
});

export const deleteEmployee = createAsyncThunk(HTTP_DELETE_EMPLOYEE, async (id, thunkConfig) => {
    const resp = await makeDelete(`/employees/${id}`);
    return resp.data;
});

/* 
thunkConfig, it has
interface ThunkAPI {
  dispatch: Function
  getState: Function
  extra?: any
  requestId: string
  signal: AbortSignal
}
*/