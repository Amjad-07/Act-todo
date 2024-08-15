import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const {add} = props
    const {setAdd} = props
    
    return (<>
        <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow' >
            <h1 className='text-2xl font-medium'>Today Activities</h1>
            
            { add.length===0?<p>you haven't added any activities yet</p>:
                add.map((item, index) => {
                    return <TodoItem setAdd={setAdd} id={item.id} item={item} index={index} add={add} />
                })
            }

            

        </div>
    </>
    )
}

export default TodoList