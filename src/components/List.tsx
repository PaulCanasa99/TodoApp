import {useState} from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';
import { TodoData } from '../types';

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

interface ListProps {
  todos: TodoData[]
  setTodos: (todos: TodoData[]) => void
  setSelectedTodo: (todoIndex: number) => void
}

const List = ({todos, setTodos, setSelectedTodo} : ListProps) => {

  const addTodo = (text: string) => {
    const newTodos = [...todos, {text, isCompleted: false}];
    setTodos(newTodos);
  }

  const completeTodo = (todoIndex: number) => {
    const updatedTodos = todos.map((todo, index) => index === todoIndex ? {...todo, isCompleted: !todo.isCompleted} : todo);
    setTodos(updatedTodos);
  }
  
  const removeTodo = (todoIndex: number) => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  }

  const selectTodo = (todoIndex: number) => {
    console.log(todoIndex);
    setSelectedTodo(todoIndex);
  }

  return (
    <div className="list">
      <AddTodo addTodo={addTodo}/>
      {todos.map((todo, index) => 
        <Todo
          key={index}
          todo={todo}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          selectTodo={selectTodo}
        />
      )}
    </div>
  );
};

export default List;