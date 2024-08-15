import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import { useState } from 'react'

const TodoContainer = () => {
    const [add, setAdd] = useState([
        {
            id: 1,
            act: "Wake up early"
        },
        {
            id: 2,
            act: "Go for a run"
        }
    ])
    
    return (
        <div className='flex gap-5 align-middle flex-wrap'  >
            <AddTodoForm add={add} setAdd={setAdd}></AddTodoForm>
                
                <TodoList add={add} setAdd={setAdd}></TodoList>
        </div>
    )
}

export default TodoContainer