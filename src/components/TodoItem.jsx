import React from 'react'

const TodoItem = (props) => {
    const {add}=props;
    const {setAdd} = props;
    function onDelete(id) {
        var arr = add.filter((item) => {
            if (item.id === id) {
                return false

            } else {
                return true
            }

        }

        )
        setAdd(arr)



    }
    return (
        <>
            <div className='flex justify-between'>
                <p>{props.index + 1}.{props.item.act}</p>
                <button className='text-red-400' onClick={() => (onDelete(props.id))}>Delete</button>
            </div>
        </>

    )
}

export default TodoItem