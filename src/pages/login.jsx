import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const Login = (props) => {
    const navigate = useNavigate()
    const {user} = props
    const [sign,setSign] = useState(true)
    const [enteruser,setEnterUser] = useState("")
    const [epass,setEpass] = useState("")
    
    function handleUser(e){
        setEnterUser(e.target.value)


    }
    function handlePass(e){
        setEpass(e.target.value)


    }
    function checkUser(){
        console.log(user);

        user.filter((item)=>{
            if(item.username===enteruser && item.password===epass){
                console.log("succes");
                
                setSign(true)
                
                return navigate("/landing" ,{state: {user:enteruser}})
                
            }else{
                setSign(false)

                return false

                
            }

        })
        

        
    }
  return (
    <>
    
    <div className='bg-black p-10 '>
                <div className='bg-white p-10 border rounded-md'>
                    <h1 className='text-3xl font-medium'>Hey Hi</h1>
                   { sign?<p>I help you manage your actvities after you login:)</p>:<p className='text-red-500'>Please sign up</p>}
                    <div className='flex flex-col gap-2 my-2'>
                        <input type="text" className='w-52 border-black p-1 bg-transparent border rounded-md ' placeholder='Username' onChange={handleUser} value={enteruser}/>
                        <input type="text" className='w-52 border-black p-1 bg-transparent border rounded-md ' placeholder='Password' onChange={handlePass} value={epass}/>
                        <button className='bg-[#8272DA] w-24 p-1 rounded-md' onClick={checkUser}>Login</button>

                        <p >Didn't have a account? <Link to={"/signup"} className='underline'>Signup</Link></p>
                        

                    </div>
                </div>

            </div>
    
    </>
  )
}
