import {useState} from 'react'

interface AddTodoProps {
  addTodo: (text: string) => void
}

const AddTodo = ({addTodo} : AddTodoProps)  => {
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }
  
  return (
    <div className="flex p-3 text-sm rounded-lg border">
      <svg onClick={handleAddTodo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="flex-none w-6 h-6 m-auto cursor-pointer">
        <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
      </svg>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-gray-700 flex-auto bg-inherit ml-3 focus:outline-none"
        placeholder="Add a new task..."
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default AddTodo;