import {useState} from 'react'
import List from './components/List'
import { TodoData } from './types';
import TodoDetails from './components/TodoDetails';

const todosFixed = [
  {
    text: 'Pasear el perro',
    description: 'Descripción de la tarea',
    isCompleted: false
  },
  {
    text: 'Almorzar afuera',
    isCompleted: true
  }
]

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState<number>(0);
  const [todos, setTodos] = useState<{ text: string, isCompleted: boolean }[]>(todosFixed);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-700">
      <div className="h-4/6 w-4/6 bg-white shadow-lg rounded-lg flex">
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-700">Todo List</h1>
          <List todos={todos} setTodos={setTodos} setSelectedTodo={setSelectedTodo}/>
        </div>
        <div className="w-1/2 bg-gray-400 p-4 rounded-r-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Todo Detail</h1>
          <TodoDetails key={selectedTodo} selectedTodo={selectedTodo} todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    </div>
  )
}

export default App
