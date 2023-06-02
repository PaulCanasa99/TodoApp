import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { addTodo, selectTodo } from '../store/todoStore';
import AddTodo from '../components/AddTodo';

vi.mock('../store/todoStore', () => ({
  addTodo: vi.fn(),
  selectTodo: vi.fn()
}));

describe('AddTodo component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders input and button', () => {
    const { container, getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new task...');
    const button =  container.querySelector("[data-icon='add']") as HTMLImageElement;

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('calls addTodo and selectTodo with correct arguments when adding todo', () => {
    const { container, getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new task...');
    const button =  container.querySelector("[data-icon='add']") as HTMLImageElement;

    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(button);

    expect(addTodo).toHaveBeenCalledWith('New todo');
    expect(selectTodo).toHaveBeenCalled();
  });

  test('does not call addTodo or selectTodo when adding empty todo', () => {
    const { container } = render(<AddTodo />);
    const button =  container.querySelector("[data-icon='add']") as HTMLImageElement;

    fireEvent.click(button);

    expect(addTodo).not.toHaveBeenCalled();
    expect(selectTodo).not.toHaveBeenCalled();
  });

  test('calls handleAddTodo when Enter key is pressed', () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new task...');

    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(addTodo).toHaveBeenCalledWith('New todo');
    expect(selectTodo).toHaveBeenCalled();
  });
});
