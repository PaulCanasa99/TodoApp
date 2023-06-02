import { useCallback } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { useTodoStore } from "../store/todoStore";

const List = () => {
  const todos = useTodoStore(useCallback((state) => state.todos, []));
  console.log({todos});
  return (
    <div className="list">
      <AddTodo/>
      {todos.map((todo) => 
        <Todo key={todo.id} todo={todo}/>
      )}
    </div>
  );
};

export default List;