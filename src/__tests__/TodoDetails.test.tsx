import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { removeTodo, selectTodo, updateTodo, useTodoStore } from "../store/todoStore";
import TodoDetails from '../components/TodoDetails';

vi.mock('../store/todoStore', () => ({
  removeTodo: vi.fn(),
  selectTodo: vi.fn(),
  updateTodo: vi.fn(),
  useTodoStore: vi.fn().mockResolvedValue({ id: '1', title: 'Do the laundry', description: '', priority: 'low', date: new Date(), isCompleted: false, selectedTodoId: '1' }),
}));

describe('TodoDetails component', () => {
  const mockTodo = { id: '1', title: 'Do the laundry', description: '', priority: 'low', date: new Date() };
  
  it('should render the todo title', () => {
    const { getByPlaceholderText } = render(<TodoDetails />);
    expect(getByPlaceholderText('Title')).toBeInTheDocument();
  });
  
//   it('should update the todo title', () => {
//     const { getByPlaceholderText } = render(<TodoDetails />);
//     fireEvent.change(getByPlaceholderText('Title'), { target: { value: 'Do the dishes' } });
//     expect(getByPlaceholderText('Title')).toHaveValue('Do the dishes');
//   });

//   it('should update the todo description', () => {
//     const { getByPlaceholderText } = render(<TodoDetails />);
//     fireEvent.change(getByPlaceholderText('Description'), { target: { value: 'Wash the dishes in the sink' } });
//     expect(getByPlaceholderText('Description')).toHaveValue('Wash the dishes in the sink');
//   });

//   it('should update the todo priority', () => {
//     const { getByDisplayValue } = render(<TodoDetails />);
//     fireEvent.change(getByDisplayValue('Low'), { target: { value: 'medium' } });
//     expect(getByDisplayValue('Medium')).toBeInTheDocument();
//   });
  
//   it('should call removeTodo when delete button is clicked', () => {
//     const { getByText } = render(<TodoDetails />);
//     fireEvent.click(getByText('Delete'));
//     expect(removeTodo).toHaveBeenCalledWith(mockTodo.id);
//     expect(selectTodo).toHaveBeenCalledWith(mockTodo.id);
//   });

//   it('should call updateTodo when save button is clicked', () => {
//     const { getByText } = render(<TodoDetails />);
//     fireEvent.click(getByText('Save changes'));
//     expect(updateTodo).toHaveBeenCalledWith(mockTodo);
//   });
});
