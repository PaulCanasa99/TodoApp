import { useState } from "react";
import { TodoData } from "../types";

interface TodoDetailsProps {
  selectedTodo: number
  todos: TodoData[]
  setTodos: (todos: TodoData[]) => void
}

const TodoDetails = ({selectedTodo, todos, setTodos}: TodoDetailsProps) => {
  // const todo = todos[selectedTodo];
  const [todo, setTodo] = useState<TodoData>(todos[selectedTodo]);

  const saveTodo = () => {
    const updatedTodos = todos.map((todo, index) => index === selectedTodo ? {...todo, text: todo.text} : todo);
    setTodos(updatedTodos);
  };

  const deleteTodo = () => {
    setTodos(todos.filter((_, index) => index !== selectedTodo));
  };

  return (
    <>
      <input type="text" value={todo.text} onChange={(e) => setTodo({...todo, text: e.target.value})} className="w-full border-2 border-gray-400 p-2 rounded-lg mb-4" placeholder="Title"/>
      <textarea value={todo.description} onChange={(e) => setTodo({...todo, text: e.target.value})} className="w-full border-2 border-gray-400 p-2 rounded-lg mb-4" placeholder="Description"/>
      <div className="flex justify-between">
        <button className="py-2 px-4 bg-green-400 text-white rounded-lg" onClick={saveTodo}>Save</button>
        <button className="py-2 px-4 bg-red-400 text-white rounded-lg" onClick={deleteTodo}>Delete</button>
      </div>
      <div className="flex justify-between mt-4">
        <button className="py-2 px-4 bg-yellow-400 text-white rounded-lg">Cancel</button>
        <button className="py-2 px-4 bg-blue-400 text-white rounded-lg">Mark as completed</button>
      </div>
    </>
  );
};

export default TodoDetails