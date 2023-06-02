import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { useTodoStore } from '../store/todoStore';
import List from '../components/List';

vi.mock('../store/todoStore', () => ({
  useTodoStore: vi.fn()
}));

describe('List component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders AddTodo and Todo components for each todo', () => {
    const todos = [
      { id: '1', title: 'Todo 1', isCompleted: false },
      { id: '2', title: 'Todo 2', isCompleted: false },
      { id: '3', title: 'Todo 3', isCompleted: false }
    ];

    useTodoStore.mockReturnValue(todos);

    const { container, getAllByText } = render(<List />);
    const addTodoButton =  container.querySelector("[data-icon='add']") as HTMLImageElement;

    const todoList = getAllByText(/Todo/);

    expect(addTodoButton).toBeInTheDocument();
    expect(todoList.length).toBe(todos.length);
  });
});
