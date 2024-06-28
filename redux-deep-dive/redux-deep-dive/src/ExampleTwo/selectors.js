import { createSelector } from "@reduxjs/toolkit"

const selectTodos = state => state.todos
const selectTodoId = (state, todoId) => todoId

export const todosIdSelector = createSelector([selectTodos], todos => todos.map(todo => todo.id))
export const todoSelector = createSelector([selectTodos, selectTodoId], (todos, todoId) => todos.find(todo => todo.id === todoId))
