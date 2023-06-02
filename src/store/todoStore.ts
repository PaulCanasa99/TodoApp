import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from "uuid";
import { TodoData } from '../types';

interface TodoStore {
  todos: TodoData[];
  selectedTodoId: string | null;
};

const dateReviver = (key: string, value: string) => {
  if (key === 'date') {
    return new Date(value);
  }
  return value;
};

const todoStorage = {
  getItem: (value: string) => JSON.parse(localStorage.getItem(value) ?? '', dateReviver),
  setItem: (name: string, value: any) => localStorage.setItem(name, JSON.stringify(value)),
  removeItem: (name: string) => localStorage.removeItem(name),
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (_) => ({
      todos: [],
      selectedTodoId: null
    }),
    {
      name: 'todoStore',
      storage: todoStorage
    },
  )
);

export const addTodo = (title: string): string => {
  const newTodoId = uuidv4();
  useTodoStore.setState((state) => ({
    todos: [
      ...state.todos,
      {
        id: newTodoId,
        title,
        description: '',
        isCompleted: false,
        date: new Date(),
        priority: 'low'
      }
    ]
  }));
  return newTodoId;
};
export const removeTodo = (id: string) => useTodoStore.setState((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
export const updateTodo = (todo: TodoData) => useTodoStore.setState((state) => ({ todos: state.todos.map((t) => (t.id === todo.id ? todo : t)) }));
export const toggleCompleteTodo = (id: string) => useTodoStore.setState((state) => ({ todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)) }));
export const selectTodo = (id: string) => useTodoStore.setState((state) => ({ selectedTodoId: state.selectedTodoId === id ? null : id }));