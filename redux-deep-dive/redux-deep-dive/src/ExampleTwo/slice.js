import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, { payload }) {
            state.push({ id: state.length + 1, value: payload })
        },
        removeTodo(state, { payload }) {
            const indexToRemove = state.findIndex(todo => todo.id === payload)
            state.splice(indexToRemove, 1)
        },
        updateTodo(state, { payload }) {
            const { id } = payload
            const indexToUpdate = state.findIndex(todo => todo.id === id)
            state[indexToUpdate] = { ...state[indexToUpdate], ...payload }
        }
    },
})

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer