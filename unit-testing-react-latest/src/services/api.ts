import { Todo, User } from '../types/api.types';

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  todos: {
    getAll: async (): Promise<Todo[]> => {
      const response = await fetch(`${API_URL}/todos`);
      if (!response.ok) throw new Error('Failed to fetch todos');
      return response.json();
    },
    
    getById: async (id: number): Promise<Todo> => {
      const response = await fetch(`${API_URL}/todos/${id}`);
      if (!response.ok) throw new Error(`Failed to fetch todo ${id}`);
      return response.json();
    },
    
    create: async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
      const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      });
      if (!response.ok) throw new Error('Failed to create todo');
      return response.json();
    },
    
    update: async (id: number, todo: Partial<Todo>): Promise<Todo> => {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      });
      if (!response.ok) throw new Error(`Failed to update todo ${id}`);
      return response.json();
    },
    
    delete: async (id: number): Promise<void> => {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(`Failed to delete todo ${id}`);
    },
  },

  users: {
    getAll: async (): Promise<User[]> => {
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
    
    getById: async (id: number): Promise<User> => {
      const response = await fetch(`${API_URL}/users/${id}`);
      if (!response.ok) throw new Error(`Failed to fetch user ${id}`);
      return response.json();
    },
  },
}; 