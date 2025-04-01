import { useState, useEffect } from 'react';
import { Todo } from '../types/api.types';
import { api } from '../services/api';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const data = await api.todos.getAll();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string) => {
    try {
      const newTodo = await api.todos.create({ title, completed: false });
      setTodos(prevTodos => [...prevTodos, newTodo]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add todo');
      return false;
    }
  };

  const deleteTodo = async (todoId: number) => {
    try {
      await api.todos.delete(todoId);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo');
      return false;
    }
  };

  const toggleTodo = async (todoId: number, completed: boolean) => {
    try {
      await api.todos.update(todoId, { completed });
      setTodos(todos.map(todo => 
        todo.id === todoId ? { ...todo, completed } : todo
      ));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo');
      return false;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    toggleTodo,
    addTodo,
    deleteTodo,
    refreshTodos: fetchTodos
  };
}; 