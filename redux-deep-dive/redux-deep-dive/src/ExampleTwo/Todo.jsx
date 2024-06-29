import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from './slice'
import { todoSelector } from "./selectors";
import { useState } from 'react';


const DisabledEdit = ({ todo, toggleEdit }) => (<>
    <input value={todo.value} disabled></input>
    <button onClick={toggleEdit} disabled={todo.complete}>edit</button>
</>)

const EditTodo = ({ todo, saveEditedTodo }) => {
    const [todoValue, setTodoValue] = useState(todo.value)

    return (<>
        <input value={todoValue} onChange={e => setTodoValue(e.target.value)}></input>
        <button onClick={() => {
            saveEditedTodo({ id: todo.id, value: todoValue })
        }}>save</button>
    </>)
}

const DeleteTodo = ({ todo, saveDeletedTodo }) => (<button
    disabled={todo.complete}
    onClick={() => saveDeletedTodo(todo.id)}>delete</button>)

const CompleteTodo = ({ todo, saveCompletedTodo }) => (<button
    disabled={todo.complete}
    onClick={() => {
        saveCompletedTodo({ id: todo.id, complete: true })
    }}>complete</button>
)

const Todo = ({ id }) => {
    const todo = useSelector(state => todoSelector(state, id))
    const dispatch = useDispatch()
    const [edit, toggleEdit] = useState(false)

    console.log('render todo', id);
    return (
        <div>
            {
                !edit && (<DisabledEdit
                    todo={todo}
                    toggleEdit={() => toggleEdit(!edit)}
                />)
            }
            {
                edit && (<EditTodo
                    todo={todo}
                    saveEditedTodo={(editedTodo) => {
                        dispatch(updateTodo(editedTodo))
                        toggleEdit(!edit)
                    }} />)
            }
            <DeleteTodo
                todo={todo}
                saveDeletedTodo={(todoId) => dispatch(removeTodo(todoId))}
            />
            <CompleteTodo
                todo={todo}
                saveCompletedTodo={(todo) => {
                    dispatch(updateTodo(todo))
                }}
            />
        </div>);
}

export default Todo;