import { configureStore } from '@reduxjs/toolkit'
import counterAReducer from './ExampleOne/counterA/slice'
import counterBReducer from './ExampleOne/counterB/slice'
import todosReducer from './ExampleTwo/slice'

export const store = configureStore({
  reducer: {
    counterA: counterAReducer,
    counterB: counterBReducer,
    todos: todosReducer
  },
})