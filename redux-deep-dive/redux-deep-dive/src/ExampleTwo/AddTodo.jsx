import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './slice'

export const AddTodo = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    return (<>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={() => dispatch(addTodo(todo))}>Add</button>
    </>)
}