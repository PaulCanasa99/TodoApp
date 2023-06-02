import { useCallback, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TodoData } from "../types";
import { removeTodo, selectTodo, updateTodo, useTodoStore } from "../store/todoStore";

const TodoDetails = () => {
  const todos = useTodoStore(useCallback((state) => state.todos, []));
  const selectedTodoId = useTodoStore(useCallback((state) => state.selectedTodoId, []));
  const [todo, setTodo] = useState<TodoData>(todos.find(todo => todo.id === selectedTodoId) || {} as TodoData);

  const priorities : TodoData["priority"][] = ['low', 'medium', 'high']; 

  const saveTodo = () => {
    updateTodo(todo);
  };

  const deleteTodo = () => {
    removeTodo(todo.id);
    selectTodo(todo.id);
  };

  return (
    <div className="relative flex-1">
      <input type="text" value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} className="w-full border-2 border-gray-400 p-2 rounded-lg mb-4" placeholder="Title"/>
      <textarea value={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value})} className="w-full border-2 border-gray-400 p-2 rounded-lg mb-4" placeholder="Description"/>
      <div className="flex">
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
            Priority
          </label>
          <select value={todo.priority} onChange={(e) => setTodo({...todo, priority: e.target.value as TodoData["priority"]})} className="w-full border-2 border-gray-400 p-2 rounded-lg mb-4">
            {priorities.map(priority => 
              <option key={priority} value={priority}>{priority.charAt(0).toUpperCase() + priority.slice(1)}</option>
            )}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <DatePicker selected={todo.date} onChange={date => date != null && setTodo({...todo, date})} className="w-full border-2 border-gray-400 p-2 rounded-lg mb-4" placeholderText="Select a date"/>
        </div>
      </div>
      <div className="flex justify-between absolute bottom-0 w-full">
        <button onClick={deleteTodo} className="bg-red-500 text-white p-2 rounded-lg">Delete</button>
        <button onClick={saveTodo} className="bg-green-500 text-white p-2 rounded-lg">Save changes</button>
      </div>
    </div>
  );
};

export default TodoDetails