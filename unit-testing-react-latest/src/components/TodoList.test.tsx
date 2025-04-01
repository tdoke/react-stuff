import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks/useTodos';

// Mock the useTodos hook
jest.mock('../hooks/useTodos');

describe('TodoList', () => {
  // Mock implementation of useTodos
  const mockToggleTodo = jest.fn();
  const defaultMockTodos = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading state', () => {
    (useTodos as jest.Mock).mockReturnValue({
      todos: [],
      loading: true,
      error: null,
      toggleTodo: mockToggleTodo
    });

    render(<TodoList />);
    expect(screen.getByText('Loading todos...')).toBeInTheDocument();
  });

  it('should show error state', () => {
    (useTodos as jest.Mock).mockReturnValue({
      todos: [],
      loading: false,
      error: 'Failed to fetch todos',
      toggleTodo: mockToggleTodo
    });

    render(<TodoList />);
    expect(screen.getByText('Error: Failed to fetch todos')).toBeInTheDocument();
  });

  it('should show empty state when no todos exist', () => {
    (useTodos as jest.Mock).mockReturnValue({
      todos: [],
      loading: false,
      error: null,
      toggleTodo: mockToggleTodo
    });

    render(<TodoList />);
    expect(screen.getByText('No todos found')).toBeInTheDocument();
  });

  it('should render list of todos', () => {
    (useTodos as jest.Mock).mockReturnValue({
      todos: defaultMockTodos,
      loading: false,
      error: null,
      toggleTodo: mockToggleTodo
    });

    render(<TodoList />);

    // Check if todos are rendered
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();

    // Check checkboxes
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });

  it('should call toggleTodo when checkbox is clicked', async () => {
    (useTodos as jest.Mock).mockReturnValue({
      todos: defaultMockTodos,
      loading: false,
      error: null,
      toggleTodo: mockToggleTodo
    });

    render(<TodoList />);

    // Click the first todo's checkbox
    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstCheckbox);

    expect(mockToggleTodo).toHaveBeenCalledWith(1, true);
  });

  it('should apply completed class to completed todos', () => {
    (useTodos as jest.Mock).mockReturnValue({
      todos: defaultMockTodos,
      loading: false,
      error: null,
      toggleTodo: mockToggleTodo
    });

    render(<TodoList />);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems[0]).not.toHaveClass('completed');
    expect(todoItems[1]).toHaveClass('completed');
  });
}); 