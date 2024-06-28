import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import { AddTodo } from "./AddTodo"
import { todosIdSelector } from "./selectors"


export const Todos = () => {
    // const todos = useSelector(state => state.todos.map(todo => todo.id));
    const todos = useSelector(todosIdSelector);
    console.log('render todos');
    return (<>
        <AddTodo />
        {todos && todos.map(id => <Todo key={id} id={id} />)}
    </>);
}