import { selectTodo, toggleCompleteTodo } from "../store/todoStore";
import { TodoData } from "../types";

const Todo = ({ todo }: { todo: TodoData}) => 
  <div 
    onClick={() => selectTodo(todo.id)} 
    className="flex p-3 text-sm rounded-lg border mt-4 justify-between 
  hover:bg-gray-500 transition text-gray-700 hover:text-gray-100 cursor-pointer">
    <svg
      onClick={() => toggleCompleteTodo(todo.id)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="transparent"
      stroke={todo.isCompleted ? 'transparent' : 'black'}
      strokeWidth="2"
      className="flex-none w-6 h-6 m-auto cursor-pointer"
      data-icon="check"
    >
      <circle cx="10" cy="10" r="8" fill={todo.isCompleted ? 'black' : 'transparent'} />
      {todo.isCompleted && (
        <g>
          <path
            d="M7 10 l2 2 l4 -4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg> 
    <span className="ml-2 flex-1 self-center flex ">{todo.title}</span>
  </div>

export default Todo;
