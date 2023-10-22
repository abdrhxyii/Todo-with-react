import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [input, setInput] = useState(task.task)

    const trackInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editTodo(input, task.id)
        setInput("")
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input value={input} onChange={trackInput} type='text' className='todo-input' placeholder='Update the task'/>
        <button type='submit' className='todo-btn '>Update task</button>
    </form>
  )
}

export default EditTodoForm