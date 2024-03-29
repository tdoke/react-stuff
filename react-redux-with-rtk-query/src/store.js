import { configureStore } from '@reduxjs/toolkit';
import employees from './AddAndShowEmployee/store/reducers/employees';
import { jsonServerApi } from './api';

const reducer = {
  employees,
  [jsonServerApi.reducerPath]: jsonServerApi.reducer
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonServerApi.middleware),
});

export default store;