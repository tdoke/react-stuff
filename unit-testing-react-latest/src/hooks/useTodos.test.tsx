import { renderHook, act } from '@testing-library/react';
import { useTodos } from './useTodos';
import { api } from '../services/api';

// Mock the api module
jest.mock('../services/api', () => ({
  api: {
    todos: {
      getAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe('useTodos', () => {
  const mockTodos = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (api.todos.getAll as jest.Mock).mockResolvedValue(mockTodos);
  });

  it('should fetch todos on mount', async () => {
    const { result } = renderHook(() => useTodos());

    // Initially loading should be true
    expect(result.current.loading).toBe(true);

    // Wait for the fetch to complete
    await act(async () => {
      await Promise.resolve();
    });

    // After fetch completes
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.todos).toEqual(mockTodos);
    expect(api.todos.getAll).toHaveBeenCalledTimes(1);
  });

  it('should handle fetch error', async () => {
    const error = new Error('Failed to fetch');
    (api.todos.getAll as jest.Mock).mockRejectedValue(error);

    const { result } = renderHook(() => useTodos());

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Failed to fetch');
    expect(result.current.todos).toEqual([]);
  });

  it('should add a new todo', async () => {
    const newTodo = { id: 3, title: 'New Todo', completed: false };
    (api.todos.create as jest.Mock).mockResolvedValue(newTodo);

    const { result } = renderHook(() => useTodos());

    // Wait for initial fetch
    await act(async () => {
      await Promise.resolve();
    });

    // Add new todo
    await act(async () => {
      const success = await result.current.addTodo('New Todo');
      expect(success).toBe(true);
    });

    expect(api.todos.create).toHaveBeenCalledWith({
      title: 'New Todo',
      completed: false,
    });
    expect(result.current.todos).toEqual([...mockTodos, newTodo]);
    expect(result.current.error).toBeNull();
  });

  it('should delete a todo', async () => {
    const { result } = renderHook(() => useTodos());

    // Wait for initial fetch
    await act(async () => {
      await Promise.resolve();
    });

    // Delete todo
    await act(async () => {
      const success = await result.current.deleteTodo(1);
      expect(success).toBe(true);
    });

    expect(api.todos.delete).toHaveBeenCalledWith(1);
    expect(result.current.todos).toEqual([mockTodos[1]]);
    expect(result.current.error).toBeNull();
  });

  it('should toggle a todo', async () => {
    const { result } = renderHook(() => useTodos());

    // Wait for initial fetch
    await act(async () => {
      await Promise.resolve();
    });

    // Toggle todo
    await act(async () => {
      const success = await result.current.toggleTodo(1, true);
      expect(success).toBe(true);
    });

    expect(api.todos.update).toHaveBeenCalledWith(1, { completed: true });
    expect(result.current.todos[0].completed).toBe(true);
    expect(result.current.error).toBeNull();
  });
}); 