import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState("")

    const trackInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(input)
        setInput()
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input value={input} onChange={trackInput} type='text' className='todo-input' placeholder='Add your task'/>
        <button type='submit' className='todo-btn '>Add task</button>
    </form>
  )
}

export default TodoForm