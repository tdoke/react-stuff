why use redux-toolkit
1] due to below api's configureStore, createAction, createReducer, createAsyncThunk its easier 
to integrate redux.
2] it uses immer by default for state manipulations
3] it automaticaly appends fulfilled | pending | rejected status to thunk actions created from 'createAsyncThunk'
4] The createSelector utility from the Reselect library, re-exported for ease of use.



