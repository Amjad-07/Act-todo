import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


export const Signup = (props) => {
    const navigate = useNavigate()
    const {user} = props
    const {setUser} =props
    const [enteruser,setEnterUser] = useState("")
    const [epass,setEpass] = useState("")
    
    function handleUser(e){
        setEnterUser(e.target.value)


    }
    function handlePass(e){
        setEpass(e.target.value)


    }
    function onAdd(){
        setUser([...user,{ username:enteruser,
            password:epass
           }])
           navigate("/")


    }


    return (
        <>
            <div className='bg-black p-10 '>
                <div className='bg-white p-10 border rounded-md'>
                    <h1 className='text-3xl font-medium'>Hey Hi</h1>
                    <p>Sign up here :)</p>
                    <div className='flex flex-col gap-2 my-2'>
                        <input type="text" className='w-52 border-black p-1 bg-transparent border rounded-md ' placeholder='Username' onChange={handleUser}/>
                        <input type="text" className='w-52 border-black p-1 bg-transparent border rounded-md ' placeholder='Password' onChange={handlePass}/>
                        <input type="text" className='w-52 border-black p-1 bg-transparent border rounded-md ' placeholder='Conform Password' />
                        <button className='bg-orange-300 w-24 p-1 rounded-md' onClick={onAdd}>Signup</button>
                        <p >Already have a account? <Link to={"/"} className='underline'>Login</Link></p>

                    </div>
                </div>

            </div>
        </>
    )
}
