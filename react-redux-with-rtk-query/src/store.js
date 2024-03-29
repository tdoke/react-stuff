import { configureStore } from '@reduxjs/toolkit';
import employees from './AddAndShowEmployee/store/reducers/employees';
import { rtkQueryApi } from './rtkQueryApi';

const reducer = {
  employees,
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryApi.middleware),
});

export default store;