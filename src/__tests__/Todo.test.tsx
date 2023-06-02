import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Todo from '../components/Todo';
import { selectTodo, toggleCompleteTodo } from "../store/todoStore";
import { TodoData } from '../types';

vi.mock('../store/todoStore', () => ({
  selectTodo: vi.fn(),
  toggleCompleteTodo: vi.fn()
}));

describe('Todo component', () => {
  const mockTodo: TodoData= { id: '1', title: 'Test todo', isCompleted: false, description: '', date: new Date(), priority: 'low'};
  
  it('should render the todo title', () => {
    const { getByText } = render(<Todo todo={mockTodo} />);
    expect(getByText('Test todo')).toBeInTheDocument();
  });
  
  it('should call selectTodo when clicked', () => {
    const { getByText } = render(<Todo todo={mockTodo} />);
    fireEvent.click(getByText('Test todo'));
    expect(selectTodo).toHaveBeenCalledWith(mockTodo.id);
  });
  
  it('should call toggleCompleteTodo when check is clicked', () => {
    const { container, getByText } = render(<Todo todo={mockTodo} />);
    const check =  container.querySelector("[data-icon='check']") as HTMLImageElement;
    fireEvent.click(check);
    expect(toggleCompleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
