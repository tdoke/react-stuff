import { configureStore } from '@reduxjs/toolkit';
import employees from './AddAndShowEmployee/store/reducers/employees';

const reducer = {
    employees
};

const store = configureStore({
  reducer,
});

export default store;