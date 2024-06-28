import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from './slice'
import { todoSelector } from "./selectors";



const Todo = ({ id }) => {
    const todo = useSelector(state => todoSelector(state, id));
    const dispatch = useDispatch();
    console.log('render todo', id);
    return (
        <div>
            <input key={todo.id} value={todo.value} disabled></input>
            <button>edit</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
            <button>complete</button>
        </div>);
}

export default Todo;