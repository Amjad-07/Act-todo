import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'
import Header from '../components/Header'
import TodoContainer from '../components/TodoContainer'



export const Landing = () => {
    const data = useLocation()
    

  return (
    <>
     <div className='bg-black p-14' >

<div className='bg-white  p-10 border rounded-md ' >
  <Header name={data.state.user} />
  <div className='flex justify-between gap-7 my-5 flex-wrap'>
    <Card bgColor={"red"} title={"Act-todo"} subTitle={"Project"} />
    <Card bgColor={"violet"} title={"Using"} subTitle={"React"} />
    <Card bgColor={"orange"} title={"Built by"} subTitle={"Amjad"} />

  </div>
  <TodoContainer/>
  

</div >
</div >
    </>
  )
}
