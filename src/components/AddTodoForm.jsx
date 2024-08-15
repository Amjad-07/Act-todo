import React, { useState } from 'react'

const AddTodoForm = (props) => {
    const { add } = props;
    const { setAdd } = props;
    const [get, setGet] = useState('')
    function onPick(e) {
        setGet(e.target.value)




    }
    function onAdd() {
        setAdd([...add, { id: add.length + 1, act: get }])
        setGet("")



    }

    return (<>
        <div>
            <div className='flex flex-col gap-2 align-middle justify-center'>
                <div>
                    <h1 className='text-2xl font-medium'>Manage Activities</h1></div>
                <div className=' flex  justify-center align-middle  flex-col gap-2' >
                    <input type="text" className='border border-black p-1 rounded' placeholder='Next-Actitvity?' onChange={onPick} value={get} />
                    <button className='bg-black text-white  border border-black p-1 rounded ' style={{width:"50px"}} onClick={onAdd}>Add</button></div>
            </div>
        </div>
    </>
    )
}

export default AddTodoForm