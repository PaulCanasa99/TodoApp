import { useCallback } from 'react';
import List from './components/List';
import TodoDetails from './components/TodoDetails';
import { useTodoStore } from './store/todoStore';

const App = () => {
  const selectedTodo = useTodoStore(useCallback((state) => state.selectedTodoId, []));

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-700">
      <div className="h-5/6 w-5/6 bg-white shadow-lg rounded-lg flex">
        <div className="w-1/2 p-4 overflow-y-scroll">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-700">Todo List</h1>
          <List/>
        </div>
        <div className="w-1/2 bg-gray-400 p-4 rounded-r-lg flex flex-col overflow-y-scroll">
          <h1 className="text-3xl font-bold text-center mb-4">Todo Detail</h1>
          {selectedTodo !== null && <TodoDetails key={selectedTodo}/>}
        </div>
      </div>
    </div>
  )
};

export default App;
