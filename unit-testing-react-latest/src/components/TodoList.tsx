import { useTodos } from '../hooks/useTodos';
import './TodoList.css';

export const TodoList = () => {
  const { todos, loading, error, toggleTodo } = useTodos();

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (todos.length === 0) return <div>No todos found</div>;

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul className="todos">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, !todo.completed)}
            />
            <span className="todo-title">{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 